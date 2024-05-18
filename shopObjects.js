/* Here we define the classes and objects that will use our program */

const logIn = selector => console.log(selector);
    
class Client {


    constructor(age = 0, dni = 0, buyProducts = [],dateOfEnter = '', name = '', dateOfExit = '', timeInShopDate = '', totalMoneyExpense = 0, totalTimeInShop = '', priceBuyProducts = 0){


        this.age = age,
        this.dni = dni,
        this.buyProducts = buyProducts,
        this.dateOfEnter = dateOfEnter,
        this.name = name,
        this.dateOfExit = dateOfExit,
        this.timeInShopDate = timeInShopDate,
        this.totalMoneyExpense = totalMoneyExpense,
        this.totalTimeInShop = totalTimeInShop,
        this.priceBuyProducts = priceBuyProducts

    }

    setAge(ageParam){

        this.age = ageParam;

    }

    setDni(dniParam){

        this.dni = dniParam;

    }

    setBuyProducts(buyProductsParam){

        this.buyProducts = buyProductsParam;

    }

    setDateOfEnter(dateOfEnterParam){

        this.dateOfEnter = dateOfEnterParam;

    }

    setName(nameParam){

        this.name = nameParam;

    }

    setDateOfExit(dateOfExitParam){

        this.dateOfExit = dateOfExitParam;

    }

    setTimeInShopDate(timeInShopDateParam){

        this.timeInShopDate = timeInShopDateParam;

    }

    setTotalMoneyExpense(totalMoneyExpenseParam){

        this.totalMoneyExpense = totalMoneyExpenseParam;

    }

    setTotalTimeInShop(totalTimeInShopParam){

        this.totalTimeInShop = totalTimeInShopParam;

    }

    setPriceBuyProducts(priceBuyProductsParam){

        this.priceBuyProducts = priceBuyProductsParam;

    }

};


class TimeShop {

    constructor(sec, hoours, min){

        this.sec = sec;
        this.hoours = hoours;
        this.min = min

    }

    setSeconds(timeParam1){

        this.sec = timeParam1;

    }

    setMinutes(timeParam2){

        this.min = timeParam2;

    }

    setHours(timeParam3){

        this.hoours = timeParam3;

    }

};


class Product{

    constructor(price = 0, name = '',iusa = 0, isNewProduct = true, isSealedProduct = true, dateOfEnter = '', dateOfSeal = ''){
    
        this.price = price,
        this.name = name,
        this.iusa = iusa,
        this.isSealedProduct = isSealedProduct,
        this.isNewProduct = isNewProduct,
        this.dateOfEnter = dateOfEnter,
        this.dateOfSeal = dateOfSeal
        
    }

    setPrice(priceParam){
    
        this.price = priceParam;
    
    }

    setName(nameParam){
    
        this.name = nameParam;

    }

    setIusa(iusaParam){
    
        this.iusa = iusaParam;
    
    }

    setIsNewProduct(isNewProductParam){
    
        this.isNewProduct = isNewProductParam;
    
    }

    setIsSealedProduct(isSealedProductParam){
    
        this.isSealedProduct = isSealedProductParam;
    
    }


    settDateOfEnter(dateOfEnterParam){
    
        this.dateOfEnter = dateOfEnterParam;
    
    }

    setDateOfSeal(dateOfSealParam){
    
        this.dateOfSeal = dateOfEnterParam;
    
    }


};




export const client = new Client;

