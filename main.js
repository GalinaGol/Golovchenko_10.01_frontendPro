  const categories = {
    'Солодощі': [
      {name: 'Шоколад Milka', price: 70, description: 'Шоколад Milka з ніжним Альпійськім молоком'},
      {name: 'Mars', price: 20, description: 'Батончик Mars нуга-карамель у молочному шоколаді'},
      {name: 'Bounty Trio', price: 60, description: 'Батончик Bounty Trio з кокосом у молочному шоколаді'},
    ],
    'Хліб та випічка': [
      {name: 'Круасан «Крафтяр»', price: 31, description: 'Круасан «Крафтяр» з мигдальним кремом'},
      {name: 'Булочка', price: 50, description: 'Булочка «Витушка з корицею»'},
      {name: 'Тортилья', price: 67, description: 'Тортилья Dijo мультизернова'},
    ],
    'Молочна продукція': [
      {name: 'Сир кисломолочний', price: 75, description: 'Сир кисломолочний «Яготинський» 5%, пакет 350г'},
      {name: 'Молоко', price: 37, description: 'Молоко пастеризоване «Яготинське» 2,6%'},
      {name: 'Йогурт', price: 11, description: 'Йогурт «Растішка» з фруктовим наповнювачем персик 2%'},
    ]
  };




  const productsList = document.querySelector('#products');
  const categoryList = document.querySelectorAll('.list-group-item')

  categoryList.forEach(category => {
    category.addEventListener('click', () => {
      showProducts(category.textContent) 
    });
  });

  function showProducts(category) {
    productsList.innerHTML = '';
  
    const products = categories[category];
  
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        <h5>${product.name}</h5>
      `;
      listItem.addEventListener('click', () => {
        showProductInfo(product);
      });
      productsList.appendChild(listItem);
    });
  }
  const productInfo = document.getElementById('product-info');
  
//   2 частина

// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

function showProductInfo(product) {
    productInfo.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Ціна: ${product.price} грн</strong></p>
      <button class="btn btn-primary mt-2" id="buy-btn">Купити</button>
    `;
    
    const buyBtn = document.getElementById('buy-btn');
    buyBtn.addEventListener('click', showOrder.bind(null, product));
  }
  
  function showOrder(product) {
    productInfo.innerHTML = `
      <h3>Форма замовлення: ${product.name}</h3>
      <form>
        <div class="form-group">
            <label for="name">ПІБ покупця</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="form-group">
            <label for="city">Місто</label>
            <select class="form-control" id="city" required>
                <option value="">Оберіть місто</option>
                <option value="Київ">Київ</option>
                <option value="Львів">Львів</option>
                <option value="Одеса">Одеса</option>
                <option value="Харків">Харків</option>
                <option value="Кілія">Кілія</option>
          </select>
        </div>
        <div class="form-group">
            <label for="payment">Спосіб оплати</label>
            <select class="form-control" id="payment" required>
                <option value="">Оберіть спосіб оплати</option>
                <option value="Наложений платіж">Наложений платіж</option>
                <option value="Банківська карта">Банківська карта</option>
          </select>
        </div>
        <div class="form-group">
            <label for="quantity">Кількість</label>
            <input type="number" class="form-control" id="quantity" required>
        </div>
        <div class="form-group">
            <label for="comment">Коментар до замовлення</label>
            <textarea class="form-control" id="comment"></textarea>
        </div>
        <div class="form-group">
            <label for="npDelivery">Оберіть відділення Нової Пошти</label>
            <select class="form-control" id="npDelivery" required>
                <option value="">Оберіть відділення</option>
                <option value="1">№1 - вул. Степана Бандери, 6</option>
                <option value="2">№2 - вул. Січовіх Стрільців, 23</option>
                <option value="3">№3 - вул. Черепашок Ніндзя, 4</option>
      </select>
        <button type="submit" class="btn btn-primary mt-2">Замовити</button>
      </form>
    `
    
    const orderForm = document.querySelector('form');
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const city = document.getElementById('city').value
      const payment = document.getElementById('payment').value
      const quantity = document.getElementById('quantity').value
      const comment = document.getElementById('comment').value
      const npDelivery = document.getElementById('npDelivery').value
      const order = {
        product: product.name,
        name,
        city,
        payment,
        quantity,
        comment,
        npDelivery
      };
      console.log('Order:', order);
      productInfo.innerHTML = `
        <h3>Дякуємо за замовлення!</h3>
        <p>Ваше замовлення:</p>
        <ul>
            <li>Товар: ${order.product}</li>
            <li>Кількість: ${order.quantity}</li>
            <li>Оплата: ${order.payment}</li>
            <li>Коментар: ${order.comment}</li>
            <li>Відділення Нової Пошти: ${order.npDelivery}</li>
            <li>Ім'я: ${order.name}</li>
            <li>Місто: ${order.city}</li>
        </ul>
        <p>Дякуємо за замовлення.</p>`;
          orderForm.reset();
          });
          } 