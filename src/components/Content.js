import './styles/content.css';
import avatar from './images/avatar1.jpeg';

export default function Content (){
    return(
        <div className="Content-container">
            <h2>Про мене</h2>
            <div className='info-container'>
                <p>Моє ім'я Галина, мені 24. Я нічого не хочу дописувати, бо дві години сиділа над цією фоткою, вона мене бісить як і я сама себе.
                </p>
                <img src={avatar} alt="galya" className='avatar'/>
            </div>
        </div>
    );
}

