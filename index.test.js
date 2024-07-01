const tahminEt = require("./index.js");

describe("tahminEt Oyunu Testleri", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
    consoleSpy.mockRestore();
  });

  test("Kolay modda doğru sonucu döndürüyor mu?", () => {
    const mod = "kolay";
    const tahmin = 1; // Math.random() * 3 = 1.5, yuvarlandığında 1
    expect(tahminEt(mod, tahmin)).toBe("Kazandın!");
  });

  test("Orta modda doğru sonucu döndürüyor mu?", () => {
    const mod = "orta";
    const tahmin = 2; // Math.random() * 5 = 2.5, yuvarlandığında 2
    expect(tahminEt(mod, tahmin)).toBe("Kazandın!");
  });

  test("Zor modda doğru sonucu döndürüyor mu?", () => {
    const mod = "zor";
    const tahmin = 3; // Math.random() * 7 = 3.5, yuvarlandığında 3
    expect(tahminEt(mod, tahmin)).toBe("Kazandın!");
  });

  test("Yanlış tahminde kaybetme mesajını döndürüyor mu?", () => {
    const mod = "kolay";
    const tahmin = 0; // Math.random() * 3 = 1.5, yuvarlandığında 1
    expect(tahminEt(mod, tahmin)).toBe(
      "Kaybettin: (kullanıcı: 0, bilgisayar: 1)"
    );
  });

  test("Kullanıcı tahmini sayı değilse uyarı mesajı veriyor mu?", () => {
    const mod = "kolay";
    const tahmin = "bir"; // Sayı olmayan bir değer
    tahminEt(mod, tahmin);
    expect(consoleSpy).toHaveBeenCalledWith("0-7 aralığında seçim yapmalısın");
  });

  test("Kullanıcı tahmini negatifse uyarı mesajı veriyor mu?", () => {
    const mod = "kolay";
    const tahmin = -1; // Negatif bir değer
    tahminEt(mod, tahmin);
    expect(consoleSpy).toHaveBeenCalledWith("0-7 aralığında seçim yapmalısın");
  });

  test("Kullanıcı tahmini 7'den büyükse uyarı mesajı veriyor mu?", () => {
    const mod = "kolay";
    const tahmin = 8; // 7'den büyük bir değer
    tahminEt(mod, tahmin);
    expect(consoleSpy).toHaveBeenCalledWith("0-7 aralığında seçim yapmalısın");
  });
});