// Exercício

// 1. Declare uma variável de 
// nome color

var color;

/**
 * 2. Que tipo de dado é a variável 
 * acima ?
 */

console.log(typeof color);

/**
 * 3. Declare uma variável e atribua 
 * valores para cada um dos dados:
 * name: String
 * age: Number (integer)
 * isAdmin: Boolean
 * stars: Number (float)
 */

 let name = "Rick";
 let age = 30;
 let isAdmin = true;
 let stars = 2.5;

const person = {
    name: "Rick",
    age: 30,
    isAdmin: true,
    stars: 2.5
};

/**
 * 4. A variável person é de que tipo 
 * de dado ?
 *      const person = {}
 * 
 * 4.1. Atribua a ela as mesmas 
 * propriedades e valores da questão 
 * 3.
 * 
 *  4.2. Mostre no console a seguinte 
 * mensage:
 *      Nome: <name> 
 *      Idade: <age> 
 *      Qualificação: <stars> 
 *      Administrador: <isAdmin> 
 *      (Substitua <name> <age> <stars>
 *       <isAdmin> pelos valores de cada
 *        propriedade do objeto)
 */

 console.log(typeof person);
 console.log(`
    Nome: ${person.name}
    Idade: ${person.age}
    Qualificação: ${person.stars}
    Administrador: ${person.isAdmin ? "Sim" : "Não"}
 `)
   
 /**
  * 5. Declare uma variável do tipo 
  * array, de nome students e atribua 
  * a ela nenhum valor, ou seja, 
  * somente o arrau vazio.
  */

  var students = [];

  console.log(typeof students);

  /**
   * 6. Reatribua valor para a variavél
   * acima, colocando dentro dela 
   * o objeto da questão 4. 
   * (Não copiar e colar o objeto, 
   * mas usar o objeto criado
   * e inserir ele no array)
   */
  students = [
    person
  ]

  console.log(students);

   /**
    * 7. Coloque no console o valor 
    * da posição zero do Array acima.
    */
   console.log(students[0]);

    /**
     * 8. Crie uma nova persona e 
     * coloque na posição 1 do Array 
     * students
     */
    const morty = {
        name: "Morty",
        age: 15,
        stars: 3.6,
        isAdmin: false
    }

    students = [
        person,
        morty
    ]

    console.log(students);

    console.log(students[0]);
    console.log(students[1]);