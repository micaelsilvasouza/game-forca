/*Criando as letras do alfabeto: Criando dinamicamente inputs do tipo button e colocando em uma section, adicionando paralelamente a um objeto, que recebe um novo objeto que tem a informação da letra e a função que liga a letra do alfabeto a palavra escondida*/
/*Criando a section onde ira aparecer as letras que já foram usadas*/
let sec_usadas = document.createElement("section")
sec_usadas.setAttribute("class","exibir")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*variaveis para criar o alfabeto. Criando a section para receber os input/button das letras do alfabeto*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let alfa = "abcdefghijklmnopqrstuvwxyz"
let vogais = "aeiouc"
let acentos = {
    a:["ã","â","á","à"],
    e:["é","ê","è"],
    i:["í","î","ì"],
    o:["ó","ô","õ","ò"],
    u:["ú","û","ù",],
    c:["ç"]
}
let inp_letras = {}
let h1 = document.createElement("h1")
let sec_alfa = document.createElement("section")
sec_alfa.setAttribute("class","exibir")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*variaveis para criar a palavra secreta. Criar a section que te tera a palavra secreta e a informações sobre ela*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let paragrafo = document.createElement("p")
paragrafo.setAttribute("id", "men")
let inp_testo = document.createElement("input")
inp_testo.setAttribute("type","text")
inp_testo.setAttribute("id","txtent")
let inp_button = document.createElement("input")
inp_button.setAttribute("type","button")
inp_button.setAttribute("value","TENTAR")
inp_button.setAttribute("onclick","Tentar()")

let br = document.createElement("br")

let sec_palavra = document.createElement("section")
sec_palavra.setAttribute("class", "exibir")

///////////////////////////////////////////////////////////////////////////////
/*selecionando a palavra aleatoria*/
let palavras = {
    aleatorio: ["Luta","Futebol","Corrida","Tiro","fortnite","cuphead","cj","kratos","gta","mario","sonic","dinheiro","carro","casa","sertanejo","Amarelo","amigo","amor","ave","avião","avó","balão","bolo","branco","cama","caneca","celular","céu","clube","copo","doce","elefante","escola","estojo","faca","foto","garfo","geleia","girafa","janela","limonada","mãe","meia","noite","óculos","ônibus","ovo","pai","peixe","parque","passaro","passarinho","pijama","rato","umbigo","acender","afilhado","agnóstico","áspero","assombração","asterisco","balaústre","caminho","champanhe","chiclete","chuveiro","coelho","contexto","covivência","coração","desalmado","eloquente","esfirra","esquerdo","exceção","filantropo","fugaz","feroz","frio","quente","congelado","derretido","resfriado","gripe","doente","gororroba","heterossexual","horrorizado","impacto","inócuo","independência","jocoso","laurel","asas","anjo","modernidade","oftalmologista","Otorrinolaringologista","panaceia","paralelepípedo","pororoca","prognóstico","quarentena","quimera","reportagem","sino","taciturno","temperança","tênue","ufanismo","viscera","absonâcia","açodamento","alvíssaras","astenia","babugem","beneplácito","cinesia","duidade","encômio","econômico","emprestimo","empoderar","empoderamento","empedernido","fleumático","gorjeta","gorjear","homizio","lancinante","macambúzio","mendocioso","nefelibata","odiento","ódio","pódio","troféu","apaixonar","jurar","amar","beijar","prejuízo","prejudicado","pacóvio","quintenssência","indêcencia","recôndito","ruflão","refrão","música","ouvir","escutar","cantar","dançar","sectário","útero","úbere","urze","vitupério","verossimilhança","xaropear","zênite","zeugma","xarope","zebra","player","game","afobado","amendoim","banheiro","caatinga","cachorro","campeonato","capricórnio","catapora","corrupção","crepúsculo","empenhado","esparadrapo","quardanpo","forca","galáxia","história","magenta","manjericão","mente","menta","moeda","oração","paçoca","palavra","vara","pedreiro","verbo","substantivo","pronome","adjetivo","conjunção","conectivo","conectado","interligado","gafanhoto","google","programar","digitar","criar","desenvolver","javascript","pytom","pneumonia","pneu","pulmão","rotatória","lombada","placa","motor","serenata","viola","violão","transeunte","trilogia","xicara"],
    animais: ["Animais", "abelha", "andorinha","babuíno","baleia","cachorro","camaleão","dromedário","ema","elefante","foca","flamingo","golfinho","guaxinim","hipopótamo","hiena","iguana","impala","jaguar","jacaré","kiwi","leão","lagarto","macaco","masuranho","naja","ovelha","papagaio","quati","raposa","rato","sardinha","tartaruga","tamanduá","urso","urubu","wallaby","xexéu","xaréu","yak","zebra","zebu"],
    objetos: ["objetos","ampulheta","anzol","candelabro","desfilibrador","carro","celular","mesa","abajur","freezer","geladeira","faca","colher","cadeira","mesa","modem","notebook","computador","pêndulo","spray","escova","pente","fantoche","bacia","balança","banco","bicicleta","berimbau","bidê","cabide"],
    comidas: ["fast food","sardinha","lasanha","peixe","ovo frito","chocolate","sobremesa","hamburgue","salada","batata frita","bife","maçâ","banana","amendoim","geleia","arroz","feijão","farofa","carne assada","pão","sanduiche","caramelho","pé de moleque","quebra queixo","uva","miojo","macarronada","arroz doce","estrogonofe"],
    jogos: ["jogos"],
    nomes: ["jacinto pinto","tomas turbano", "power quido","paula tejano","paulo bifricado", "neymar","juliana","Micael","Vinicius","mathesu","jose carlos", "cristiano Ronaldo", "Messi","galvão boeno", "juliana","ana julia","samara","Otavio","jaciara","jurema",'silvio santos',"faustão","rodrigo faro","Meria Joaquina","cirilo"]
}
let list_temas = ["aleatorio","objetos","animais", "comidas",/*"jogos"*/,"nomes"]
let palavra = ""
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let image = document.createElement("img")
let list_img = ["cabeça","olho-esquerdo","olho-direito","boca","corpo","braço-esquerdo","braço-direito","perna-esquerda"]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let sec_tema = document.createElement("section")
sec_tema.setAttribute("id","temas")

