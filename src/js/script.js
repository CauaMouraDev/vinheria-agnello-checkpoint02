const ANO_ATUAL = 2026;
const LIMITE_CADASTROS = 20;

// Cada registro fica em variaveis numeradas para evitar arrays e objetos.
let nome1 = '', safra1 = 0, estoque1 = 0, classificacao1 = '';
let nome2 = '', safra2 = 0, estoque2 = 0, classificacao2 = '';
let nome3 = '', safra3 = 0, estoque3 = 0, classificacao3 = '';
let nome4 = '', safra4 = 0, estoque4 = 0, classificacao4 = '';
let nome5 = '', safra5 = 0, estoque5 = 0, classificacao5 = '';
let nome6 = '', safra6 = 0, estoque6 = 0, classificacao6 = '';
let nome7 = '', safra7 = 0, estoque7 = 0, classificacao7 = '';
let nome8 = '', safra8 = 0, estoque8 = 0, classificacao8 = '';
let nome9 = '', safra9 = 0, estoque9 = 0, classificacao9 = '';
let nome10 = '', safra10 = 0, estoque10 = 0, classificacao10 = '';
let nome11 = '', safra11 = 0, estoque11 = 0, classificacao11 = '';
let nome12 = '', safra12 = 0, estoque12 = 0, classificacao12 = '';
let nome13 = '', safra13 = 0, estoque13 = 0, classificacao13 = '';
let nome14 = '', safra14 = 0, estoque14 = 0, classificacao14 = '';
let nome15 = '', safra15 = 0, estoque15 = 0, classificacao15 = '';
let nome16 = '', safra16 = 0, estoque16 = 0, classificacao16 = '';
let nome17 = '', safra17 = 0, estoque17 = 0, classificacao17 = '';
let nome18 = '', safra18 = 0, estoque18 = 0, classificacao18 = '';
let nome19 = '', safra19 = 0, estoque19 = 0, classificacao19 = '';
let nome20 = '', safra20 = 0, estoque20 = 0, classificacao20 = '';

function validarEntrada(valor, tipo, minimo, maximo) {
  if (tipo === 'texto') {
    return valor.trim().length > 0;
  }

  if (tipo === 'numero') {
    // Aceita apenas digitos: evita que uma entrada vazia vire 0 ou que '1e3' vire 1000.
    const texto = valor.trim();
    const numero = Number(texto);
    return /^\d+$/.test(texto) && numero >= minimo && numero <= maximo;
  }

  if (tipo === 'continuar') {
    const resposta = valor.trim().toLowerCase();
    return resposta === 's' || resposta === 'n';
  }

  return false;
}

function solicitarEntrada(mensagem, tipo, minimo = 0, maximo = 0) {
  while (true) {
    const resposta = prompt(mensagem);

    if (resposta === null) {
      return null;
    }

    if (validarEntrada(resposta, tipo, minimo, maximo)) {
      if (tipo === 'numero') {
        return Number(resposta);
      }

      return resposta.trim();
    }

    if (tipo === 'texto') {
      alert('Este campo nao pode ficar vazio.');
    } else if (tipo === 'numero') {
      alert(`Informe um numero inteiro entre ${minimo} e ${maximo}.`);
    } else {
      alert('Responda somente com s (sim) ou n (nao).');
    }
  }
}

function estoqueBaixo(quantidade) {
  return quantidade < 5;
}

function classificarVinho(safra) {
  const idade = ANO_ATUAL - safra;

  // As faixas adotadas sao: ate 3 anos, ate 10 anos e acima de 10 anos.
  if (idade <= 3) {
    return 'jovem';
  }

  if (idade <= 10) {
    return 'amadurecido';
  }

  return 'antigo';
}

