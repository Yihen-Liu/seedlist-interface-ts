import React, {useCallback} from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {queryAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {StateType} from "../../reducers/state";

const QueryLabel:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const dispatch = useDispatch();
	const isConnection = useSelector((state:StateType)=>state.walletConnection);
    const click = useCallback(()=>dispatch(queryAction(isConnection)),[dispatch]);

    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={click}
            w={["32", "40"]}
        >
          <Trans> Query </Trans>
        </Button>
    );
}
export {QueryLabel};