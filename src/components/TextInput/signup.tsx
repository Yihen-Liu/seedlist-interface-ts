import React, {useMemo, useState} from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import {IBaseProps} from "../../interfaces/props";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {signupPasswordAction, signupSpacenameAction} from "../../reducers/action";
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/useLanguage";

const SignupArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const dispatch = useDispatch();

	const isConnection = useSelector((state:StateType)=>state.walletConnection);
	const [spaceValue, setSpaceValue] = useState<string>("")
	const [pwdValue, setPwdValue] = useState<string>("")
	const handleSpaceChange = (event: { target: { value: React.SetStateAction<string>; }; })=>setSpaceValue(event.target.value)
	const handlePwdChange = (event: { target: { value: React.SetStateAction<string>; }; })=>setPwdValue(event.target.value)

	const [lang, ] = useRecoilState(languageState)
	const [spaceNameHolder, setSpaceNameHolder]	= useState<string>("Enter vault name ...")
	const [passwordHolder, setPasswordHolder] = useState<string>("password ...")
	useMemo(()=>{
		if(lang==='zh-CN'){
			setSpaceNameHolder("输入保险库空间名称 ...")
			setPasswordHolder("密钥 ...")
		}

		if(lang==='en-US'){
			setSpaceNameHolder("Enter vault name ...")
			setPasswordHolder("password ...")
		}
	},[lang])

	useMemo(()=>{
		dispatch(signupSpacenameAction(isConnection, spaceValue));
	},[dispatch, isConnection, spaceValue])

	useMemo(()=>{
		dispatch(signupPasswordAction(isConnection, pwdValue));
	},[dispatch,isConnection, pwdValue])

    return(
        <VStack spacing={0}  color="black">
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <Stack spacing={2}>
                    <TextInput
	                    placeholder={spaceNameHolder}
	                    type={'text'}
	                    disabled={!isConnection}
	                    value={spaceValue}
	                    onChange={handleSpaceChange}
/*
                        disabled={this.state.spacename.disabled}
                        onChange={this.setSpaceName}
                        placeholder={this.state.spacename.message}
*/
                    />
                </Stack>
            </Box>
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <Stack spacing={2}>
                    <TextInput
	                    type={'password'}
	                    placeholder={passwordHolder}
	                    disabled={!isConnection}
	                    value={pwdValue}
	                    onChange={handlePwdChange}
/*
                        disabled={this.state.password.disabled}
                        onChange={this.setPassword}
                        placeholder={this.state.password.message}
                        type={'password'}
*/
                    />
                </Stack>
            </Box>
        </VStack>

    );
}

export {SignupArea};