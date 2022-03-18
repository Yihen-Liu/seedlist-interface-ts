import {Store} from "redux"

export const PASSWORD_OF_SAVE = "password-of-save"
export const PASSWORD_OF_QUERY = "password-of-query"

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
    walletConnection?:boolean
}

export interface ActionModel {
    type: ActionType,
	page?:pageState,
    password?: boolean,
    walletConnection?:boolean
}

export type StoreType = Store<StateType, ActionModel>;
