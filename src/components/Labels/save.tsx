import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch} from "react-redux";
import {saveAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";


const SaveLabel:React.FC<IBaseProps> = (iprops:IBaseProps)=>{
    const dispatch = useDispatch();
    const click = useCallback(()=>{
        dispatch(saveAction());
    },[dispatch]);
    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={click}
            w={["32", "40"]}
        >
           <Trans> Save </Trans>
        </Button>

    );
}
export {SaveLabel};