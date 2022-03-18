import {Box, Center, Text} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import React from "react";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {NotAllowedIcon} from "@chakra-ui/icons";

const PageRouter:React.FC<IBaseProps> = (props:IBaseProps)=> {
    return(
        <Box flexGrow={1}>
            <Center>
                <ButtonGroup spacing="2">
                    <Button colorScheme="blackAlpha" bg="#2b2d32">
                        <Text fontSize="xl">
                            <Trans>Entropy </Trans>
                        </Text>
                    </Button>

                    <Button colorScheme="blackAlpha" disabled={true} bg="#2b2d32">
                        <Text fontSize="xl">
                            <NotAllowedIcon w={5} h={5} color=".500"/>
                            <Trans>Brain Wallet</Trans>
                        </Text>
                    </Button>

                    <Button colorScheme="blackAlpha" disabled={true} bg="#2b2d32">
                        <Text fontSize="xl">
                            <NotAllowedIcon w={5} h={5} color=".500"/>
                            <Trans>Mask</Trans>
                        </Text>
                    </Button>
                </ButtonGroup>
            </Center>
        </Box>
    );
}

export {PageRouter};