import './styles/sidebar.css';

function Sidebar (){
    return(
        <div className="Sidebar-container">
            <form>
                <div className='form'>
                    <label for="name">Твоє ім'я:</label>
                    <input type="text" className="form-input" required id="name" />
                    <br></br>
                    <label for="age">Твій вік:</label>
                    <input type="number" className="form-input" required id="age"/>
                    <div className="city">
                        <label for="city">Обери своє місто: </label>
                        <select className="form-input" id="city" required>
                            <option value="1">Одеса</option>
                            <option value="2">Київ</option>
                            <option value="3">Харків</option>
                            <option value="4">Дніпро</option>
                        </select>
                    </div>
                 <button type="submit" className="btn ">Відправити</button>
                </div>
            </form>
        </div>
    );
}

export default Sidebar;