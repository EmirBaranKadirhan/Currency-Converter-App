class myCurrency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RVhWxGqljHCMsEAbG23ls8af6HRtsUT0Q0VwV6XO&base_currency=";
    }

    async exchange(miktar,ilkSecim,ikinciSecim){
        const cevap = await fetch(`${this.url}${ilkSecim}`);
        const sonuc = await cevap.json()
        const finalMiktari = miktar * sonuc.data[ikinciSecim];

        return finalMiktari
    }
}