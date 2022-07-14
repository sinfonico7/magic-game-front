import Header from "../header/HeaderComponent";



const DecksComponent = ({decks}) =>(
    <>
        <Header/>
        <h1>Decks Component</h1>
        {decks}
    </>
);

export default DecksComponent;