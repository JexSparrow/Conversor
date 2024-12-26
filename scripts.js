const botaoConverter = document.querySelector(".botao-converter")   // botao para converter
const selectAConverterDe = document.querySelector(".select-A-Converter-De")     // primeiro select
const selectAConverterPara = document.querySelector(".select-A-Converter-Para")  // segundo select

// CNY,GBP,


async function converterValor() {

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,CNY-BRL,EUR-USD,BTC-USD,GBP-USD,CNY-USD,BRL-USD,USD-EUR,BTC-EUR,CNY-EUR,BRL-EUR,GBP-EUR,USD-GBP,BRL-GBP,EUR-GBP,BRL-CNY,USD-CNY,EUR-CNY").then(response => response.json())

    console.log(data)

    const valorInput = document.querySelector(".input").value        // valor do input
    const valorAConverter = document.querySelector("#valor-moeda-1") // valor para converter - cima
    const valorConvertido = document.querySelector("#valor-moeda-2") // valor convertido - baixo

    let dolarHoje = data.USDBRL.high
    let euroHoje = data.EURBRL.high
    let libraHoje = data.GBPBRL.high
    let bitcoinHoje = data.BTCBRL.high            // cotação moedas
    let yuanHoje = data.CNYBRL.high
    let realHoje = 1.00

    // SELECT CONVERTER DE // CIMA

    if (selectAConverterDe.value == "dolarTop") {


        euroHoje = data.EURUSD.high
        libraHoje = data.GBPUSD.high
        bitcoinHoje = data.BTCUSD.high
        yuanHoje = data.CNYUSD.high
        realHoje = data.BRLUSD.high
        dolarHoje = 1.00

        valorAConverter.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(valorInput)

    }

    if (selectAConverterDe.value == "euroTop") {

        dolarHoje = data.USDEUR.high
        libraHoje = data.GBPEUR.high
        bitcoinHoje = data.BTCEUR.high
        yuanHoje = data.CNYEUR.high
        realHoje = data.BRLEUR.high
        euroHoje = 1.00

        valorAConverter.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(valorInput)

    }

    if (selectAConverterDe.value == "libraTop") {

        dolarHoje = data.USDGBP.high
        euroHoje = data.EURGBP.high
        bitcoinHoje = 55000.00 // API nao possui as outras infos (cny e btc)
        yuanHoje = 0.11 // // API nao possui as outras infos (cny e btc)
        realHoje = data.BRLGBP.high
        libraHoje = 1.00

        valorAConverter.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(valorInput)

    }

    if (selectAConverterDe.value == "bitcoinTop") {

        dolarHoje = 0.000014101876675603 // API NAO POSSUI AS INFOS DE BTC-(MOEDA)
        euroHoje = 0.000015335120649491
        libraHoje = 0.000018016085790884
        bitcoinHoje = 1.0
        yuanHoje = 0.00000195710455764
        realHoje = 0.000002680965147453

        valorAConverter.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"

        }).format(valorInput)

    }


    if (selectAConverterDe.value == "yuanTop") {

        dolarHoje = data.USDCNY.high // 7.24
        euroHoje = data.EURCNY.high // 7.88
        libraHoje = 9.26
        bitcoinHoje = 510000.00
        yuanHoje = 1.00
        realHoje = data.BRLCNY.high // 1.27

        valorAConverter.innerHTML = Intl.NumberFormat("cn-CN", {
            style: "currency",
            currency: "CNY"

        }).format(valorInput)

    }                                                // REAL ESTÁ USANDO AS VARIAVEIS LA DE CIMA, POIS
    if (selectAConverterDe.value == "realTop") {     // NÃO TEM NENHUM VALOR MUDANDO ELAS! 

        valorAConverter.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(valorInput)

    }
    // SELECT CONVERTER PARA // BAIXO

    if (selectAConverterPara.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(valorInput / dolarHoje)
    }
    if (selectAConverterPara.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(valorInput / euroHoje)
    }
    if (selectAConverterPara.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",

        }).format(valorInput / libraHoje)
    }
    if (selectAConverterPara.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",

        }).format(valorInput / bitcoinHoje)
    }

    if (selectAConverterPara.value == "yuan") {
        valorConvertido.innerHTML = new Intl.NumberFormat("cn-CN", {
            style: "currency",
            currency: "CNY",

        }).format(valorInput / yuanHoje)
    }

    if (selectAConverterPara.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",

        }).format(valorInput / realHoje)

    }

}


