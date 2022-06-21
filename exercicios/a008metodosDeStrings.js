let ola = ' Hello world! ';
console.log(ola);
//.length retorna uma extensão de uma cadeia de texto.
console.log(ola.length);

//.indexOf() executado a partir de uma string, recebe texto como parametro, retorna a posição inicial do parametro.
console.log(ola.indexOf('world!'));

//.slice() recebe como parametros um index inicial e final, retornando os valores entre esses indices.
console.log(ola.slice(1, 6));

//.trim() elimina os espaços em branco no início e fim de uma string, não elimina os espaços no meio da string.
console.log(ola.trim());

//.split() permite converter uma string em array.
console.log(ola.split());
console.log(ola.split(' '));//colocando um espaço é possível separar as palavras.

//.replace() permite substituir uma parte do texto dentro de uma string.
console.log(ola.replace('!', '.'));//passando como parametros o valor a ser trocado e o novo valor.

