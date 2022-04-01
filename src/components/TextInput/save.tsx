import {Box, HStack, Stack, VStack} from "@chakra-ui/layout";
import {TextInput} from "./textinput";
import React, {useMemo, useState} from "react";
import {IBaseProps} from "../../interfaces/props";
import {useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {useRecoilState} from "recoil";
import {languageState} from "../../hooks/useLanguage";

const SaveArea:React.FC<IBaseProps> = (props:IBaseProps)=>{
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const [lang, ] = useRecoilState(languageState)
	const [spaceNameHolder, setSpaceNameHolder]	= useState<string>("seedlist space name ...")
	const [labelHolder, setLabelHolder] = useState<string>("label ...")
	const [contentHolder, setContentHolder] = useState<string>("saved content ...")
	useMemo(()=>{
		if(lang==='zh-CN'){
			setSpaceNameHolder("输入用户空间名称 ...")
			setLabelHolder("标签名")
			setContentHolder("存储内容 ...")
		}

		if(lang==='en-US'){
			setSpaceNameHolder("seedlist space name ...")
			setLabelHolder("label ...")
			setContentHolder("saved content ...")
		}
	},[lang])

    return(
        <VStack spacing={0}  color="black">
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <Stack spacing={2}>
                    <TextInput
	                    placeholder={spaceNameHolder}
	                    type={'text'}
	                    disabled={!isConnection}
/*
                        disabled={this.state.spacename.disabled}
                        onChange={this.setSpaceName}
                        placeholder={this.state.spacename.message}
*/
                    />
                </Stack>
            </Box>
            <Box
                w="100%"
                bg="whiteAlpha"
                p={4}
                borderRadius={8}
                boxShadow="lg"
            >
                <HStack spacing={2}>
                    <Box w="30%">
                        <TextInput
	                        placeholder={labelHolder}
	                        type={'text'}
	                        disabled={!isConnection}
/*
                            disabled={this.state.label.disabled}
                            onChange={this.setLabel}
                            placeholder={this.state.label.message}
*/
                        />
                    </Box>

                    <Box w="70%">
                        <TextInput
	                        placeholder={contentHolder}
	                        type={'text'}
	                        disabled={!isConnection}
/*
                            disabled={this.state.content.disabled}
                            onChange={this.setContent}
                            placeholder={this.state.content.message}
*/
                        />
                    </Box>

                </HStack>
            </Box>
        </VStack>

    );
}

export {SaveArea};