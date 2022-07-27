import Header from "../header/HeaderComponent";
import { DecksService } from "../../usecases/DecksService";
import DeckCoponent from "./Deck/DeckComponent";

const images = String['hola']
const decks = new DecksService();

const DecksComponent = () =>(
    <>
        <Header/>
        <h1>Decks Component</h1>
        {decks.getAllDecks(images).map(
            deck => <DeckCoponent properties={deck}/>
        )}
    </>
);

export default DecksComponent;