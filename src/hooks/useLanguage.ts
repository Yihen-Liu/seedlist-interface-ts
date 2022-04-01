import {useState, useCallback} from "react";

export function useLanguage(language:string):[string,()=>void]  {
	const [lang, setLang] = useState<string>("en-US")

	const setLanguage = useCallback(() => setLang(lang => language), [])
	return [lang, setLanguage]
}