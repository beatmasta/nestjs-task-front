import { Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { RootState } from "../reducers";
import { createEmployeeSchema } from "../validation-schemas";
import { useFormik } from "formik";
import { Employee } from "../types";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import { createEmployee, readEmployees, deleteEmployee } from "../actions/employee";
import { store } from "../configureStore";

export function HomePage() {

	const classes = useStyles();
	const [isAddFormVisible, setIsAddFormVisible] = React.useState(false);
	const employeeList = useSelector((state: RootState) => state.employeeList);
	const [page, setPage] = React.useState(1);
	const limit = 3;

	useEffect(() => {
		store.dispatch(readEmployees({ page, limit }));
	}, []);

	const initialValues: Employee = {
		name: '',
		email: '',
		phone: '',
		city: '',
		zip: '',
		address1: '',
		address2: ''
	};

	const removeEmployee = (id: string) => {

		store.dispatch(deleteEmployee(id)).then(() => {
			store.dispatch(readEmployees({ page, limit }));
		});

	};

	const formik = useFormik({
		initialValues,
		validationSchema: createEmployeeSchema,
		onSubmit: (values, { resetForm }) => {
			store.dispatch(createEmployee(values)).then(() => {
				store.dispatch(readEmployees({ page, limit }));
				resetForm();
			});
		},
	});

	return (
		<div className={classes.root}>

			<Grid container spacing={2}>
				<Grid item xs={2}>Name</Grid>
				<Grid item xs={2}>Email</Grid>
				<Grid item xs={1}>Phone</Grid>
				<Grid item xs={1}>City</Grid>
				<Grid item xs={1}>Zip</Grid>
				<Grid item xs={2}>Address 1</Grid>
				<Grid item xs={2}>Address 2</Grid>
				<Grid item xs={1}>[ X ]</Grid>
			</Grid>

			{employeeList.list.map((employee, i) => (
				<Grid container spacing={2} key={i}>
					<Grid item xs={2}>{employee.name}</Grid>
					<Grid item xs={2}>{employee.email}</Grid>
					<Grid item xs={1}>{employee.phone}</Grid>
					<Grid item xs={1}>{employee.city}</Grid>
					<Grid item xs={1}>{employee.zip}</Grid>
					<Grid item xs={2}>{employee.address1}</Grid>
					<Grid item xs={2}>{employee.address2}</Grid>
					<Grid item xs={1}>
						<Button color="secondary" variant="contained" fullWidth type="button" onClick={() => removeEmployee((employee as any)._id)}>
							DELETE
						</Button>
					</Grid>
				</Grid>
			))}

			<Divider />

			{Array.from(Array(Math.ceil(employeeList.count / limit)).keys()).map(i => (
				<Button color="primary" variant="outlined" type="button" key={i} onClick={() => {
					setPage(i + 1);
					store.dispatch(readEmployees({ page: i + 1, limit }));
				}}>
					{i + 1}
				</Button>
			))}

			<Divider />

			<Button color="primary" variant="contained" fullWidth type="button" onClick={() => setIsAddFormVisible(!isAddFormVisible)}>
				{isAddFormVisible ? "Close" : "Open"} "Add Employee" Dialog
			</Button>

			<div className={classes.centerContainer}>
				{
					isAddFormVisible && <form onSubmit={formik.handleSubmit}>
						{Object.keys(initialValues).map((field: string) => (
							<TextField
								key={field}
								fullWidth
								id={field}
								name={field}
								label={field.charAt(0).toUpperCase() + field.slice(1)}
								value={(formik.values as any)[field]}
								onChange={formik.handleChange}
								error={(formik.touched as any)[field] && Boolean((formik.errors as any)[field])}
								helperText={(formik.touched as any)[field] && (formik.errors as any)[field]}
							/>
						))}
						<Button className={classes.addEmployeeFormButton} color="primary" variant="contained" fullWidth type="submit">
							Add Employee
						</Button>
					</form>
				}
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
		overflowY: "auto"
	},

	addEmployeeFormButton: {
		marginTop: "40px"
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		marginTop: "0"
	},

	button: {
		marginTop: 20,
	},
});

