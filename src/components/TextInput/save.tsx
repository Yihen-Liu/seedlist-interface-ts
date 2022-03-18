import {Box, HStack, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React from "react";
import {IBaseProps} from "../../interfaces/props";

const SaveArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
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
                <HStack spacing={2}>
                    <Box w="30%">
                        <TextInput
/*
                            disabled={this.state.label.disabled}
                            onChange={this.setLabel}
                            placeholder={this.state.label.message}
*/
                        />
                    </Box>

                    <Box w="70%">
                        <TextInput
/*
                            disabled={this.state.content.disabled}
                            onChange={this.setContent}
                            placeholder={this.state.content.message}
*/
                        />
                    </Box>

                </HStack>
            </Box>
        </VStack>

    );
}

export {SaveArea};