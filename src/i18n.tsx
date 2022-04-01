import React from "react";
import {IBaseProps} from "./interfaces/props";
import {Provider} from "./lib/i18n";
const LanguageProvider:React.FC<IBaseProps> = (props:IBaseProps)=>{
	return(
		<Provider
			locale="zh-CN"
			forceRenderAfterLocaleChange={false}
			children={props.children}
		/>
	);
}


export {LanguageProvider}