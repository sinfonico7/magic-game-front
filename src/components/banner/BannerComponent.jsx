import './Banner.css';

const Banner = ({variables}) =>(
    <div id={variables.bannerId}>
        <img alt="couldn't display" src={variables.source}/>
        <p>{variables.title}</p>
        <p>{variables.description}</p>
    </div>
);

export default Banner;