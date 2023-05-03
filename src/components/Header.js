import './styles/header.css'
import List from './images/list.svg';

function Header (){
    return(
        <div className="Header-container">
            <h1>Task Manager</h1>
            <img className='img-header' src={List} alt="list"/>
        </div>
    );
}

export default Header;