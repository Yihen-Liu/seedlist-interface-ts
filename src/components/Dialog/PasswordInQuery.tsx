import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter, DrawerCloseButton, Input, IconButton, Checkbox, HStack, Tooltip
} from "@chakra-ui/react";
import {Box, Stack, Text, VStack} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {useRecoilState} from "recoil";
import {languageState, vaultNameState, vaultPasswordState} from "../../hooks/Atoms";
import {ViewOffIcon} from "@chakra-ui/icons";
import {TextInput} from "../TextInput/textinput";
import {CryptoMachine} from "../../lib/crypto";
import {etherClient} from "../../ethers/etherClient";
import {useWarningToast} from "../../hooks/useToast";

const PasswordInQuery:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [savedContents, setSavedContents] = useState<string[]>([]);
	const [savedLabels, setSavedLabels] = useState<string[]>([]);

	const [isOpen, setOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();
	const [lang, ] = useRecoilState(languageState)
	const [passwordHolder, setPasswordHolder]	= useState<string>("password ...")
	const [tipMessage, setTipMessage] = useState<string>("Click me to decrypt")

	const [vaultName, setVaultName] = useRecoilState(vaultNameState);
	const [password, setPassword] = useRecoilState(vaultPasswordState);
	const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>)=>setPassword(event.currentTarget.value)

	const warningToast = useWarningToast()

	useMemo(()=>{
		if(lang==='zh-CN'){
			setPasswordHolder("密钥...")
			setTipMessage("点击解密内容")
		}

		if(lang==='en-US'){
			setPasswordHolder("password ...")
			setTipMessage("Click me to decrypt")
		}
	},[lang])

	const isPassword = useSelector((state:StateType)=>state.password);
	const isConnection = useSelector((state:StateType)=>state.walletConnection)
	useEffect(()=>{
		if(isPassword===true){
			setOpen(true);
		}
	},[isPassword])

	const doCancel = useCallback(()=>{
		dispatch(cancelPasswordAction(ActionType.CLICK_QUERY, isConnection))
		setOpen(isOpen)
		setSavedLabels([]);
		setSavedContents([]);
	},[vaultName, dispatch])

	const doSubmit = useCallback(async ()=>{
		setIsLoading(true);
		let encryptor = new CryptoMachine();
		if(vaultName===undefined || password===undefined) {
			warningToast("Undefined content")
			setIsLoading(false);
			return
		}

		etherClient.connectSeedlistContract()
		etherClient.connectSigner()
		if(!etherClient.client){
			setIsLoading(false);
			warningToast("connect signer error in signup")
			return
		}

		let params = await encryptor.calculateVaultHasRegisterParams(vaultName, password);
		let res = await etherClient.client?.vaultHasRegister(params.address, params.deadline, params.signature.r, params.signature.s, params.signature.v);
		if(res === false){
			setIsLoading(false);
			warningToast("Regist vault name firstly");
			return;
		}

		let totalSavedParams = await encryptor.calculateTotalSavedItemsParams(vaultName, password);

		let savedItemsRes = await etherClient.client?.totalSavedItems(totalSavedParams.address, totalSavedParams.deadline, totalSavedParams.signature.r, totalSavedParams.signature.s, totalSavedParams.signature.v);
		if(savedItemsRes <=0){
			setIsLoading(false);
			warningToast("nothing was saved");
			return;
		}
		let _savedLabels:string[]= [];
		let _savedContents:string[] = [];

		for(let i=0; i<savedItemsRes; i++){
			let getLabelNameByIndexParams = await encryptor.calculateGetLabelNameByIndexParams(vaultName, password, i);
			let label = await etherClient.client?.labelName(getLabelNameByIndexParams.address, i, getLabelNameByIndexParams.deadline,
				getLabelNameByIndexParams.signature.r, getLabelNameByIndexParams.signature.s, getLabelNameByIndexParams.signature.v);
			_savedLabels[i] = label;
			 _savedContents[i] = "**************************";
		}
		setSavedLabels(_savedLabels);
		setSavedContents(_savedContents);
		setIsLoading(false);
	},[vaultName, password])

	const doDecrypto = useCallback(async (label:string, index:number)=>{
		let encryptor = new CryptoMachine();
		if(vaultName===undefined || password===undefined) {
			warningToast("Undefined content")
			return
		}

		etherClient.connectSeedlistContract()
		etherClient.connectSigner()
		if(!etherClient.client){
			warningToast("connect signer error in signup")
			return
		}

		let queryByNameParams = await encryptor.calculateQueryByNameParams(vaultName, password, label);
		let content = await etherClient.client?.queryDataByLabelName(queryByNameParams.address, label, queryByNameParams.deadline, queryByNameParams.signature.r, queryByNameParams.signature.s, queryByNameParams.signature.v);
		let _savedContents = savedContents;
		console.log("content:", content);
		_savedContents[index] = content;
		setSavedContents(_savedContents);
		console.log("saveContents:", savedContents);
	},[savedContents,savedLabels])

	const showQueryContent = useMemo(()=>{
		const contents = savedLabels.map( (label:string, index:number)=>
			<HStack>
				<Tooltip label={tipMessage} aria-label='A tooltip' bg="blackAlpha.900">
					<Button onClick={async ()=>await doDecrypto(label, index)}>
						{label}: {savedContents[index]}
					</Button>
				</Tooltip>
			</HStack>
		)
		return(
			<>{contents}</>
		);
	},[savedContents]);

	return(
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={doCancel}
			closeOnOverlayClick={false}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px'>

					<Text fontSize="18px" color="white">
						<Trans>Please enter your password</Trans>
					</Text>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='24px'>
						<Box>
							<Text fontSize="18px" color="white"> </Text>
							<TextInput
								placeholder={passwordHolder}
								type={'password'}
								value={password}
								onChange={handlePasswordChange}
							/>

						</Box>
					</Stack>

					<Stack spacing='30px'>
						<Box marginY="20px">
							<ButtonGroup colorScheme='blackAlpha.900'>
								<VStack>
									{showQueryContent}
								</VStack>
							</ButtonGroup>
						</Box>
					</Stack>

				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
						<Trans>Cancel</Trans>
					</Button>
					<Button isLoading={isLoading} colorScheme='blackAlpha' mr={3} onClick={doSubmit}>
						<Trans>Submit</Trans>
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export {PasswordInQuery};