let div_tema = document.createElement("div")
let inp_alterar = document.createElement("input")
inp_alterar.setAttribute("type","button")
inp_alterar.setAttribute("value","ALTERAR")
inp_alterar.setAttribute("onclick", "alterar()")
let ul_tema = document.createElement("ul")
for(let i = 0; i < list_temas.length; i++){
    let li = document.createElement("li")
    let radio = document.createElement("input")
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "tema")
    radio.setAttribute("value", list_temas[i])
    if(i == 0){
        radio.setAttribute("checked", true)
    }
    li.appendChild(radio)
    li.innerHTML += list_temas[i].toUpperCase()
    ul_tema.appendChild(li)
}
div_tema.appendChild(ul_tema)
div_tema.appendChild(inp_alterar)
let tema = "aleatorio"
function alterar(){
    for(let id = 0; id < list_temas.length; id++){
        let rad = document.getElementsByName("tema")[id]
        if(rad.checked){
            tema = rad.value
        }
    }
    alert(`Aleterado para ${tema}`)
    for(let i = 0; i < 4; i++){
        let sec = document.getElementsByTagName("section")[i]
        sec.innerHTML = ""
    }
    limite = 0
    Create()
}
///////////////////////////////////fuçoes Game Play /////////////////////////////////////
/*Create: pega as variaveis acima e cria a visualização das informações e adiciona no body atravez do event onload()*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Create(){
    sec_usadas.innerHTML = "<strong>Letras usadas:</strong> "
    image.setAttribute("src","imagens/forca.jpg")
    h1.innerHTML = "Letras Disponiveis"
    sec_alfa.appendChild(h1)
    sec_palavra.appendChild(image)
    sec_palavra.appendChild(paragrafo)
    sec_palavra.appendChild(inp_testo)
    sec_palavra.appendChild(inp_button)
    sec_palavra.appendChild(br)
    paragrafo.innerHTML = "Click em uma das letra disponiveis, para ver se tem nessa palavra."
    let ale = Math.floor(Math.random() * palavras[tema].length)
    palavra = palavras[tema][ale]
    //letras do alfabeto em input/buttons
    for(let l of alfa){
        let inp_letra = document.createElement("input")
        inp_letra.setAttribute("type", "button")
        inp_letra.setAttribute("value", l.toUpperCase())
        inp_letra.setAttribute("class", "letra")
        inp_letra.setAttribute("id", l)
        inp_letras[l] = {letra: [l], Verificar(){
            TemOuNaoTem(this.letra)
            let input = document.getElementById(this.letra)
            sec_usadas.innerHTML += this.letra[0].toUpperCase() + " "
            inp_letra.remove()
        }}
        inp_letra.setAttribute("onclick", `inp_letras.${l}.Verificar()`)
        sec_alfa.appendChild(inp_letra)
    }
    for(let v of vogais){
        let vogal = inp_letras[v]
        for(let a of acentos[v]){
            vogal.letra.push(a)
        }      
    }
    sec_tema.innerHTML = `<h1>Temas: ${tema.toUpperCase()}</h1>`
    sec_tema.appendChild(div_tema)
    //criando a palavra secreta.
    for(let s of palavra){
        let div = document.createElement("div")
        div.setAttribute("class", "palavra")
        if(s == " "){
            div.innerHTML = "*"
        }else{
            div.innerHTML = "-"
        }
        sec_palavra.appendChild(div)
    }

    //Adicionando tudo a tag main
    let main = document.getElementById("jogo")
    main.innerHTML = ""
    main.innerHTML += "<h1>Jogo da Forca</h1>"
    main.appendChild(sec_tema)
    main.appendChild(sec_usadas)
    main.appendChild(sec_palavra)
    main.appendChild(sec_alfa)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Criando as funções de advinhação*/
