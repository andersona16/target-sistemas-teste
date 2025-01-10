let faturamento = [
  { dia: 1, valor: 1500 },
  { dia: 2, valor: 1800 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 2200 },
  { dia: 5, valor: 1500 },
  { dia: 6, valor: 0 },
  { dia: 7, valor: 3000 },
];

let faturamentoValido = faturamento.filter(item => item.valor > 0);

let menorFaturamento = Math.min(...faturamentoValido.map(item => item.valor));
let maiorFaturamento = Math.max(...faturamentoValido.map(item => item.valor));

let mediaFaturamento = faturamentoValido.reduce((acc, item) => acc + item.valor, 0) / faturamentoValido.length;

let diasAcimaMedia = faturamentoValido.filter(item => item.valor > mediaFaturamento).length;

console.log(`Menor faturamento: R$${menorFaturamento}`);
console.log(`Maior faturamento: R$${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
