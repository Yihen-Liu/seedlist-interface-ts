import React, {useCallback, useMemo, useState} from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {queryAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {pageState, StateType} from "../../reducers/state";
import {Text} from "@chakra-ui/layout";

const QueryLabel:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const dispatch = useDispatch();
	const isConnection = useSelector((state:StateType)=>state.walletConnection);
    const click = useCallback(()=>dispatch(queryAction(isConnection)),[dispatch, isConnection]);

	const [color, setColor] = useState<string>("gray");
	const page = useSelector((state:StateType)=>state.page);

	useMemo(()=>{
		if(page === pageState.QUERY){
			setColor("")
		}
	},[page])

    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={click}
            w={["32", "40"]}
        >
	        <Text color={color}> <Trans> Query </Trans> </Text>
        </Button>
    );
}
export {QueryLabel};