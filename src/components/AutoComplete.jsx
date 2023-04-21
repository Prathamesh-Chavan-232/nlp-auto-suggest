import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AutoComplete = ({ data }) => {
	const [suggestions, setSuggestions] = useState([]);
	const [suggestionIndex, setSuggestionIndex] = useState(0);
	const [suggestionsActive, setSuggestionsActive] = useState(false);
	const [value, setValue] = useState("");
	const handleChange = (e) => {
		const query = e.target.value.toLowerCase();
		setValue(query);
		if (query.length > 1) {
			const filterSuggestions = data.filter(
				(suggestion) => suggestion.toLowerCase().indexOf(query) > -1
			);
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		} else {
			setSuggestionsActive(false);
		}
	};
	const handleKeyDown = (e) => {
		// UP ARROW
		if (e.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// DOWN ARROW
		else if (e.keyCode === 40) {
			if (suggestionIndex - 1 === suggestions.length) {
				return;
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// ENTER
		else if (e.keyCode === 13) {
			setValue(suggestions[suggestionIndex]);
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}
	};

	return (
		<div className="autocomplete">
			<div className="row">
				<input
					type="text"
					value={value}
					placeholder="Type something..."
					autoComplete="off"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<button>
					<FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
				</button>
			</div>
			{suggestionsActive && <Suggestions />}
		</div>
	);
};

export default AutoComplete;
