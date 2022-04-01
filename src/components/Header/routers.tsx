import {Box, Center, Text} from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/button";
import React, {useCallback, useState} from "react";
import {Trans} from "@lingui/macro";
import {IBaseProps} from "../../interfaces/props";
import {NavLink} from "react-router-dom"
import {useRecoilState} from "recoil";
import { pageState } from "../../hooks/usePage";
import {labelState} from "../../hooks/useLabel";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {signupAction} from "../../reducers/action";

const PageRouter:React.FC<IBaseProps> = (props:IBaseProps)=> {
	const [entropyColor, setEntropyActive] = useState<string>("");
	const [walletColor, setWalletActive] = useState<string>("gray");
	const [maskColor, setMaskActive] = useState<string>("gray");
	const [, setPage] = useRecoilState(pageState)
	const [, setLabel] = useRecoilState(labelState)
	const dispatch = useDispatch();
	const isConnection = useSelector((state:StateType)=>state.walletConnection);

	const clickButton = useCallback((btn:string)=>{
		setEntropyActive("gray");
		setWalletActive("gray");
		setMaskActive("gray");
		if(btn === "mask"){
			setMaskActive("");
			setPage("mask")
		}
		if(btn === "wallet"){
			setWalletActive("");
			setPage("wallet")
			setLabel("bitcoin")
		}
		if(btn==="entropy"){
			setEntropyActive("");
			setPage("entropy")
			setLabel("signup")
			dispatch(signupAction(isConnection))
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