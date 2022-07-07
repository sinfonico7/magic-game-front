import { Link } from 'react-router-dom';
import './HeaderStyle.css';


const Header = () => (
    <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link> </li>
                    <li><Link to="Decks">Mazos</Link></li>
                    <li><Link to="Game">Jugar</Link></li>
                    
                </ul>
            </nav>
        </header>
    </>
);

export default Header;