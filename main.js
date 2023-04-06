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
  
function showProductInfo(product) {
    productInfo.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Ціна: ${product.price} грн</strong></p>
      <button class="btn btn-success mt-2" id="buy-btn">Купити</button>
    `;
    
    const buyBtn = document.getElementById('buy-btn');
    buyBtn.addEventListener('click', showSummary.bind(null, product));
  }
  
  function showSummary(product) {
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

      const order = {
        product: product.name,
        price: product.price,
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        payment: document.getElementById('payment').value,
        quantity: document.getElementById('quantity').value,
        comment: document.getElementById('comment').value,
        npDelivery: document.getElementById('npDelivery').value,
        date: new Date().toLocaleDateString()
      };

      saveOrder(order);

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


function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function getOrders() {
  return JSON.parse(localStorage.getItem('orders')) || [];
}

const ordersButton = document.getElementById('orders-button');
ordersButton.addEventListener('click', showOrders);

function showOrders() {
  document.getElementById('categories').style.display = "none";
  document.getElementById('orders-button').style.display = "none";
  document.querySelector('.goods').style.display = "none";
  document.querySelector('.info-goods').style.display = "none";

  let orders = getOrders();
  let ordersHTML = '<h3>Історія замовлень:</h3>';
  
  if (orders.length === 0) {
    ordersHTML += '<p>Історія замовлень порожня</p>';
  } else {
    ordersHTML += '<ul class="d-flex">';
    for (let i = 0; i < orders.length; i++) {
      ordersHTML += `
        <li class="m-3 bg-light-subtle p-3 ">
          <h5 class="order-item" data-id="`+ i +`">Замовлення #${i+1}</h5>
          <ul>
            <li>Дата: ${orders[i].date}</li>
            <li>Ціна: ${orders[i].price}</li>
          </ul>
          <button class="remove-order btn btn-danger" data-id="`+ i +`">Remove</button>
          <div id="order-details-`+ i +`"></div>
        </li>
      `;
    }
    ordersHTML += '</ul>';

    setTimeout(function() {
      let ordersDetailsSelector = document.getElementsByClassName('order-item');
      let removeOrderButton = document.getElementsByClassName('remove-order');

      for(let i = 0; i < ordersDetailsSelector.length; i++) {
        ordersDetailsSelector[i].addEventListener('click', showOrderDetails)
      }

      for(let i = 0; i < removeOrderButton.length; i++) {
        removeOrderButton[i].addEventListener('click', removeOrder)
      }
    }, 100)
  }


const ordersContainer = document.getElementById('orders-container');
ordersContainer.innerHTML = ordersHTML;
}

function showOrderDetails(event) {
  let orderId = event.target.dataset.id;
  let order = getOrders()[orderId];

  const orderDetails = document.getElementById('order-details-' + orderId);
  orderDetails.innerHTML = `
          <ul>
            <li>Товар: ${order.product}</li>
            <li>Кількість: ${order.quantity}</li>
            <li>Оплата: ${order.payment}</li>
            <li>Коментар: ${order.comment}</li>
            <li>Відділення Нової Пошти: ${order.npDelivery}</li>
            <li>Ім'я: ${order.name}</li>
            <li>Місто: ${order.city}</li>
          </ul>  
  `
}

function removeOrder(event) {
  let orderId = event.target.dataset.id;
  let orders = getOrders();
  orders.splice(orderId, 1)

  document.getElementById('order-details-' + orderId).style.display = "none";
  localStorage.setItem('orders', JSON.stringify(orders));

  showOrders();
}


