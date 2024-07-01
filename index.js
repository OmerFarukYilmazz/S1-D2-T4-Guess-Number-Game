function tahminEt(mod, tahmin) {
  /* kodlar buraya */
  if (typeof tahmin !== 'number' || tahmin > 6 || tahmin < 0) {
    console.log('0-7 aralığında seçim yapmalısın');
    return;
  }
  let randomNum;
  if (mod === 'kolay') {
    randomNum = 3;
  } else if (mod === 'orta') {
    randomNum = 5;
  } else if (mod === 'zor') {
    randomNum = 7;
  }
  let num = Math.floor(Math.random() * randomNum);
  if (tahmin === num) {
    //console.log('Kazandın!');
    return 'Kazandın!';
  } else {
    //console.log('Kaybettin: (kullanıcı: ' + tahmin + ',bilgisayar: ' + num);
    return 'Kaybettin: (kullanıcı: ' + tahmin + ', bilgisayar: ' + num + ')';
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tahminEt;
