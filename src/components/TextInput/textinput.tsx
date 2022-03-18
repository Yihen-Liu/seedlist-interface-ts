import {IBaseProps} from "../../interfaces/props";
import { Input, InputGroup, InputRightElement} from "@chakra-ui/react";

const TextInput:React.FC<IBaseProps> = (props:IBaseProps)=>{
    return(
        <InputGroup>
            <Input />
            <InputRightElement />
        </InputGroup>
    );
}

export {TextInput}
/*
export function TextInput({
  value,
  onChange,
  disabled,
  element,
    ...props
}) {
  return (
    <InputGroup>
      <Input
        onChange={(event) => onChange(event.target.value)}
        value={value}
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        type="text"
        height="14"
        minLength={1}
        maxLength={512}
        spellCheck="false"
        fontSize="xl"
        focusBorderColor="white"
        readOnly={disabled}
        pr="10px"
        {...props}
      />
      <InputRightElement
        width="48px"
        pointerEvents="none"
        color="gray.600"
        fontSize="1.2em"
        height="14"
        children={element}
      />
    </InputGroup>
  );
}
*/
