import React from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import {IBaseProps} from "../../interfaces/props";

const SignupArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
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