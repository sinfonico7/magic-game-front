import CardEntity from "../entities/CardEntity";

interface CardRepository{
    getAllCardsByColor(colors:Array<string>) : CardEntity[];
    getAllCardsByCosts(costs:Array<number>) : CardEntity[];
    getAllCardsByText(text:string) : CardEntity[];
    getAllCardsByEdition(edition:Array<string>) : CardEntity[];
    getAllCardsByRarity(rarity:Array<string>) : CardEntity[];
    getAllCardsByType(type:string) : CardEntity[];
}

export default CardRepository;