import React, {useCallback, useMemo} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {WarningIcon} from "@chakra-ui/icons";
import {CryptoMachine} from "../../lib/crypto";
import {useSuccessToast, useWarningToast} from "../../hooks/useToast";

const SignupButton:React.FC<IBaseProps> = (props:IBaseProps) => {
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const successToast = useSuccessToast()
	const warningToast = useWarningToast()
	const spaceName = useSelector((state:StateType)=>state.spaceNameValue);
	const password = useSelector((state:StateType)=>state.passwordValue);

	const signup = useCallback(()=>{
		console.log("spacename:",spaceName,", password:",password)
		let encryptor = new CryptoMachine();
		if(spaceName===undefined || password===undefined){
			warningToast("Undefined content")
			return
		}
			console.log(encryptor.getAddrAndEtherSignForStorage(spaceName, password))
			successToast("Init Vault Spacename Success")
	},[spaceName, password])

	const activeButton = useMemo(()=>{
		return(
			<Button
				colorScheme="blackAlpha"
				fontSize="xl"
				onClick={signup}
				w="100%"
			>
				<Trans>Let's Sign </Trans>
			</Button>
		);

	},[signup]);

	const inactiveButton = useMemo(()=>{
		return(
			<Button
				width="100%"
				colorScheme="blackAlpha"
				disabled={true}
				size="lg"
			>
				<WarningIcon w={5} h={5} color="red.500" /> <Trans> Please connect wallet firstly </Trans>
			</Button>
		);

	},[]);

	return(
		<>
			{isConnection===true && activeButton}
			{isConnection!==true && inactiveButton}
		</>
	);
}

export {SignupButton};
