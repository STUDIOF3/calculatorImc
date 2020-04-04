function calcularImc() {
  const nome = document.querySelector('.nome').value
  const idade = document.querySelector('.idade').value
  const peso = document.querySelector('.peso').value
  const altura = document.querySelector('.altura').value
  const imc = peso / (altura ** 2)

  if (imc < 18.5) {
    res = 'Abaixo do Peso'
  } else if (imc <= 24.9) {
    res = 'Peso Normal'
  } else if (imc <= 29.9) {
    res = 'Sobrepeso'
  } else if (imc <= 34.9) {
    res = 'Obesidade grau I'
  } else if (imc <= 39.9) {
    res = 'Obesidade grau II'
  } else if (imc >= 40) {
    res = 'Obesidade grau III'
  } else {
    res = '[Erro!], Dados invalidos'
  }

  document.querySelector('.resposta').innerHTML = `
    Nome: ${nome}<br><br>
    Idade: ${idade} Anos.<br><br>
    Peso: ${peso}kg<br><br>
    Altura: ${altura}m<br><br>
    IMC: ${imc.toFixed(2)}<br><br>
    Resultado: ${res}`

}

calcularImc()
