import React from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";

const SignupButton:React.FC<IBaseProps> = (props:IBaseProps) => {
    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={()=>{} }
            w="100%"
        >
            <Trans>Let's Sign </Trans>
        </Button>
    );
}

export {SignupButton};
