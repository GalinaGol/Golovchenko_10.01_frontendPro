let disappearingElement = document.getElementById('spirit')
let pushingElement = document.querySelector("input")

pushingElement.addEventListener("focus",() => {
    disappearingElement.toggleAttribute("hidden");
});
  
pushingElement.addEventListener("blur",() => {
    disappearingElement.toggleAttribute("hidden");
});
