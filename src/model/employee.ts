import { Employee, RequestError } from "../types";

export enum EmployeeActions {
  CREATE = "CREATE",
  CREATE_SUCCESS = "CREATE_SUCCESS",
  CREATE_FAILURE = "CREATE_FAILURE",
  READ = "READ",
  READ_SUCCESS = "READ_SUCCESS",
  READ_FAILURE = "READ_FAILURE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  DELETE_SUCCESS = "DELETE_SUCCESS",
  DELETE_FAILURE = "DELETE_FAILURE",
}

interface EmployeeActionType<T, P> {
  type: T;
  payload: P;
}

export type EmployeeAction =
  | EmployeeActionType<typeof EmployeeActions.CREATE, Employee>
  | EmployeeActionType<typeof EmployeeActions.CREATE_SUCCESS, Employee>
  | EmployeeActionType<typeof EmployeeActions.CREATE_FAILURE, RequestError>
  | EmployeeActionType<typeof EmployeeActions.READ, number>
  | EmployeeActionType<typeof EmployeeActions.READ_SUCCESS, number>
  | EmployeeActionType<typeof EmployeeActions.READ_FAILURE, number>
  | EmployeeActionType<typeof EmployeeActions.UPDATE, number>
  | EmployeeActionType<typeof EmployeeActions.DELETE, number>
  | EmployeeActionType<typeof EmployeeActions.DELETE_SUCCESS, number>
  | EmployeeActionType<typeof EmployeeActions.DELETE_FAILURE, number>
;
