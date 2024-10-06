const miktarDOM = document.querySelector("#miktarGiris");
const ilkSecimDOM = document.querySelector("#ilkParaBirimiSeçeneği");
const ikinciSecimDOM = document.querySelector("#ikinciParaBirimiSeçeneği");
const sonucDOM = document.querySelector("#sonucCiktisi");
const temizleDOM = document.querySelector("#temizle");

const paraBirimi = new myCurrency()

runEventListeners();


function runEventListeners(){
    miktarDOM.addEventListener("input",donustur)            // input'a bir seyler girildiginde tetiklenir
    temizleDOM.addEventListener("click", temizle)           // hepsini sifirla
}



function donustur(){
    const miktar = Number(miktarDOM.value.trim());          // girilen miktari string'ten number'a cevirdik

    const ilkSecim = ilkSecimDOM.options[ilkSecimDOM.selectedIndex].textContent;        // options => bize liste doner biz de bu liste icinde selectedIndex(secili index)'e karsilik gelen bilgiyi almis olduk 
    
    const ikinciSecim = ikinciSecimDOM.options[ikinciSecimDOM.selectedIndex].textContent;


    paraBirimi.exchange(miktar,ilkSecim,ikinciSecim)
    .then((res) =>{
        sonucDOM.value = res.toFixed(3);
    })
    
}


function temizle(){
    miktarDOM.value = "";
    sonucDOM.value = "";
    ilkSecimDOM.selectedIndex = 0;
    //ilkSecimDOM.value = ilkSecimDOM.options[0].value         yukaridaki ile ayni isleve sahip
    ikinciSecimDOM.value = "TRY"

}