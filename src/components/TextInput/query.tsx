import {Box, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React from "react";
import {IBaseProps} from "../../interfaces/props";

const QueryArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
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
/*
                        onChange={()=>{}}
                        placeholder={"placeholder..."}
*/
                    />
                </Stack>
            </Box>
        </VStack>
);
}
export {QueryArea};

