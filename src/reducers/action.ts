import {ActionModel, ActionType, StateType} from "./state";

export function signupAction(isConnection:boolean):ActionModel {
    return {
        type: ActionType.CLICK_SIGNUP,
	    walletConnection:isConnection
    }
}

export function queryAction(isConnection:boolean):ActionModel {
    return {
        type:ActionType.CLICK_QUERY,
	    walletConnection: isConnection
    }
}

export function saveAction(isConnection:boolean):ActionModel {
    return {
        type:ActionType.CLICK_SAVE,
	    walletConnection:isConnection
    }
}

export function passwordAction(action:ActionType, isConnection:boolean):ActionModel {
	return{
		type:action,
		password:true,
		walletConnection:isConnection
	}
}

export function cancelPasswordAction(action:ActionType, isConnection:boolean):ActionModel {
	return {
		type: action,
		password:false,
		walletConnection:isConnection
	}
}

export function walletConnectionAction(action:ActionType, isConnection:boolean):ActionModel {

	return {
		type:action,
		walletConnection:isConnection
	}
}