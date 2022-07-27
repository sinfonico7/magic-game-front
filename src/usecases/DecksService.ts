import DeckEntity from "../domain/entities/DeckEntity";
import { DeckRepository } from "../domain/repositories/DeckRepository";

export class DecksService implements DeckRepository{
    getAllDecks(colors: string[]): Array<DeckEntity> {
        const decks = new Array<DeckEntity>();
        decks.push(new DeckEntity('https://www.artofmtg.com/wp-content/uploads/2015/08/Forest-Mtg-Art.jpg','Titulo 1'));
        decks.push(new DeckEntity('https://www.artofmtg.com/wp-content/uploads/2014/03/Fated-Conflagration-Art.jpg', 'Titulo 2'));
        return decks;
    }
    getDeckByName(costs: number[]): DeckEntity[] {
        return [];
    }
    updateDeckName(newName: string): DeckEntity {
        return new DeckEntity('No Deck',"No Title");
    }

   

}

    

    