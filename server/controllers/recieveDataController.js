import { Request, Response } from "express";
import Deck from "../models/input";

export async function sendDataController(req, res) {
	console.log(req.body);
	const newDeck = new Input({
		title: req.body.title,
	});
	const createdDeck = await newDeck.save();
	res.json(`Created deck - ${createdDeck}`);
}
