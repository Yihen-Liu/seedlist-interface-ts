import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch} from "react-redux";
import {passwordAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import { ActionType } from "../../reducers/state";

const QueryButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const dispatch = useDispatch();
    const doQuery = useCallback(()=>dispatch(passwordAction(ActionType.CLICK_QUERY )),[dispatch]);
   return(
       <Button
           colorScheme="blackAlpha"
           fontSize="xl"
           onClick={doQuery }
           w="100%"
       >
           <Trans>Let's Query </Trans>
       </Button>
   );
}

export {QueryButton};