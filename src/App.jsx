import "./App.css";
import { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import { autoCompleteData } from "./utlis/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<AutoComplete data={autoCompleteData} />}
					/>
					{/* <Route path="/textarea" element={<TextAreaAutoComplete />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
