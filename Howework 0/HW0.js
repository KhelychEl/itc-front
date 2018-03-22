    //Main1
function plus1(number1, number2) {
    return number1 + number2;
}
	
    //Main2
function multiply(number1, number2) {
    let result = 0;

    for (let i = 0; i < number1; i++) {
        result += plus1(number2, number2);
    }

    return result / 2;
}
	
    //Main3
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}

    //Main4
const arrayPeople = [
    { age: "18", sex: "female", favouriteFilm: "TheTime" },
    { age: "19", sex: "male", favouriteFilm: "GoodBoy" },
    { age: "19", sex: "female", favouriteFilm: "WhoAmI" },
]
	
function filterFemales(arrayPeople) {
    for (let i = 0; i < arrayPeople.length; i++) {
        if (arrayPeople[i].sex == "female") {
            console.log(arrayPeople[i]);
        }
    }
}

    //Main5
function getQuadrant(x, y) {
    if ((x > 0) && (y > 0)) {
        console.log("Quadrant is first");
    } else if ((x < 0) && (y < 0)) {
        console.log("Quadrant is third");
    } else if ((x < 0) && (y > 0)) {
        console.log("Quadrant is second");
    } else if ((x > 0) && (y < 0)) {
        console.log("Quadrant is fourth");
    } else {
        console.log("The point is on the coordinate line");
    }
}

    //1
function plus(...theArgs) {
    let result = 0;

    for (let i = 0; i < theArgs.length; i++) {
        result += theArgs[i];
    }

    return result;
}

    //2
function multiplyAll(...theArgs) {
    let res = 1;

    if ((theArgs.length % 2) != 0) {
        theArgs[theArgs.length] = 1;

        for (let i = 0; i < theArgs.length; i = i + 2) {
            res *= multiply(theArgs[i], theArgs[i+1]);
        }

        return res;
    } else {
        for (let i = 0; i < theArgs.length; i = i + 2) {
            res *= multiply(theArgs[i], theArgs[i+1]);
        }

        return res;
    }
}

    //2.2
function multiplyAll(...theArgs) {
    const argumentsArray = [];

    for (let i = 0; i < theArgs.length; i++) {
        argumentsArray[i] = theArgs[i];
    }

    return argumentsArray.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue;
    });
}

    //3
const objectQueryStr = function (objectWithNames) { 
    let newQueryArray = [];
    newQueryArray.push('?');

    for (key in objectWithNames) {
        newQueryArray.push(key);
        newQueryArray.push('=');
        newQueryArray.push(objectWithNames[key]);
        newQueryArray.push('&');
    }

    newQueryArray.pop();
    newQueryArray = newQueryArray.join('');

    return encodeURI(newQueryArray);
} 
	
    //4
function choosePeople (people) {
    return arrayPeople.filter(function(elem) {
        if (elem.sex == "female") {
            return elem;
        }
    });
}	
	
    //5
const person = { 
    address: {
        street: "Кутузовский проспект"
    }
}
	
function getIn(obj, path, def) {
    let resultFor5task = [];
    resultFor5task = obj[path[0]];

    for (i = 1; i < path.length; i++) {
        resultFor5task = resultFor5task[path[i]]
    }

    if (resultFor5task == undefined) {
        return def;
    }

    return resultFor5task;
}

    //outputs
console.log('outputTask1 = ' + plus1(5,4));
console.log('outputTask2 = ' + multiply(3, 10));
console.log('outputTask3 : '); console.log(mergeArrays([1,2,3], [4,5]));
console.log('outputTask4 : '); filterFemales(arrayPeople);
console.log('outputTask5 : ');
getQuadrant(1, 2); 
getQuadrant(-1, 2); 
getQuadrant(-2, -3); 
getQuadrant(4, -7); 
getQuadrant(0, 0);
console.log('outputTask1 = ' + plus(2, 3, 5, 7, 3));
console.log('outputTask2.1 = ' + multiplyAll(2, 3, 1, 7, 8));
console.log('outputTask2.2 = ' + multiplyAll(2, 3, 1, 7, 8));
console.log('outputTask3 = ' + objectQueryStr({name1: 'John', name2: 'Fedor'}));
console.log('outputTask4 : '); console.log(choosePeople(arrayPeople));
console.log('outputTask5 = ' + getIn(person, ['address', 'street'], 'Бомж'));