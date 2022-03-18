import React, {useCallback, useEffect, useState} from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter, DrawerCloseButton, Input
} from "@chakra-ui/react";
import {Box, Stack, Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, StateType} from "../../reducers/state";
import {cancelPasswordAction} from "../../reducers/action";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";

const PasswordInQuery:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const [isOpen, setOpen] = useState<boolean>(false)

    const dispatch = useDispatch();

    const isPassword = useSelector((state:StateType)=>state.password);

    useEffect(()=>{
        if(isPassword===true){
            setOpen(true);
        }
    },[isPassword])

    const doCancel = useCallback(()=>{
        dispatch(cancelPasswordAction(ActionType.CLICK_QUERY))
        setOpen(isOpen)
    },[dispatch])

    const doSubmit = useCallback(()=>{

    },[])

    return(
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={doCancel}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>

                        <Text fontSize="18px" color="white">
                            <Trans>Please enter your password</Trans>
                        </Text>
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
                        <Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
                            <Trans>Cancel</Trans>
                        </Button>
                        <Button colorScheme='whiteAlpha' mr={3} onClick={doSubmit}>
                            <Trans>Submit</Trans>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
    );
}
const PasswordInSave:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const [isOpen, setOpen] = useState<boolean>(false)

    const dispatch = useDispatch();

    const isPassword = useSelector((state:StateType)=>state.password);

    useEffect(()=>{
        if(isPassword===true){
            setOpen(true);
        }
    },[isPassword])

    const doCancel = useCallback(()=>{
        dispatch(cancelPasswordAction(ActionType.CLICK_SAVE))
        setOpen(isOpen)
    },[dispatch])

    const doSubmit = useCallback(()=>{

    },[])

    return(
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={doCancel}
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
                        <Button variant='outline' colorScheme='whiteAlpha' mr={3} onClick={doCancel}>
                            Cancel
                        </Button>
                        <Button colorScheme='whiteAlpha' mr={3} onClick={doSubmit}>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
    );
}
export {PasswordInSave, PasswordInQuery};