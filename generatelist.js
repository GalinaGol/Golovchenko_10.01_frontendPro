const array = [1,[1.1, 1.2], 2, 3, [3.1, 3.2]];
const container = document.querySelector('div');

function generateList(array, firstElement) {
     const ul = document.createElement('ul');
     firstElement.appendChild(ul);
   
     for (let element of array) {
       const li = document.createElement('li');
       ul.appendChild(li);
   
       if (Array.isArray(element)) {
         generateList(element, li);
       } else {
         li.appendChild(document.createTextNode(element));
       }
     }
   }
   generateList(array, container)