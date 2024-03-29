import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";

export function DeletedPage() {
	const classes = useStyles();
	// const [setOpen] = React.useState(false);

	// const handleClose = () => {
	// 	setOpen(false);
	// };
	//
	// const handleAddTodo = () => {
	// 	setOpen(true);
	// };

	return (
		<Grid container className={classes.root}>
			<Grid item xs={6}>
				<Typography variant="h4" gutterBottom>
					Todo List
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						// onClick={handleAddTodo}
					>
						Add Todo
					</Button>
				</div>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));
