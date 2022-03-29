import {Store} from "redux"

export enum ActionType {
    CLICK_SIGNUP = 'signup',
    CLICK_SAVE = 'save',
    CLICK_QUERY = 'query',
    INPUT_PASSWORD = 'save-password',
}

export enum pageState {
    DISCONNECT,
    SIGNUP,
    SAVE,
    QUERY,
    PASSWORD,
}

export interface StateType {
    page:pageState,
	action:ActionType,
    password?: boolean,
    walletConnection:boolean
}

export interface ActionModel {
    type: ActionType,
	page?:pageState,
    password?: boolean,
    walletConnection:boolean
}

export type StoreType = Store<StateType, ActionModel>;
