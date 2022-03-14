import React from "react";
import { Button } from "@chakra-ui/button";

/*
class  Notice extends React.Component{
    constructor(props) {
        super(props);
        this.enableNotice = this.enableNotice.bind(this);
        this.state ={
            message:"I Notice Btn"
        }
    }

    enableNotice() {

    }

    render() {
        return(
            <Button
                colorScheme="blackAlpha"
                fontSize="xl"
                onClick={this.enableNotice}
                w={["32", "40"]}
            >
                {this.state.message}
            </Button>
        );
    }
}
*/
interface IProps {

}

const NoticeButton:React.FC<IProps> = (props:IProps) =>{
    return(
        <Button
            colorScheme="blackAlpha"
            fontSize="xl"
            onClick={()=>{}}
            w={["32", "40"]}
        >
            Notice btn
        </Button>
    );
}
export { NoticeButton };