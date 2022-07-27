const DeckCoponent = ({properties}) => (
    <>
       <p>{properties.getName()}</p>
       <img referrerPolicy="no-referrer" src={properties.getImage()}/>
      
    </>
);

export default DeckCoponent;