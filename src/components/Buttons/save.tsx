import React, {useCallback, useMemo} from "react";
import {Button} from "@chakra-ui/button";
import {NotAllowedIcon, WarningIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {passwordAction} from "../../reducers/action";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {ActionType, StateType} from "../../reducers/state";
import {useRecoilState} from "recoil";
import {labelNameState, languageState, savedContentState, vaultNameState} from "../../hooks/Atoms";
import {useWarningToast} from "../../hooks/useToast";

const SaveButton:React.FC<IBaseProps> = (props:IBaseProps)=>{
    const dispatch = useDispatch();
	const warningToast = useWarningToast()

	const [content, ] = useRecoilState(savedContentState);
	const [labelName, ] = useRecoilState(labelNameState);
	const [vaultName, ] = useRecoilState(vaultNameState);
	const [lang, ] = useRecoilState(languageState)

	const isConnection = useSelector((state:StateType)=>state.walletConnection);
    const doSave = useCallback(()=>{
    	console.log("content/vault/label:", content, vaultName, labelName);
    	if(content === "" || labelName=== "" || vaultName === ""||
		    content === undefined || labelName===undefined || vaultName===undefined
	    ){
    		if(lang==="en-US"){
			    warningToast("Invalid input of Vault/Label/Content");
		    }
    		if(lang === "zh-CN"){
    			warningToast("输入的内容有误，请检查");
		    }
		    return;
	    }
    	dispatch(passwordAction(ActionType.CLICK_SAVE, isConnection));

    },[dispatch, content, labelName, vaultName]);

    const activeButton = useMemo(()=>{
	    return (
		    <>
			    <Button width="100%" colorScheme="blackAlpha"
			            size="lg" disabled={true} onClick={doSave} >
				    <NotAllowedIcon w={5} h={5} color=".500"/>
				    <Trans>Add More</Trans>
			    </Button>
			    <Button
				    width="100%"
				    colorScheme="blackAlpha"
				    size="lg"
				    onClick={()=>doSave() }
			    >
				    <Trans>Let's Save</Trans>
			    </Button>
		    </>
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
			    <WarningIcon w={5} h={5} color="red.500" /> <Trans> Please connect wallet firstly </Trans>
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

export {SaveButton};
