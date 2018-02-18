const numbers = [2, 5, 8, 13];



console.log(numbers.map(x => x + 5));

console.log(numbers.map(x => x + 10));


//Global Scope

function adderFactory(n) {
    console.log(n*10);
    // Scope A
    function adderFunc(x) {
        // Scope B
        return x + n;
    };

    // Scope A

    return adderFunc;
}


// Global Scope
const adder5 = adderFactory(5);
const adder50 = adderFactory(50);
const adder500 = adderFactory(500);

console.log(adder5(27));
console.log(adder50(27));
console.log(adder500(27));




function createCounter(initialValue=0){
    let x = initialValue;

    function increase() {
        x = x + 1;
    }


    function decrease() {
        x = x - 1;
    }

    function get() {
        return x;
    }

    return {
        increase: increase,
        decrease: decrease,
        get: get,
    }
}


const counter = createCounter(5);

counter.increase();
counter.increase();
counter.increase();

console.log(counter.get());

counter.decrease();
console.log(counter.get());


function divisibilityCheckerFactory(n) {
    return x => x % n === 0;
}

const divisibleBy7 = divisibilityCheckerFactory(7);


const manyNumbers = [1000, 500, 333, 250, 200, 166, 142, 125, 111, 100, 90, 83, 76, 71, 66, 62, 58, 55, 52, 50, 47, 45, 43, 41, 40, 38, 37, 35, 34, 33, 32];

manyNumbers.filter(divisibleBy7);


function titleSearchFactory(text) {
    return movie => movie.title.includes(text);
}

movies.filter(titleSearchFactory("Land"));

movies.filter(movie => movie.title.includes("Land"));


const input = document.querySelector('#input_1');
const = parseInt(input.value.trim())