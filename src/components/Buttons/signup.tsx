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
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/Atoms";

const SignupButton:React.FC<IBaseProps> = (props:IBaseProps) => {
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const successToast = useSuccessToast()
	const warningToast = useWarningToast()
	const spaceName = useSelector((state:StateType)=>state.spaceNameValue);
	const password = useSelector((state:StateType)=>state.passwordValue);
	const [lang, ] = useRecoilState(languageState)

	const signup = useCallback(async ()=>{
		let encryptor = new CryptoMachine();
		if(spaceName===undefined || password===undefined || spaceName === "" || password===""){
			if(lang === "en-US"){
				warningToast("Vault name and password is EMPTY")
			}

			if(lang === "zh-CN"){
				warningToast("保险库名称或密钥不允许为空")
			}
			return
		}

		etherClient.connectSeedlistContract()
		etherClient.connectSigner()
		if(!etherClient.client){
			warningToast("connect signer error in signup")
			if(lang === "en-US"){
				warningToast("Wallet Maybe ERROR")
			}

			if(lang === "zh-CN"){
				warningToast("钱包连接出错")
			}
			return;
		}

		let params = await encryptor.calculateVaultHasRegisterParams(spaceName, password)
		let res = await etherClient.client?.vaultHasRegister(params.address, params.deadline, params.signature.r, params.signature.s, params.signature.v);
		if(res == true){
			if(lang === "en-US"){
				warningToast("Same information has been registed.");
			}
			if(lang==="zh-CN"){
				warningToast("相同的保险库名和密钥已被注册");
			}
			return;
		}

		let vaultParams = await encryptor.calculateInitVaultHubParams(spaceName, password);
		let res0 = await etherClient.client?.initPrivateVault(vaultParams.address, vaultParams.signature.r, vaultParams.signature.s, vaultParams.signature.v ,vaultParams.deadline);

		let _params = await encryptor.calculateVaultHasRegisterParams(spaceName, password)
		let _res = await etherClient.client?.vaultHasRegister(_params.address, _params.deadline, _params.signature.r, _params.signature.s, _params.signature.v);
		if(_res == true){
			if(lang==="zh-CN"){
				successToast("Init Vault Spacename Success");
			}
			if(lang=== "en-US"){
				successToast("保险库空间名称注册成功");
			}
		}

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
