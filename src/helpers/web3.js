import React, { useContext } from "react";
import {JsonRpcProvider} from "@ethersproject/providers";

export const Web3Context = React.createContext({});

export default function useWeb3() {
  return useContext(Web3Context);
}

export const Web3ContextProvider = () => import("./onboard") ;

export function Web3DefaultProvider(){
  return new JsonRpcProvider(process.env.WEB3_PROVIDER_HTTPS);
}

export async function NetworkName(){
  let name = "";
  const network = await Web3DefaultProvider().getNetwork().then((net=>{name = net.name}));
  return name;
}