class SuperMath {
    check(obj) {
        const question = confirm(`Чи бажаєш ти помножити ці два числа: ${obj.X} та ${obj.Y} ?`)
        if (question){
            return obj.X * obj.Y;
        } else {
           return this.input();
        }
    }

    input() {
        const X = Number(prompt('Введіть перше число', 1));
        const Y = Number(prompt('Введіть друге число', 2));
        const znak = prompt('Оберіть дію:+, -, *, /, %, ^', '+');

        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '*':
                return X * Y;
            case "/":
                if (X!== 0) {
                  return X / Y;
                } else {
                  return "Не ділиться на нуль";
                }
            case '%':
                return X % Y;
            case '^':
                return Math.pow(X, Y);
            default:
                alert("Дія не можлива.");
        }
    }

}

p = new SuperMath();
console.log(p.check({X:5, Y:3, znak: '*'})); 


