let x = prompt('Enter your value for power raise');

if (!Number(x) || Math.round(Number(x)) !== Number(x)) {
    let b = Number(x);
    console.log(b);
    alert('enter a valid number. ' + 'Refresh to try again');
    throw '';
}
let n = prompt('Enter the power to raise with');

/* let pow = (a, b) => {
    let real_n = Number(b);
    return a ** b;
}; */

//alert(pow(x, n));

function pow(x, n) {

    if (Number(n) && Math.round(Number(n)) == Number(n)) {
        return alert(x ** n);
    } else {
        alert('enter a valid integer value for n' + 'Refresh to try again');
    }

}

pow(x, n);