function guardarVinho(numero, nome, safra, estoque, classificacao) {
  switch (numero) {
    case 1: nome1 = nome; safra1 = safra; estoque1 = estoque; classificacao1 = classificacao; break;
    case 2: nome2 = nome; safra2 = safra; estoque2 = estoque; classificacao2 = classificacao; break;
    case 3: nome3 = nome; safra3 = safra; estoque3 = estoque; classificacao3 = classificacao; break;
    case 4: nome4 = nome; safra4 = safra; estoque4 = estoque; classificacao4 = classificacao; break;
    case 5: nome5 = nome; safra5 = safra; estoque5 = estoque; classificacao5 = classificacao; break;
    case 6: nome6 = nome; safra6 = safra; estoque6 = estoque; classificacao6 = classificacao; break;
    case 7: nome7 = nome; safra7 = safra; estoque7 = estoque; classificacao7 = classificacao; break;
    case 8: nome8 = nome; safra8 = safra; estoque8 = estoque; classificacao8 = classificacao; break;
    case 9: nome9 = nome; safra9 = safra; estoque9 = estoque; classificacao9 = classificacao; break;
    case 10: nome10 = nome; safra10 = safra; estoque10 = estoque; classificacao10 = classificacao; break;
    case 11: nome11 = nome; safra11 = safra; estoque11 = estoque; classificacao11 = classificacao; break;
    case 12: nome12 = nome; safra12 = safra; estoque12 = estoque; classificacao12 = classificacao; break;
    case 13: nome13 = nome; safra13 = safra; estoque13 = estoque; classificacao13 = classificacao; break;
    case 14: nome14 = nome; safra14 = safra; estoque14 = estoque; classificacao14 = classificacao; break;
    case 15: nome15 = nome; safra15 = safra; estoque15 = estoque; classificacao15 = classificacao; break;
    case 16: nome16 = nome; safra16 = safra; estoque16 = estoque; classificacao16 = classificacao; break;
    case 17: nome17 = nome; safra17 = safra; estoque17 = estoque; classificacao17 = classificacao; break;
    case 18: nome18 = nome; safra18 = safra; estoque18 = estoque; classificacao18 = classificacao; break;
    case 19: nome19 = nome; safra19 = safra; estoque19 = estoque; classificacao19 = classificacao; break;
    case 20: nome20 = nome; safra20 = safra; estoque20 = estoque; classificacao20 = classificacao; break;
  }
}

function mostrarDados(numero, nome, safra, estoque, classificacao) {
  const linha = `${numero}. ${nome} | Safra: ${safra} | Estoque: ${estoque} | Classificacao: ${classificacao}`;
  console.log(linha);

  const campoRegistros = document.getElementById('wine-records');
  const contadorRegistros = document.getElementById('records-count');
  campoRegistros.value += `${linha}\n`;
  contadorRegistros.textContent = `${numero} ${numero === 1 ? 'registro' : 'registros'}`;

  let aviso = `Vinho cadastrado com sucesso!\n\n${linha}`;
  if (estoqueBaixo(estoque)) {
    aviso += `\n\nAtencao: o estoque de ${nome} esta baixo (${estoque} unidade(s)).`;
  }
  alert(aviso);
}

// Limpa a area de registros para que cada sessao recomece do vinho 1.
function limparRegistros() {
  document.getElementById('wine-records').value = '';
  document.getElementById('records-count').textContent = '0 registros';
  preencherResumo(0, '–', 0, 0, 0, 0);
}

function atualizarStatus(mensagem) {
  document.getElementById('status-message').textContent = mensagem;
}
// Escreve os numeros do resumo na secao "Resumo da adega".
function preencherResumo(totalEstoque, maisAntigo, jovens, amadurecidos, antigos, estoqueBaixoTotal) {
  document.getElementById('total-estoque').textContent = totalEstoque;
  document.getElementById('mais-antigo').textContent = maisAntigo;
  document.getElementById('por-categoria').textContent = `${jovens} / ${amadurecidos} / ${antigos}`;
  document.getElementById('estoque-baixo').textContent = estoqueBaixoTotal;
}

// Botao "Limpar lista": apaga os registros e zera o resumo.
function limparLista() {
  limparRegistros();
  document.getElementById('clear-button').disabled = true;
  atualizarStatus('Lista limpa. Aguardando inicio de uma nova sessao.');
}

