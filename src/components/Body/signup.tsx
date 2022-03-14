import React from "react";
import {Box, Center, HStack, Stack} from "@chakra-ui/layout";
import {Labels} from "../Labels/labels";
import {InputAreas} from "../TextInput/inputareas";
import {Buttons} from "../Buttons/buttons";

interface IProps {

}
const SignBody:React.FC<IProps>=(props:IProps)=>{
    return(
        <Center>
            <Stack>
                <Box bgColor="#2b2d32" p="5" w="100%" maxW="lg" borderRadius="8" >
                    <Stack spacing={6}>

                        <Labels />

                        <InputAreas />

                        <HStack spacing="24px" width="100%">
                            <Buttons />
                        </HStack>

                    </Stack>
                </Box>
            </Stack>
        </Center>
    );
}
/*
class SignBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeLabel: props.activeLabel
        }
    }

    setActiveLabel=(label)=>{
        this.setState({activeLabel:label});
        this.props.setActiveLabel(label);
    }

    render() {
        return (
            <Center>
                <Stack>
                    <Box bgColor="#2b2d32" p="5" w="100%" maxW="lg" borderRadius="8" >
                        <Stack spacing={6}>

                            <Labels activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>

                            <InputAreas activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>

                            <HStack spaceing="24px" width="100%">
                                    <Buttons activeLabel={this.state.activeLabel} setActiveLabel={this.setActiveLabel}/>
                            </HStack>

                        </Stack>
                    </Box>
                </Stack>
            </Center>
        );
    }
}
*/

export {SignBody};