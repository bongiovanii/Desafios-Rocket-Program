let valorProduto = 34;
let controle = true;
let icms = 0;
let desconto = 10;

if (controle == true) {
  valorProduto = comDesconto(valorProduto);
} else if (controle == false) {
  valorProduto = semDesconto(valorProduto);
}

function arrendoda(num) {
  let numFormatado = num.toFixed(2);
  return numFormatado;
}

function comDesconto(valor) {
  desconto /= 100;
  desconto *= valorProduto;
  valorProduto += desconto;

  let min = 12;
  let max = 25;
  icms = Math.random() * (max - min + 1) + min;

  icms /= 100;

  imposto = icms * valorProduto;
  valorProduto += imposto;

  icms = arrendoda(icms);
  desconto = arrendoda(desconto);
  valorProduto = arrendoda(valorProduto);
  imposto = arrendoda(imposto);

  console.log(
    "ICMS:" +
      icms +
      "\nO produto teve um desconto de:" +
      desconto +
      "\nPreço final: R$" +
      valorProduto +
      "\nImposto: " +
      imposto
  );

  return valor;
}

function semDesconto(valor) {
  let min = 12;
  let max = 25;
  icms = Math.random() * (max - min + 1) + min;

  icms /= 100;

  imposto = icms * valorProduto;
  valorProduto += imposto;

  icms = arrendoda(icms);
  valorProduto = arrendoda(valorProduto);
  imposto = arrendoda(imposto);

  console.log(
    "ICMS:" +
      icms +
      "\nO produto não teve um desconto" +
      "\nPreço final: R$" +
      valorProduto +
      "\nImposto: " +
      imposto
  );
}
