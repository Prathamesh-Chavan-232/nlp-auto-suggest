import express from "express";
export const Router = express.Router();

// fetch all decks & create Deck
Router.post("/decks", sendDataController); // Create new Deck
Router.get("/decks", recieveDataController); // Get all decks in the Db
