import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import App from "./App";

export function ReduxRoot() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
