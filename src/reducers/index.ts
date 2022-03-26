import { History } from "history";
import { combineReducers } from "redux";
import { EmployeeState } from "./employee";
import { SnackbarEvent } from "../model";
import * as employeeReducer from "./employee";
import * as configReducer from './config';
import * as snackbarReducer from './snackbarEvent';

export interface RootState {
	drawerOpen: boolean;
	employeeList: EmployeeState;
	snackbarEvents: SnackbarEvent[];
}

export default (history: History) =>
	combineReducers({
		...configReducer,
		...employeeReducer,
		...snackbarReducer,
	});
