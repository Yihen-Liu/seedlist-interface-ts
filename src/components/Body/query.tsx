import React, {useState} from "react";
import {Box, Center, HStack, Stack} from "@chakra-ui/layout";
import {Labels} from "../Labels/labels";
import {InputAreas} from "../TextInput/inputareas";
import {Buttons} from "../Buttons/buttons";
import {Password } from "../Dialog/password";
interface IProps {

}

const QueryBody:React.FC<IProps> = (props:IProps)=>{
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

                        <Password />
                    </Stack>
                </Box>
            </Stack>
        </Center>
    );
}

export {QueryBody};