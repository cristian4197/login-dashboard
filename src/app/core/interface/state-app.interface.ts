import { ViewState } from "../enums/view-state-app.enum";

export interface StateApp<T = Object> {
    state: ViewState;
    payload?: T;
}