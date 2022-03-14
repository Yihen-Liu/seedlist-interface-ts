import {useToast, ToastId} from "@chakra-ui/react";
import React from "react";

const toast = useToast()
const toastIdRef= React.useRef()

const PopWarningToast = function (content:string) {
     toast({
        description: content,
        isClosable: true,
        status:"warning",
        duration:2000,
        position:"top"
    })
}

const PopSuccessToast = function (content:string) {
    toast({
        description: content,
        isClosable: true,
        status:"success",
        duration:2000,
        position:"top"
    })
}

const PopInfoToast = function (content:string) {
//    toastIdRef.current = toast({
    toast({
        description: content,
        isClosable: true,
        status:"info",
        duration:9000,
        position:"top"
    })
}

export {PopInfoToast, PopSuccessToast, PopWarningToast};