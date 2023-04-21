import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import React from "react";
const Item = ({ entity: { name, char } }) => <div>{`${name}: ${char}`}</div>;

export const TextAreaAutoComplete = () => {
	return (
		<div>
			<div className="container">
				<ReactTextareaAutocomplete
					className="my-textarea"
					onChange={(e) => console.log(e.target.value)}
					loadingComponent={() => <span>Loading</span>}
					trigger={{
						":": {
							dataProvider: (token) => {
								return [
									{ name: "how are", char: "you?" },
									{ name: "how was", char: "your day?" },
									{ name: "when will", char: " it rain?" },
									{ name: "how was", char: "your day?" },
									{ name: "what time", char: "is it?" },
									{ name: "the theory", char: "is erroneous" },
									{ name: "George is", char: "a tenacious man" },
									{ name: " The Sushi", char: " was delicious" },
									{ name: "how was", char: "the movie?" },
								];
							},
							component: Item,
							output: (item, trigger) => item.char,
						},
					}}
				/>
			</div>
		</div>
	);
};
