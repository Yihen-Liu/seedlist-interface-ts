import React, {useCallback} from "react";
import {IBaseProps} from "../../interfaces/props";
import {IconButton, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";
import {Trans} from "@lingui/macro";
import {HamburgerIcon} from "@chakra-ui/icons";
import {languageState} from "../../hooks/useLanguage";
import {useRecoilState} from "recoil";

const Menus:React.FC<IBaseProps> = (props:IBaseProps) =>{
	const [ , setLang] = useRecoilState(languageState)
	const doCheck = useCallback((value:string)=>{
		setLang(value)
	},[setLang])

    return(
        <>
        <Box width="10px" /> <Box>
			<Menu
				autoSelect={false}
				closeOnSelect={false}
			>
				<MenuButton
					as={IconButton}
					aria-label='Options'
					icon={<HamburgerIcon />}
					variant='outline'
					colorScheme={"blackAlpha.100"}
					bg={"#2b2d32"}
					borderRadius='md'
					borderWidth='0px'
					_hover={{ bg: '#2b2d32' }}
					_expanded={{ bg: '#2b2d32' }}
					_focus={{ boxShadow: 'outline', bg:"#2b2d32" }}
				/>
				<MenuList maxWidth='100px' bgColor={"#2b2d32"} borderColor={"black"}>
					<MenuOptionGroup defaultValue='rinkeby' title='Network' type='radio'>
						<MenuItemOption _hover={{ bg: 'blackAlpha.500'}} value='rinkeby'>
						  <Trans> Rinkeby Test Network </Trans>
						</MenuItemOption>
						<MenuItemOption _hover={{ bg: 'blackAlpha.500'}} value='mainnet' isDisabled={true}>
							<Trans> Ethereum Mainnet </Trans>
						</MenuItemOption>
					</MenuOptionGroup>
					<MenuDivider />
					<MenuOptionGroup defaultValue='english' title='Language' type='radio'>
						<MenuItemOption onClick={()=>{doCheck("zh-CN")}} _hover={{ bg: 'blackAlpha.500'}} value='chinese'>中文</MenuItemOption>
						<MenuItemOption onClick={()=>{doCheck("en-US")}} _hover={{ bg: 'blackAlpha.500'}} value='english'>English</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
        </Box>
        </>
    );
}
export {Menus}