//Verifica se a palavra possui determinada letra
let limite = 0
function TemOuNaoTem(letra){
    let p = palavra.toLowerCase()
    let men = document.getElementById("men")
    let bool = false
    for(let c of letra){
        if(p.includes(c)){
            bool = true
            men.innerHTML = `Essa palavra possui a letra ${letra[0].toUpperCase()}.`
            for(let i in p){
                if(p[i] == c){
                    let div = document.getElementsByClassName("palavra")[i]
                    div.innerHTML = c.toUpperCase()
                }
            }
        }
    }
    if(bool == false){
        image.setAttribute("src",`imagens/${list_img[limite]}.jpg`)
        men.innerHTML = `Essa palavra não possui essa letra.`
        limite++
    }
    if(limite > 8){
        limite = 0
        GameOver()
    }
}
//Pega um palavra que o jogador digita e compara se é a correta
function Tentar(){
    let p = palavra.toLowerCase()
    let men = document.getElementById("men")
    let txtent = document.getElementById("txtent")
    let tent = txtent.value.toLowerCase()
    if(tent.length <= 0){
        men.innerHTML = "Digite uma palavra para fazer a tentativa."
    }else if(tent == p){
        txtent.value = ''
        limite = 0
        Vitoria()
        for(let i in p){
            let div = document.getElementsByClassName("palavra")[i]
            div.innerHTML = p[i].toLocaleUpperCase()
        }
    }else{
        men.innerHTML = `Errado! Essa não é a palavra correta. Tente novamente.`
    }

    txtent.value = ''
}
//Quando o jogador exede o numero de tentativas ele é jogado para uma tela de game over.
function GameOver(){
    let main = document.getElementById("jogo")
    let restart = document.createElement("input")
    
    h1.innerHTML = "VOCÊ FOI ENFORCADO"
    image.setAttribute("src", "imagens/enforcado.jpg")
    restart.setAttribute("type", "button")
    restart.setAttribute("value", "REINICIAR")
    restart.setAttribute("onclick",'Create()')    
    
    for(let i = 0; i < 4; i++){
        let sec = document.getElementsByTagName("section")[i]
        sec.innerHTML = ""
    }

    main.innerHTML = ""
    main.appendChild(h1)
    main.appendChild(image)
    main.appendChild(br)
    main.appendChild(restart)
}

//Quando o jogador acerta a palavre é levado a uma tela de vitoria.
function Vitoria(){
    let main = document.getElementById("jogo")
    let restart = document.createElement("input")

    h1.innerHTML = "PARABENS!"
    paragrafo.innerHTML = "VOCÊ ACERTOU PALAVAR É:"
    restart.setAttribute("type", "button")
    restart.setAttribute("value", "JOGAR NOVAMENTE")
    restart.setAttribute("onclick",'Create()')

    for(let i = 0; i < 4; i++){
        let sec = document.getElementsByTagName("section")[i]
        sec.innerHTML = ""
    }

    main.innerHTML = ""
    main.appendChild(h1)
    main.appendChild(paragrafo)
    for(let l of palavra){
        let div = document.createElement("div")
        if(l == " "){
            div.innerHTML = "*"
        }else{
           div.innerHTML = l.toUpperCase() 
        }
        
        div.setAttribute("class", "letra")
        main.appendChild(div)
    }
    image.setAttribute("src","imagens/boneco.jpg")
    main.innerHTML += "<br>"
    main.appendChild(image)
    main.appendChild(br)
    main.appendChild(restart)
}