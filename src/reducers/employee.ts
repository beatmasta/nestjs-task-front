import { ConfigActions, EmployeeAction, EmployeeActions } from '../model';
import { Employee } from "../types";
import createReducer from "./createReducer";

export interface EmployeeState {
	pagination: object;
	count: number;
	list: Array<Employee>;
}

const initialState: EmployeeState = {
	pagination: { page: 1, limit: 3 },
	count: 0,
	list: []
};

export const employeeList = createReducer<EmployeeState>(initialState, {
	[EmployeeActions.CREATE_SUCCESS](state: EmployeeState, action: any) {
		return state;
	},
	[EmployeeActions.READ_SUCCESS](state: EmployeeState, action: any) {
		return {...state, list: action.data.employees, count: action.data.count};
	},
	// [TodoActions.UNCOMPLETE_TODO](state: Todo[], action: TodoAction) {
	// 	// search after todo item with the given id and set completed to false
	// 	return state.map(t => (t.id === action.payload ? { ...t, completed: false } : t));
	// },
	// [TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
	// 	// remove all todos with the given id
	// 	return state.filter(t => t.id !== action.payload);
	// },
	// [ConfigActions.PURGE_STATE](state: Todo[], action: TodoAction) {
	// 	return [];
	// },
	[ConfigActions.PURGE_STATE](state: EmployeeState, action: EmployeeAction) {
		return [];
	},
});
