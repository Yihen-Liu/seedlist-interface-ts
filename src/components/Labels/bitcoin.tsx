import React from "react";
import {Button} from "@chakra-ui/button";
import {useDispatch, useSelector} from "react-redux";
import {saveAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {StateType} from "../../reducers/state";


const BitcoinLabel:React.FC<IBaseProps> = (iprops:IBaseProps)=>{
	const dispatch = useDispatch();
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	return(
		<Button
			colorScheme="blackAlpha"
			fontSize="xl"
			onClick={()=>dispatch(saveAction(isConnection))}
			w={["32", "40"]}
		>
			<Trans> Bitcoin </Trans>
		</Button>

	);
}
export {BitcoinLabel};
