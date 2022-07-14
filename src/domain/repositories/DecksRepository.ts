interface CardRepository{
    getAllDecks(colors:Array<string>) : DeckEntity[];
    getDeckByName(costs:Array<number>) : DeckEntity[];
    updateDeckName(newName:string) : DeckEntity;

}