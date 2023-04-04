const form = document.querySelector('form');
const btnSubmit = document.querySelector('#btn');

const formContainer = document.querySelector('.form-container');
const tableContainer = document.querySelector('.table-container');

function saveFormData(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const birthdate = document.querySelector('#birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.querySelector('#city').value;
  const address = document.querySelector('#address').value;
  const languages = document.querySelectorAll('input[name="languages[]"]:checked');

  let result = `
    <table>
      <tr>
        <th>Ім'я</th>
        <th>Прізвище</th>
        <th>Дата народження</th>
        <th>Стать</th>
        <th>Місто</th>
        <th>Адреса</th>
        <th>Мови, якими володієте</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${surname}</td>
        <td>${birthdate}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${Array.from(languages).map(lang => lang.value).join(', ')}</td>
      </tr>
    </table>`;

  tableContainer.innerHTML = result;

  formContainer.style.display = 'none';
}

btnSubmit.addEventListener('click', saveFormData);
