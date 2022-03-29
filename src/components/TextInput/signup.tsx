import React from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import {IBaseProps} from "../../interfaces/props";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../reducers/state";

const SignupArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const isConnection = useSelector((state:StateType)=>state.walletConnection);
	//const dispatch = useDispatch();

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
	                    placeholder={'seedlist space name ...'}
	                    type={'text'}
	                    disabled={!isConnection}
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
	                    placeholder={'password ...'}
	                    disabled={!isConnection}
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