function mudarMoedaCima() {

    const moedaConverter = document.querySelector("#nome-moeda-1")
    const moedaConverterValor = document.querySelector("#valor-moeda-1")
    const imgMoeda1 = document.querySelector("#real")


    if (selectAConverterDe.value == "dolarTop") {

        moedaConverter.innerHTML = "Dólar Americano"
        moedaConverterValor.innerHTML = "U$$ 0,00"
        imgMoeda1.src = "./assets/dolar.png"
    }

    if (selectAConverterDe.value == "euroTop") {

        moedaConverter.innerHTML = "Euro"
        moedaConverterValor.innerHTML = "0,00 €"
        imgMoeda1.src = "./assets/euro.png"

    }

    if (selectAConverterDe.value == "libraTop") {

        moedaConverter.innerHTML = "Libra"
        moedaConverterValor.innerHTML = "£ 0,00"
        imgMoeda1.src = "./assets/libra.png"

    }

    if (selectAConverterDe.value == "bitcoinTop") {

        moedaConverter.innerHTML = "Bitcoin"
        moedaConverterValor.innerHTML = "₿ 0,00"
        imgMoeda1.src = "./assets/bitcoin.png"

    }

    if (selectAConverterDe.value == "yuanTop") {

        moedaConverter.innerHTML = "Yuan"
        moedaConverterValor.innerHTML = "¥ 0,00"
        imgMoeda1.src = "./assets/yuan.png"

    }

    if (selectAConverterDe.value == "realTop") {

        moedaConverter.innerHTML = "Real"
        moedaConverterValor.innerHTML = "R$ 0,00"
        imgMoeda1.src = "./assets/real.png"

    }

    converterValor()    // CHAMA A FUNÇÃO PARA CADA VEZ QUE TROCAR DE MOEDA , FAZ O CÁLCULO E CONVERTE
}


function mudarMoedaBaixo() {

    const moedaConvertida = document.querySelector("#nome-moeda-2")
    const moedaConvertidaValor = document.querySelector("#valor-moeda-2")
    const imgMoeda2 = document.querySelector("#dolar")

    if (selectAConverterPara.value == "dolar") {

        moedaConvertida.innerHTML = "Dólar Americano"
        imgMoeda2.src = "./assets/dolar.png"
        moedaConvertidaValor.innerHTML = "U$$ 0,00"

    }

    if (selectAConverterPara.value == "euro") {

        imgMoeda2.src = "./assets/euro.png"
        moedaConvertidaValor.innerHTML = "0,00 €"
        moedaConvertida.innerHTML = "Euro"

    }

    if (selectAConverterPara.value == "libra") {

        moedaConvertida.innerHTML = "Libra"
        moedaConvertidaValor.innerHTML = "£ 0,00"
        imgMoeda2.src = "./assets/libra.png"

    }

    if (selectAConverterPara.value == "bitcoin") {

        moedaConvertida.innerHTML = "Bitcoin"
        moedaConvertidaValor.innerHTML = "₿ 0,00"
        imgMoeda2.src = "./assets/bitcoin.png"

    }

    if (selectAConverterPara.value == "yuan") {

        moedaConvertida.innerHTML = "Yuan"
        moedaConvertidaValor.innerHTML = "¥ 0,00"
        imgMoeda2.src = "./assets/yuan.png"

    }

    if (selectAConverterPara.value == "real") {

        moedaConvertida.innerHTML = "Real"
        moedaConvertidaValor.innerHTML = "R$ 0,00"
        imgMoeda2.src = "./assets/real.png"

    }

    converterValor() // CHAMA A FUNÇÃO PARA CADA VEZ QUE TROCAR DE MOEDA , FAZ O CÁLCULO E CONVERTE

}

selectAConverterDe.addEventListener("change", mudarMoedaCima) // QUANDO MUDAR O TOP - DE
selectAConverterPara.addEventListener("change", mudarMoedaBaixo) // QUANDO MUDAR O DE BAIXO - PARA

botaoConverter.addEventListener("click", converterValor)    // QUANDO CLICAR NO BOTÃO ELE CHAMA A FUNÇÃO
//QUE IRÁ CONVERTER OS VALORES
