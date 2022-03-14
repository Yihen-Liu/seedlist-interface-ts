import React from "react";
import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    FormLabel, DrawerFooter, DrawerCloseButton, Textarea, Select, InputRightAddon, InputLeftAddon, Input, InputGroup
} from "@chakra-ui/react";
import {Box, Stack, Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {TextInput} from "../TextInput/textinput";
import {AddIcon} from "@chakra-ui/icons";


/*
class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "please enter password...",
            placement: "right",
        }
        this.isOpen = this.props.active;
    }

    onClose = ()=>{
        this.props.setPwdDrawerActive(false);
    }

    submit = ()=>{
        this.props.setPwdDrawerActive(false);
    }

    render() {
        return (
            <>
                <Drawer
                    isOpen={this.isOpen}
                    placement='right'
                    onClose={this.onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>

                            <Text fontSize="18px" color="white">Please enter your password</Text>
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <Text fontSize="18px" color="white"> </Text>
                                    <Input  id='username' placeholder='password ...' />
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={this.onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='whiteAlpha' mr={3} onClick={this.submit}>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        );
    }
}
*/

interface IProps {

}

const Password:React.FC<IProps> = (props:IProps)=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>

                        <Text fontSize="18px" color="white">Please enter your password</Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <Text fontSize="18px" color="white"> </Text>
                                <Input  id='username' placeholder='password ...' />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='whiteAlpha' mr={3} onClick={onClose}>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export {Password};