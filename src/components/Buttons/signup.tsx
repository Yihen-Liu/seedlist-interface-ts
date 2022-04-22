import React, {useCallback, useMemo} from "react";
import {Button} from "@chakra-ui/button";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {WarningIcon} from "@chakra-ui/icons";
import {CryptoMachine} from "../../lib/crypto";
import {useSuccessToast, useWarningToast} from "../../hooks/useToast";
import {etherClient} from "../../ethers/etherClient";

const SignupButton:React.FC<IBaseProps> = (props:IBaseProps) => {
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const successToast = useSuccessToast()
	const warningToast = useWarningToast()
	const spaceName = useSelector((state:StateType)=>state.spaceNameValue);
	const password = useSelector((state:StateType)=>state.passwordValue);

	const signup = useCallback(async ()=>{
		console.log("spacename:",spaceName,", password:",password)
		let encryptor = new CryptoMachine();
		if(spaceName===undefined || password===undefined){
			warningToast("Undefined content")
			return
		}
		//console.log(encryptor.getAddrAndEtherSignForStorage(spaceName, password))
		//await etherClient.loadProvider()
		etherClient.connectSeedlistContract()
		etherClient.connectSigner()
		if(!etherClient.client){
			console.error("connect signer error in signup")
		}
		let initData = await encryptor.getAddrAndEtherSignForStorage(spaceName, password)
		await etherClient.client?.initKeySpace(initData.Addr, initData.Addr0, initData.SignMessageHash, initData.Sign.r, initData.Sign.s, initData.Sign.v, initData.RandomNum)
		successToast("Init Vault Spacename Success")
		/*
				etherClient.loadProvider().then(()=>{
					etherClient.connectSeedlistContract()
					//let storageWatchDog = getAddrAndEtherSignForStorage(keyspaceValue, pwdValue);
					//let tx = await seedContract.initKeySpace(storageWatchDog.Addr, storageWatchDog.Addr0, storageWatchDog.Sign.messageHash, storageWatchDog.Sign.r, storageWatchDog.Sign.s, storageWatchDog.Sign.v, storageWatchDog.RandomNum);
					let initData = encryptor.getAddrAndEtherSignForStorage(spaceName, password)
					return etherClient.client?.initKeySpace(initData.Addr, initData.Addr0, initData.SignMessageHash, initData.Sign.r, initData.Sign.s, initData.Sign.v, initData.RandomNum)
				}).then(()=>{
					console.log("init success")
				});
		*/
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
