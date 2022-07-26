import Header from "../header/HeaderComponent";
import { DecksService } from "../../usecases/DecksService";

const images = String['hola']
const decks = new DecksService();

const getImagesTags = () => ({
    
});

const DecksComponent = () =>(
    <>
        <Header/>
        <h1>Decks Component</h1>
        {decks.getAllDecks(images).map(
            deck => <img referrerPolicy="no-referrer" src={deck.getImage()}/>
        )}
    </>
);

export default DecksComponent;