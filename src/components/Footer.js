import './styles/footer.css';

const today = new Date();

function formatDate(date) {
    return date.toLocaleDateString();
}
  
function Footer (){
    return(
        <div className="Footer-container">
            <p>тут могла бути ваша реклама</p>
            <div className="Footer-date">
            {formatDate(today)}
            </div>
        </div>
    );
}

export default Footer;