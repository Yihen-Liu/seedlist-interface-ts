import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter, DrawerCloseButton, Input, Checkbox
} from "@chakra-ui/react";
import {Box, Stack, Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/Atoms";
import { ChangeEvent } from "react";

const PasswordInSave:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useDispatch();

	const isPassword = useSelector((state:StateType)=>state.password);
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const [lang, ] = useRecoilState(languageState)
	const [passwordHolder, setPasswordHolder]	= useState<string>("password ...")
	const [checked, setChecked] = useState<boolean>(false)
	const handleCheckChange = (event: ChangeEvent<HTMLInputElement>)=>setChecked(event.target.checked)

	useMemo(()=>{
		if(lang==='zh-CN'){
			setPasswordHolder("密钥...")
		}

		if(lang==='en-US'){
			setPasswordHolder("password ...")
		}
	},[lang])

	const economicModelDesc = useMemo(()=>{
		if(checked===false) return;
		return(
			<Box marginY="20px">
					<Text marginY="10px" color="white">
						<Trans>1. 21 million tokens are given to community users as an incentive cycle;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>2. Incentives are generated along with the user's storage behavior. If there is no storage, there will be no incentives;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>3. In the first cycle, the excitation amount is 2100 each time it is stored; </Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>4. When entering the next cycle, each excitation amount is half of the previous cycle;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>5. With each user's token incentive, a 10% increment will be issued to the DAO address;</Trans>
					</Text>
					<Text marginY="10px" color="white">
						<Trans>6. Using the displacement halving, the total amount of token incentives for a complete cycle is about 23.1 million;</Trans>
					</Text>
			</Box>
		)
	},[checked])

	useEffect(()=>{
		if(isPassword===true){
			setOpen(true);
		}
	},[isPassword])

	const doCancel = useCallback(()=>{
		dispatch(cancelPasswordAction(ActionType.CLICK_SAVE, isConnection))
		setOpen(isOpen)
	},[dispatch])

	const doSubmit = useCallback(()=>{

	},[])

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
						<Trans> Please enter your password </Trans>
					</Text>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='24px'>
						<Box>
							<Text fontSize="18px" color="white"> </Text>
							<Input  id='username' placeholder={passwordHolder} type='password' />
						</Box>
					</Stack>
					<Stack spacing='30px'>
						<Box marginY="20px">
							<Checkbox
								size='md'
								colorScheme='orange'
								isChecked={checked}
								onChange={handleCheckChange}
							>
								<Text color="white">
									<Trans>I want to mint seed incentive token</Trans>
								</Text>
							</Checkbox>
							{economicModelDesc}
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
export {PasswordInSave};
