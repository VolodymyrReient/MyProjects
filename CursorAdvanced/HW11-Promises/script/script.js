async function getRandomChinese(length) {
    let letters = length;
    let res = "";
    const word = () => {
     return  new Promise((res) => {
        setTimeout(() => {
          res(generateChineseWord());
        }, 50);
      });
    };
    while (letters >0) {
        res += await word();
        letters--;
    }
    return res;
}
function generateChineseWord() {
    const now = Date.now();
    const symbols = now.toString().substr(now.length - 5);
    return String.fromCharCode(symbols);
  }
  getRandomChinese(4).then((success) => {
    console.log(success);
  });