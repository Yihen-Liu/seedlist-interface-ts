import React from "react";
import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import SignUpPubSub from "../../eventbus/signup";

interface IProps {

}

const SignupArea:React.FC<IProps> = (props:IProps)=>{
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
/*
class SignupArea extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            spacename:{
                message:"seedlist space name...",
                value:"space value",
                disabled:false
            },
            password:{
                message:"seedlist password...",
                value:"pwd value",
                disabled:false
            },
            activeLabel: props.activeLabel
        };
    }

    setSpaceName=(msg)=>{
        SignUpPubSub.commit("ChangeSpaceNameInSignUp", msg);

    }

    setPassword=(msg)=>{
        SignUpPubSub.commit("ChangePasswordInSignUp", msg);

    }

    render() {
        return (
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
                            disabled={this.state.spacename.disabled}
                            onChange={this.setSpaceName}
                            placeholder={this.state.spacename.message}
                            /!*
                                                        type={'password'}
                            *!/
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
                            disabled={this.state.password.disabled}
                            onChange={this.setPassword}
                            placeholder={this.state.password.message}
                            type={'password'}
                        />
                    </Stack>
                </Box>
            </VStack>
        );
    }

}
*/

export {SignupArea};