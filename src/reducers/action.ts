import {ActionModel, ActionType} from "./state";

export function signupAction():ActionModel {
    return {
        type: ActionType.CLICK_SIGNUP
    }
}

export function queryAction():ActionModel {
    return {
        type:ActionType.CLICK_QUERY
    }
}

export function saveAction():ActionModel {
    return {
        type:ActionType.CLICK_SAVE
    }
}

export function passwordAction(action:ActionType):ActionModel {
	return{
		type:action,
		password:true
	}
}

export function cancelPasswordAction(action:ActionType):ActionModel {
	return {
		type: action,
		password:false
	}
}

export function cancelPasswordActionInSave():ActionModel {
    return {
        type:ActionType.CLICK_SAVE,
        password: false
    }
}

export function cancelPasswordActionInQuery():ActionModel {
	console.log("in cancel password action:")
    return {
        type:ActionType.CLICK_QUERY,
        password: false
    }
}

export function walletConnectionAction(action:ActionType):ActionModel {
	console.log("in wallect connection action:",action)
	return {
		type:action,
		walletConnection:true
	}
}