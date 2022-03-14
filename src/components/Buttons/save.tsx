import React from "react";
import {Button} from "@chakra-ui/button";
import {NotAllowedIcon} from "@chakra-ui/icons";
import SavePubSub from "../../eventbus/save";

/*class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Save",
            spacename:"",
            label:"",
            content:""
        }
    }

    changeSpaceName = (msg)=>{
        this.setState({spacename: msg});
    }

    changeLabel = (msg)=>{
        this.setState({label: msg});
    }

    changeContent = (msg)=>{
        this.setState({content: msg});
    }

    componentDidMount() {
        SavePubSub.on("ChangeSpaceNameInSave", this.changeSpaceName);
        SavePubSub.on("ChangeLabelInSave", this.changeLabel);
        SavePubSub.on("ChangeContentInSave",this.changeContent);
    }

    componentWillUnmount() {
        SavePubSub.off("ChangeSpaceNameInSave", this.changeSpaceName);
        SavePubSub.off("ChangeLabelInSave", this.changeLabel);
        SavePubSub.off("ChangeContentInSave", this.changeContent);
    }

    enableSave = ()=> {
        this.props.setPwdDrawerActive(true);
    }

    render() {
        return (
            <>
                <Button
                    width="100%"
                    colorScheme="blackAlpha"
                    size="lg"
                    disabled={true}
                    onClick={this.enabelSave}
                >
                    <NotAllowedIcon w={5} h={5} color=".500"/> Add More
                </Button>
                <Button
                    width="100%"
                    colorScheme="blackAlpha"
                    size="lg"
                    onClick={this.enableSave}
                >
                    Save
                </Button>
            </>
        );
    }
}*/

interface IProps {

}

const SaveButton:React.FC<IProps> = (props:IProps)=>{
    return (
        <>
            <Button
                width="100%"
                colorScheme="blackAlpha"
                size="lg"
                disabled={true}
                onClick={()=>{} }
            >
                <NotAllowedIcon w={5} h={5} color=".500"/> Add More
            </Button>
            <Button
                width="100%"
                colorScheme="blackAlpha"
                size="lg"
                onClick={()=>{} }
            >
                Save
            </Button>
        </>
    );

}

export {SaveButton};
