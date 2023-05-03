import './styles/footer.css';
import Calendar from './images/calendar.svg';

const today = new Date();

function formatDate(date) {
    return date.toLocaleDateString();
}
  
function Footer (){
    return(
        <div className="Footer-container">
            <img className='img-footer' src= {Calendar} alt='calendar'/>
            <p>Today:</p>
            <div className="Footer-date">
            {formatDate(today)}
            </div>
        </div>
    );
}

export default Footer;