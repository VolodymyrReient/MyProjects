const mousePrice = 15.678;
const keyboardPrice = 90.2345;
const monitorPrice = 123.965;

const maxPrice = Math.max( mousePrice, keyboardPrice, monitorPrice);
const minPrice = Math.min( mousePrice, keyboardPrice, monitorPrice);
const sumArticle = mousePrice + keyboardPrice + monitorPrice;
const sumArticleNoCoins = Math.floor(mousePrice) + Math.floor(keyboardPrice) + Math.floor(monitorPrice);
const  sumArcticleRounded = Math.round(sumArticleNoCoins/100)*100;
const rest = 500 - sumArticle;
const averageValue = (sumArticle/3).toFixed(2);
const percentageDiscount = getRandomIntInclusive(0,99);
const discount = (sumArticle/100 )* percentageDiscount;
const priceWithDiscount = (sumArticle - discount).toFixed(2);
const cost = sumArticle/2;
const netProfit = (cost - discount).toFixed(2);

function parity (sumArcticleRounded) {
    return sumArcticleRounded % 2 === 0 ? "false" : "true";
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }


console.log (
`Максимальна ціна: ${maxPrice} \n`, 
`Мінімальна ціна: ${minPrice} \n`,
`Загальна сума: ${sumArticle}\n`,
`Загальна сума без монет: ${sumArticleNoCoins}\n`,
`Загальна сума без монет та округлена до сотень: ${sumArcticleRounded}\n`,
`Перевірка на парність: ${parity(sumArcticleRounded)}\n`,
`Решта з 500 гривень: ${rest}\n`,
`середнє значення: ${averageValue}\n`,
`Знижка у відсотках: ${percentageDiscount}%\n`,
`До оплати із знижкою ${priceWithDiscount}\n`,
`Чистий прибуток: ${netProfit}`);
