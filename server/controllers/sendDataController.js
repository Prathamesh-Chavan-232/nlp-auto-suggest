export async function recieveDataController(req, res) {
	//  Fetch all cards in the deck
	const decks = await Deck.find(); // Fetches all the decks in Database
	//    console.log(decks); // prints all decks in a db
	res.json(decks);
}
