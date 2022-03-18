import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {NotAllowedIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";
import {passwordAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {ActionType} from "../../reducers/state";

const SaveButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const dispatch = useDispatch();
    const doSave = useCallback(()=>dispatch(passwordAction(ActionType.CLICK_SAVE)),[dispatch]);
    return (
        <>
            <Button width="100%" colorScheme="blackAlpha"
                size="lg" disabled={true} onClick={doSave} >
            <NotAllowedIcon w={5} h={5} color=".500"/>
                <Trans>Add More</Trans>
            </Button>
            <Button
                width="100%"
                colorScheme="blackAlpha"
                size="lg"
                onClick={()=>doSave() }
            >
                <Trans>Let's Save</Trans>
            </Button>
        </>
    );

}

export {SaveButton};
