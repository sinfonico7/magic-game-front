import DeckEntity from '../entities/DeckEntity';

export interface DeckRepository{
    getAllDecks(colors:string[]) : Array<DeckEntity>;
    getDeckByName(costs:Array<number>) : DeckEntity[];
    updateDeckName(newName:string) : DeckEntity;

}