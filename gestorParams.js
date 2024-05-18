//*This archive is for work with all our methods of our objects in our program:

const logIn = selector => console.log(selector);//*This is a shorthand for "console.log()"

import {client} from './shopObjects.js'

//*Dinamic vars for lists:
let amountOfRequirements = 0;
let amountOfProducts = 0;

//*Lists:
const listOfClients = [] 
let listOfRequirements = [amountOfRequirements];
let listOfPrices = [amountOfProducts];
let listOfProducts = [];

//*Reserve of products:

let reserveOfFruits = [];
let reserveOfVegetables = [];
let reserverOfMeats = [];
let reserveOfDresses = [];
let reserveOfCandies = []
let reserveOfElectronincs = [];

//*Time vars:
let timeShop;
let second = 0;
let minute = 0;
let hour = 0;

let seconds = 0;
let minutes = 0
let hours = 0;

//*Date vars:
let date = ``;
let day = 0;
let year = 0;
let month = 0;

//*

//*We will use here a function taked of here: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round

/* Here another and more detailed explaining:

Sure, I'd be happy to explain this JavaScript function!


This function, decimalAdjust, is used to round, floor, or ceil a decimal number to a specified number of decimal places. The function takes three arguments:


type: This is a string that specifies the type of rounding to perform. It can be "round", "floor", or "ceil", corresponding to the Math.round, Math.floor, and Math.ceil functions, respectively.
value: This is the number to be rounded.
exp: This is the number of decimal places to round to.

Here's a breakdown of what the function does:


If exp is undefined or zero, it simply applies the specified rounding function (round, floor, or ceil) to value and returns the result.

It then converts value and exp to numbers using the unary plus (+) operator. If either value or exp is not a number, or if exp is not an integer, it returns NaN.

The "shift" section of the function is a bit tricky. It's using scientific notation to shift the decimal point in value by exp places to the right. This is done by converting value to a string, splitting it into two parts at the "e" (if it exists), and then creating a new number where the "e" is exp places to the left.

It then applies the specified rounding function to this new number.

The "shift back" section does the opposite of the "shift" section: it shifts the decimal point back to its original position. This is done by again converting value to a string, splitting it at the "e", and creating a new number where the "e" is exp places to the right.

Finally, it returns this new number.


The Math.round10 function is then defined as a shorthand for calling decimalAdjust with "round" as the type.


This function can be useful for rounding decimal numbers to a specific number of decimal places, especially when dealing with floating-point precision issues in JavaScript.


*/
(function () {
    /**
     * Ajuste decimal de un número.
    
     //* @param {String}  tipo  El tipo de ajuste.
     //* @param {Number}  valor El numero.
     //* @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
     //* @returns {Number} El valor ajustado.
     //*/
    function decimalAdjust(type, value, exp) {
      // Si el exp no está definido o es cero...
        if (typeof exp === "undefined"  +exp === 0) {

            return Math[type](value);

        }

        value = +value;
        exp = +exp;

      // Si el valor no es un número o el exp no es un entero...
        if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {

            return NaN;

        }

      // Shift
        value = value.toString().split("e");
        value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
            logIn(value);

      // Shift back
        value = value.toString().split("e");
            logIn(value);
        return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));

    }

    // Decimal round
    if (!Math.round10) {

        Math.round10 = function (value, exp) {
        return decimalAdjust("round", value, exp);
        };

    }

    })();

//* "d" is the days value, "m" the months value and "y" the year value, we use the function to set the date value
function setDateVars(d,m,y){

    //*Here we manipulate our date value seeing if ones of the date values was changed:
    if(d > 0 && y > 0 && m > 0){

        date = `${m}/${d}/${y}`;

    }

    return logIn(date);

};

//*Here we calculate and round the seconds("s"), minutes("m") and hours("h") and we round it:
function setTimeVars(s,h,m){

    //*SET TIME VALUES CONDITIONS:
    if(s > 0){

        m = Math.round10((s / 60), -2);//*we round this to two decimals.


    }   else if(m > 0){

        h = Math.round10((m / 60), -2);//*we round this to two decimals.

    }   else if(h > 0){

        s = Math.round10((h * 3600), -2);//*we round this to two decimals.

    }

};

client.setAge(17);

logIn(client);

