import React,{useMemo} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {WarningIcon} from "@chakra-ui/icons";

const SignupButton:React.FC<IBaseProps> = (props:IBaseProps) => {
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const activeButton = useMemo(()=>{
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

	},[isConnection]);

	const inactiveButton = useMemo(()=>{
		return(
			<Button
				width="100%"
				colorScheme="blackAlpha"
				disabled={true}
				size="lg"
			>
				<WarningIcon w={5} h={5} color="red.500" /> Please connect wallet firstly
			</Button>
		);

	},[isConnection]);

	return(
		<>
			{isConnection===true && activeButton}
			{isConnection!==true && inactiveButton}
		</>
	);
}

export {SignupButton};
