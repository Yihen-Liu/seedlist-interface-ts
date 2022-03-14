import {Box, Center, Text} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import React from "react";
interface IProps {

}

const PageRouter:React.FC<IProps> = (props:IProps)=> {
    return(
        <Box flexGrow={1}>
            <Center>
                <ButtonGroup spacing="2">
                    <Button colorScheme="blackAlpha" bg="#2b2d32">
                        <Text fontSize="xl">
                            Entropy
                        </Text>
                    </Button>

                    <Button colorScheme="blackAlpha" bg="#2b2d32">
                        <Text fontSize="xl">
                            Brain Wallet
                        </Text>
                    </Button>

                    <Button colorScheme="blackAlpha" bg="#2b2d32">
                        <Text fontSize="xl">
                            Mask
                        </Text>
                    </Button>
                </ButtonGroup>
            </Center>
        </Box>
    );
}

export {PageRouter};