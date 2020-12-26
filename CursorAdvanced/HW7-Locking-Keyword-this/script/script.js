const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,
    name: "Ukraine"
    
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921,
    name: "Latvia"
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114,
    name: "Litva" 
};

const getMyTaxes = function (salary) {
    const tax =  salary * this.tax;
    return +tax.toFixed(2);
}
console.log(`Податок в Україні: ${getMyTaxes.call(ukraine, 2000)}`);
console.log(`Податок в Латвії: ${getMyTaxes.call(latvia, 2000)}`);
console.log(`Податок в Литві: ${getMyTaxes.call(litva, 2000)}`);

const getMiddleTaxes = function () {
    const impost = this.tax * this.middleSalary;
    return impost;
}
console.log(`Середній податок в Україні: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Середній податок в Латвії: ${getMiddleTaxes.call(latvia)}`);
console.log(`Середній податок в Литві: ${getMiddleTaxes.call(litva)}`);

const getTotalTaxes = function () {
    const generalTax = this.tax * this.middleSalary * this.vacancies;
    return generalTax;
}
console.log(`Загальний податок в Україні: ${getTotalTaxes.call(ukraine)}`);
console.log(`Загальний податок в Латвії: ${getTotalTaxes.call(latvia)}`);
console.log(`Загальний податок в Литві: ${getTotalTaxes.call(litva)}`);

// const getMySalary = function () {
//     const startSalary = 1500;
//     const endSalary = 2000;
//     let salary = Math.floor(Math.random() * (startSalary - endSalary + 1)) + endSalary;
//     let taxes = +(salary * this.tax).toFixed(2);
//     let profit = +(salary - taxes).toFixed(2);
//     const wage = {
//         salary: salary,
//         profit: profit,
//         taxes: taxes,
//     };
//     return  JSON.stringify(wage);
// }


const getMySalary = (country) => {
    setInterval(() => {
        const startSalary = 1500;
        const endSalary = 2000;
        const salary = Math.floor(Math.random() * (startSalary - endSalary + 1)) + endSalary;
        const taxes = +(salary * country.tax).toFixed(2);
        let profit = +(salary - taxes).toFixed(2);
        const wage = {
            salary: salary,
            profit: profit,
            taxes: taxes
        };
        console.log( `Загальна інформація про зарплати в ${country.name} ${JSON.stringify(wage)}`);
    }, 10000)
    }

    getMySalary(ukraine);
    getMySalary(latvia);
    getMySalary(litva);


// setInterval( function(){
    // console.log(`Загальна інформація про зарплати в Україні: ${getMySalary(ukraine)}`);
    // console.log(`Загальна інформація про зарплати в Латвії: ${getMySalary.call(latvia)}`);
    // console.log(`Загальна інформація про зарплати в Литві: ${getMySalary.call(litva)}`)
    // }, 10000 );

