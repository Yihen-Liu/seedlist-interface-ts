import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {Tooltip} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {signupAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";

const SignupLabel:React.FC<IBaseProps> = (props:IBaseProps) =>{
    const dispatch = useDispatch();
    const click = useCallback(()=>dispatch(signupAction()),[dispatch]);
    return(
        <Tooltip placement="left" hasArrow={true} fontSize={18} label="User have to sign up a spacename before save or query content.">
            <Button
                colorScheme="blackAlpha"
                fontSize="xl"
                onClick={click}
                w={["32", "40"]}
            >
                <Trans> Sign Up </Trans>
            </Button>
        </Tooltip>
    );
}
export {SignupLabel};