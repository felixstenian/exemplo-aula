// String
//console.log("JavaScript 123 'arquivo'");
//console.log('JavaScript "arquivo"');
//var test = "valor";
//console.log(`JavaScript ${test} `);

// Number
//console.log(33); // int
//console.log(12.2); // float
//console.log(NaN); // Not a number
//console.log(12 / "string" ); // Not a number

// Boolean
//console.log(true); // true
//console.log(false); // false
//console.log(1 !== 10); // false


// Object
//console.log(
//    {
//       propriedade: "valor",
//        propriedade2: 12
//    }
//)

// Array (Vetores)
//const array = ["valor", 23]; 
//console.log(array[2])


// Variáveis
 // var

 //var cor = "amarelo";
 //cor = "vermelho";
 //console.log(cor);

 // let
 //var cor1 = "azul";
 //console.log(cor1);

 // const
 //const cor3 = "verder";
 
 //console.log(cor3);

// Tipos

//var numero = 12;
//var reais = 1.5;
//var texto = "string";


// Scopo
//console.log("existe x antes do bloco ?", x)
//{
//    const x = 0;
    

//}
//console.log("existe x antes do bloco ?", x)

// Para criar variáveis

    // -> JS case-sensitive 
    // Posso
     // iniciar com caracteres -> $ ou _
 //    var $var = 1;
  //   var _var = 1;
     // iniciar com letras
  //   var Exvar = 1;
     // lentras maisucula e minisculas fazem diferença
  //   var Ex = 1;
    // var ex = 1;
    // Não posso
        // -> Utilizar números
        // -> Utilizar espaços vazios entre nomes
     //   var Exemplo_variavel = 1;
     //   var ExemploVariavel = 1;
    // Ideal
        // -> Nomes que fazem sentido
        // -> Explique o que vai fazer ou faz
        // -> CamelCase --> ExemploVariavel
        // -> snake_Case --> Exemplo_variavel
        // -> Escrever em inglês




// Declarando e atribuindo valores
 /**
  *    var cor; // Declarando
    cor = "amarelo"; // Atribuindo
    console.log(cor);
  */


// Agrupando declarações
    /**
     * var cor1 = "verde";
    var valor = 1;
    console.log(cor, cor1, valor);
     */

// Concatenando valores
    //console.log("A cor é" + cor + "de valor" + valor);
// Interpolação
   // console.log(`A cor é ${cor1} de valor ${valor} `);

// Objetos (Objects)
    /**
     * const person = {
        name: 'Maria',
        age: 20,
        email: 'maria@gmail.com',
        isAdmin: true
    }

    console.log(`${person.name} tem ${person.age} seu e-mail é ${person.email} é administrador do sistema ${person.isAdmin}`);

     */
// Arrays
    /**
     * const animals = [
        'Dog',
        'Lion',
        'Cat'
    ]

    console.log(animals[0]);

    const animals_new = [
        'Dog',
        'Lion',
        {
            name: 'Cat',
            age: 3
        }
    ]

    console.log(`Animal: ${animals_new[2].name} idade: ${animals_new[2].age}`);
     */


/**
 * FUNÇÕES
 * 
 */

/**
 * console.log("inicio do script")

var cor = "preto";

 function createPhrases() {
    console.log("Frase1")
    console.log("Frase2")
    console.log("Frase3")
    console.log(cor);
 }
 
createPhrases()

console.log("Fim do script")
 */


 // Argumentos e parâmetros

 /**
  * const sum = function(num1, num2) {
    total = num1 + num2;
    return total;
 }
console.log(sum(2,3));
  */
 

 // retornando valores dentro 
 //da função

// Manipulando o HTML com JavaScript

//alert("Olá Mundo!")

// DOM
/**
 * var titulo = document.querySelector("h1");
console.log(titulo.textContent);

titulo.textContent = "Olá Mundo!"
 */

 var buttonAlert = document.getElementById("alert");
 buttonAlert.addEventListener("click", mostrarAlerta)

 function mostrarAlerta() {
    alert("Botão Clicado!")
 }

 var linkAlert = document.getElementById("link");
 linkAlert.addEventListener("click", function() {
     alert("Link Clicado!")
 })

 var button = document.querySelector("#add");
 button.addEventListener("click", function(event) {
     event.preventDefault();
 })

