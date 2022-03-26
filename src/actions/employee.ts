import { EmployeeActions } from '../model';
import { Employee, PaginationObject, RequestError } from "../types";
import { request } from '../helpers';

export function createEmployee(employee: Employee) {

	return (dispatch: Function) => {
		dispatch({ type: EmployeeActions.CREATE, payload: employee });
		return request('POST', 'employees', employee)
			.then((data: Response) => dispatch({ type: EmployeeActions.CREATE_SUCCESS, data }))
			.catch((err: RequestError) => dispatch({ type: EmployeeActions.CREATE_FAILURE, err }));
	};

}

export function readEmployees(pagination: PaginationObject) {

	return (dispatch: Function) => {
		dispatch({ type: EmployeeActions.READ });
		return request('GET', 'employees', pagination)
			.then((data: Response) => dispatch({ type: EmployeeActions.READ_SUCCESS, data }))
			.catch((err: RequestError) => dispatch({ type: EmployeeActions.READ_FAILURE, err }));
	};

}

export function deleteEmployee(id: string) {

	return (dispatch: Function) => {
		dispatch({ type: EmployeeActions.DELETE });
		return request('DELETE', `employees/${id}`)
			.then((data: Response) => dispatch({ type: EmployeeActions.DELETE_SUCCESS, data }))
			.catch((err: RequestError) => dispatch({ type: EmployeeActions.DELETE_FAILURE, err }));
	};

}
