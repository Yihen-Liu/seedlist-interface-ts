import React, { useMemo, useState} from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {saveAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {pageState, StateType} from "../../reducers/state";
import {Text} from "@chakra-ui/layout";


const SaveLabel:React.FC<IBaseProps> = (iprops:IBaseProps)=>{
    const dispatch = useDispatch();
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const [color, setColor] = useState<string>("gray");
	const page = useSelector((state:StateType)=>state.page);

	useMemo(()=>{
		if(page===pageState.SAVE){
			setColor("")
		}
	},[])

    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={()=>dispatch(saveAction(isConnection))}
            w={["32", "40"]}
        >
	        <Text color={color}> <Trans> Save </Trans> </Text>
        </Button>

    );
}
export {SaveLabel};