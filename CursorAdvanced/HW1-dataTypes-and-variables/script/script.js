const mousePrice = 15.678;
const keyboardPrice = 90.2345;
const monitorPrice = 123.965;
const cash = 500;

const maxPrice = Math.max(mousePrice, keyboardPrice, monitorPrice);
const minPrice = Math.min(mousePrice, keyboardPrice, monitorPrice);
const sumArticle = mousePrice + keyboardPrice + monitorPrice;
const sumArticleNoCoins = Math.floor(mousePrice) + Math.floor(keyboardPrice) + Math.floor(monitorPrice);
const sumArcticleRounded = Math.round(sumArticleNoCoins / 100) * 100;
const rest = cash - sumArticle;
const averageValue = +(sumArticle / 3).toFixed(2);
const percentageDiscount = getRandomIntInclusive(0, 99);
const discount = (sumArticle / 100) * percentageDiscount;
const priceWithDiscount = +(sumArticle - discount).toFixed(2);
const cost = sumArticle / 2;
const netProfit = +(cost - discount).toFixed(2);
const parity = (sumArcticleRounded) => sumArcticleRounded % 2 === 0 ? false : true;

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
`Максимальна ціна: ${maxPrice}, 
Мінімальна ціна: ${minPrice},
Загальна сума: ${sumArticle},
Загальна сума без монет: ${sumArticleNoCoins},
Загальна сума без монет та округлена до сотень: ${sumArcticleRounded},
Перевірка на парність: ${parity(sumArcticleRounded)},
Решта з 500 гривень: ${rest},
середнє значення: ${averageValue},
Знижка у відсотках: ${percentageDiscount}%,
До оплати із знижкою ${priceWithDiscount},
Чистий прибуток: ${netProfit}`
);

