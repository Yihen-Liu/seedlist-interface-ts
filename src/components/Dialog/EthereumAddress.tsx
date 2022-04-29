import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter, DrawerCloseButton, Input, IconButton, Checkbox, HStack, Tooltip
} from "@chakra-ui/react";
import {Box, Stack, Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {useRecoilState} from "recoil";
import {bitcoinWalletState, ethereumWalletState, languageState} from "../../hooks/Atoms";
import {ViewOffIcon} from "@chakra-ui/icons";

const EthereumAddress:React.FC<IBaseProps> = (props:IBaseProps)=>{

	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useDispatch();
	const [lang, ] = useRecoilState(languageState)
	const [passwordHolder, setPasswordHolder]	= useState<string>("password ...")
	const [tipMessage, setTipMessage] = useState<string>("Click me to decrypt")
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

	const isConnection = useSelector((state:StateType)=>state.walletConnection)
	const [isEthereumWallet, setEthereumWallet] = useRecoilState(ethereumWalletState);
	useEffect(()=>{
		if(isEthereumWallet===true){
			setOpen(true);
		}
	},[isEthereumWallet])

	const doCancel = useCallback(()=>{
		setEthereumWallet(false);
		setOpen(false)
	},[dispatch])

	const doSubmit = useCallback(()=>{

	},[])

	const showQueryContent = useMemo(()=>{
		return(
			<></>
		)
	},[]);

	return(
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={doCancel}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px'>

					<Text fontSize="18px" color="white">
						<Trans>Ethereum Address:</Trans>
					</Text>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='30px'>
						<Box marginY="20px">
							<Tooltip label={tipMessage} aria-label='A tooltip' bg="blackAlpha.900">
								<Text color="white" marginY="10px">
									Label1: **************************
								</Text>
							</Tooltip>

							<Tooltip label={tipMessage} aria-label='A tooltip' bg="blackAlpha.900">
								<Text color="white" marginY="10px">
									Label2: **************************
								</Text>
							</Tooltip>
						</Box>
					</Stack>

				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
						<Trans>Cancel</Trans>
					</Button>
					<Button colorScheme='blackAlpha' mr={3} onClick={doSubmit}>
						<Trans>Submit</Trans>
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export {EthereumAddress};
