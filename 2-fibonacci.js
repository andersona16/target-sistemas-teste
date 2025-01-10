function pertenceFibonacci(num) {
  let a = 0, b = 1;

  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === num ? `${num} pertence à sequência de Fibonacci` : `${num} não pertence à sequência de Fibonacci`;
}

let numero = 21; // Você pode definir qualquer número aqui
console.log(pertenceFibonacci(numero));
