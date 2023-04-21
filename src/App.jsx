import "./App.css";
import { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import { TextAreaAutoComplete } from "./components/TextAreaAutoComplete";
import { autoCompleteData } from "./utlis/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/"></Route>
				</Routes>
			</BrowserRouter>
			<AutoComplete data={autoCompleteData} />
			<TextAreaAutoComplete />
		</div>
	);
}

export default App;
