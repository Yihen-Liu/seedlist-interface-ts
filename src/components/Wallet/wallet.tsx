import React, {useCallback} from 'react';
import { useState, useEffect } from 'react';
import { etherClient, IWalletInfo, contractChainId, contractChainName } from '../../ethers/etherClient';
import {Box} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {Image} from "@chakra-ui/react";
import {IBaseProps} from "../../interfaces/props";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../reducers/state";
import {saveAction, walletConnectionAction} from "../../reducers/action";
import {wallet} from "bnc-onboard/dist/src/stores";

const WalletInfo: React.FC<IBaseProps> = (props:IBaseProps) => {
    const [walletInfo, setWalletInfo] = useState<IWalletInfo | null>(null);
    // const [loaded, setLoaded] = useState(false);
	const action = useSelector((state:StateType)=>state.action);

	const dispatch = useDispatch();
	const click = useCallback(()=>{
		dispatch(walletConnectionAction(action));
	},[dispatch]);

	useEffect(() => {
        const doSetWalletInfo = () => {
            doGetWalletInfo().then(
                (info) => {
                    if (info) {
	                    setWalletInfo(info);

	                    //click();
                    }
                })
                .catch(() => {
                    /** ignore */
                })
                .finally(() => {
	                // setLoaded(true);
                });
        };
        doSetWalletInfo();
    }, [walletInfo]);


    async function connectWallet() {
        let info = await doGetWalletInfo();
        console.log('getWalletInfo:', info);
    }

    return (
        <Box>
            <Button colorScheme="blackAlpha" bg="#2b2d32"
                    boxShadow="sm" onClick={connectWallet}
                    isLoading={false} >
                <Image src="./metamask.svg" width="22" height="22" />

                { !walletInfo && <div>Connect Wallet</div>}
                {walletInfo && walletInfo.chainId !== contractChainId && (
                    <div>Switch to {contractChainName}</div>
                )}
                {walletInfo && walletInfo.chainId === contractChainId &&(
                    <div>
                        <div>
                            {walletInfo.address.substr(0, 6)}...{walletInfo.address.substr(-4)}
                        </div>
                    </div>
                )}
            </Button>
        </Box>
    );
};

export async function doGetWalletInfo() {
    await etherClient.loadProvider();
    return await etherClient.getWalletInfo();
}

export default WalletInfo;
