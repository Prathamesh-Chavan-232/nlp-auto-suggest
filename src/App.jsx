import "./App.css";
import { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import { autoCompleteData } from "./utlis/data";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<AutoComplete data={autoCompleteData} />
		</div>
	);
}

export default App;
