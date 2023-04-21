const handleClick = (e) => {
	setSuggestions([]);
	setValue(e.target.innerText);
	setSuggestionsActive(false);
};

export const Suggestions = () => {
	return (
		<div className="results">
			<ul className="suggestions">
				{suggestions.map((suggestion, index) => {
					return (
						<li
							className={index === suggestionIndex ? "active" : ""}
							key={index}
							onClick={handleClick}
						>
							{suggestion}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