function iniciarCadastro() {
  let totalCadastros = 0;
  let totalEstoqueBaixo = 0;
  let safraMaisAntiga = ANO_ATUAL + 1;
  let nomeSafraMaisAntiga = '';
  let continuar = true;
  let cancelado = false;
  let totalEstoque = 0;
  let totalJovens = 0;
  let totalAmadurecidos = 0;
  let totalAntigos = 0;


  limparRegistros();
  atualizarStatus('Sessao em andamento. Aguardando os dados do primeiro vinho.');

  while (continuar && totalCadastros < LIMITE_CADASTROS) {
    const nome = solicitarEntrada('Qual e o nome do vinho?', 'texto');
    if (nome === null) { cancelado = true; break; }

    const safra = solicitarEntrada(`Qual e o ano da safra? (1900 a ${ANO_ATUAL})`, 'numero', 1900, ANO_ATUAL);
    if (safra === null) { cancelado = true; break; }

    const estoque = solicitarEntrada('Quantas unidades ha no estoque?', 'numero', 0, 99999);
    if (estoque === null) { cancelado = true; break; }

    const classificacao = classificarVinho(safra);
    guardarVinho(totalCadastros + 1, nome, safra, estoque, classificacao);
    totalCadastros += 1;
    totalEstoque += estoque;

    if (classificacao === 'jovem') {
      totalJovens += 1;
    } else if (classificacao === 'amadurecido') {
      totalAmadurecidos += 1;
    } else {
      totalAntigos += 1;
    }

    if (estoqueBaixo(estoque)) {
      totalEstoqueBaixo += 1;
    }

    // A safra mais antiga e atualizada manualmente durante cada iteracao.
    if (safra < safraMaisAntiga) {
      safraMaisAntiga = safra;
      nomeSafraMaisAntiga = nome;
    }

    mostrarDados(totalCadastros, nome, safra, estoque, classificacao);
    atualizarStatus(`${totalCadastros} de ${LIMITE_CADASTROS} vinho(s) cadastrado(s) nesta sessao.`);

    if (totalCadastros === LIMITE_CADASTROS) {
      break;
    }

    const resposta = solicitarEntrada('Deseja cadastrar outro vinho? (s/n)', 'continuar');
    if (resposta === null) { cancelado = true; break; }
    continuar = resposta.toLowerCase() === 's';
  }

  if (cancelado) {
    alert('Cadastro interrompido. O resumo considera os vinhos ja registrados.');
  }

  exibirResumo(totalCadastros, totalEstoqueBaixo, nomeSafraMaisAntiga, safraMaisAntiga,
    totalEstoque, totalJovens, totalAmadurecidos, totalAntigos);;
}

function exibirResumo(totalCadastros, totalEstoqueBaixo, nomeSafraMaisAntiga, safraMaisAntiga,
  totalEstoque, totalJovens, totalAmadurecidos, totalAntigos) {
  let resumo = `Cadastros realizados: ${totalCadastros}\nTotal em estoque: ${totalEstoque} unidade(s)\nVinhos com estoque baixo: ${totalEstoqueBaixo}`;
  let textoMaisAntigo = '–';

  if (totalCadastros > 0) {
    textoMaisAntigo = `${nomeSafraMaisAntiga} (${safraMaisAntiga})`;
    resumo += `\nSafra mais antiga: ${textoMaisAntigo}`;
    resumo += `\nJovens: ${totalJovens} | Amadurecidos: ${totalAmadurecidos} | Antigos: ${totalAntigos}`;
    console.log(`Resumo: ${totalCadastros} cadastro(s), ${totalEstoque} unidade(s), ${totalEstoqueBaixo} com estoque baixo. Safra mais antiga: ${textoMaisAntigo}.`);
  } else {
    resumo += '\nNenhum vinho foi cadastrado.';
  }

  preencherResumo(totalEstoque, textoMaisAntigo, totalJovens, totalAmadurecidos, totalAntigos, totalEstoqueBaixo);
  document.getElementById('clear-button').disabled = totalCadastros === 0;

  alert(resumo);
  atualizarStatus(totalCadastros > 0 ? `Sessao encerrada: ${totalCadastros} vinho(s) cadastrado(s).` : 'Sessao encerrada sem cadastros.');
}

// Alterna a pagina entre colorida e preto e branco.
function alternarPretoEBranco() {
  const botao = document.getElementById('theme-button');
  const ativo = document.documentElement.classList.toggle('modo-pb');

  botao.textContent = ativo ? 'Colorido' : 'Preto e branco';
  botao.setAttribute('aria-pressed', ativo ? 'true' : 'false');
}

document.getElementById('start-button').addEventListener('click', iniciarCadastro);
document.getElementById('theme-button').addEventListener('click', alternarPretoEBranco);
document.getElementById('clear-button').addEventListener('click', limparLista);

// Carrossel: troca sozinho a cada 4 segundos e tambem pelos botoes.
let fotoAtual = 1;
let timerFotos = setInterval(proximaFoto, 4000);

function mostrarFoto(numero) {
  document.getElementById('foto' + fotoAtual).classList.remove('ativa');
  fotoAtual = numero;
  document.getElementById('foto' + fotoAtual).classList.add('ativa');
  document.getElementById('foto-contador').textContent = '0' + fotoAtual + ' / 03';
}

function proximaFoto() {
  mostrarFoto(fotoAtual === 3 ? 1 : fotoAtual + 1);
}

function fotoAnterior() {
  mostrarFoto(fotoAtual === 1 ? 3 : fotoAtual - 1);
}

// Quando o usuario clica, o contador de 4 segundos recomeca do zero.
function reiniciarTimer() {
  clearInterval(timerFotos);
  timerFotos = setInterval(proximaFoto, 4000);
}

document.getElementById('foto-proxima').addEventListener('click', function () {
  proximaFoto();
  reiniciarTimer();
});

document.getElementById('foto-anterior').addEventListener('click', function () {
  fotoAnterior();
  reiniciarTimer();
});
