import {Box, Center, Text} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import React, {useCallback, useState} from "react";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {NavLink} from "react-router-dom"

const PageRouter:React.FC<IBaseProps> = (props:IBaseProps)=> {
	const [entropyColor, setEntropyActive] = useState<string>("");
	const [walletColor, setWalletActive] = useState<string>("gray");
	const [maskColor, setMaskActive] = useState<string>("gray");

	const clickButton = useCallback((btn:string)=>{
		setEntropyActive("gray");
		setWalletActive("gray");
		setMaskActive("gray");
		if(btn === "mask"){
			setMaskActive("");
		}
		if(btn === "wallet"){
			setWalletActive("");
		}
		if(btn==="entropy"){
			setEntropyActive("");
		}
	},[])

    return(
			<Box flexGrow={1}>
				<Center>
					<ButtonGroup spacing="2">
						<Button bg="#2b2d32" colorScheme="blackAlpha" onClick={()=>clickButton("entropy")}>
							<Text fontSize="xl" color={entropyColor}>
								<NavLink to="/entropy">
									<Trans>Entropy </Trans>
								</NavLink>
							</Text>
						</Button>

						<Button bg="#2b2d32" colorScheme="blackAlpha" onClick={()=>clickButton("wallet")}>
							<Text fontSize="xl" color={walletColor}>
								<NavLink to="/brainwallet">
									<Trans>Brain Wallet</Trans>
								</NavLink>
							</Text>
						</Button>

						<Button  bg="#2b2d32" colorScheme="blackAlpha" onClick={()=>clickButton("mask")}>
							<Text fontSize="xl" color={maskColor}>
								<NavLink to="/mask">
									<Trans>Mask</Trans>
								</NavLink>
							</Text>
						</Button>
					</ButtonGroup>
				</Center>
			</Box>
    );
}

export {PageRouter};