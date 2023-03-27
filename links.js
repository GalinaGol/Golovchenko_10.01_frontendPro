const links = document.querySelectorAll('a')

for (let link of links) {

     link.addEventListener('click', e => {
          const href = link.getAttribute('href');
          if (!href.includes('http://') && !href.includes('https://')){
               link.setAttribute('href', `http:${href}`);
          }
   });
}
