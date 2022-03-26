import { SnackbarEventAction } from './snackbarEvent';
import { EmployeeAction } from './employee';
import { ConfigAction } from './config';

export * from './config';
export * from './employee';

export * from './snackbarEvent';

export type Action =
    | ConfigAction
    | SnackbarEventAction
    | EmployeeAction
;
