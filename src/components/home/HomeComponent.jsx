import Banner from '../banner/BannerComponent';

import pic from '../images/home/magic_news.png';
import background from '../images/home/home__background.jpg';

const style = {
    home: {
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover'
    }
}


const variables = {
    bannerId: 'principal',
    source : pic,
    title : 'lista de mazos mas reciente',
    description : 'Hecha un Vistazo a los ultimos Mazos',
}

const Home = () => (
    <div style={style.home}>  
        <Banner  variables={variables}/>
    </div>
);

export default Home;