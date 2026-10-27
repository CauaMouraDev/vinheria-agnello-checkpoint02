# vinheria-agnello-checkpoint02

## Vinheria Agnello | Checkpoint 02

Projeto acadêmico para praticar funcoes, validacao, escopo de variaveis e iteracoes em JavaScript. A interface inicia uma sessao de cadastro por `prompt()` e apresenta avisos e resultados por `alert()`; os registros detalhados tambem sao enviados ao console do navegador.

### O que foi implementado

- Cadastro sequencial de ate 20 vinhos por sessao, com opcao de continuar ou encerrar.
- Validacao reutilizavel para nome, ano da safra, estoque e resposta de continuacao.
- Alerta para estoque baixo, definido como menos de 5 unidades.
- Classificacao calculada em relacao ao ano configurado no script: jovem (ate 3 anos), amadurecido (de 4 a 10 anos) ou antigo (mais de 10 anos).
- Resumo com total de cadastros, total de vinhos com estoque baixo e vinho de safra mais antiga.
- Campo somente leitura na pagina que acumula os dados de cada vinho cadastrado durante a sessao.
- Dados armazenados em variaveis numeradas individuais, sem arrays ou objetos, conforme o requisito do checkpoint.
- Layout responsivo com HTML e CSS.

O ano de referencia esta definido como `2026` no inicio de `src/js/script.js`. Atualize esse valor quando necessario. O limite de 20 cadastros existe porque os registros precisam ser mantidos em variaveis individuais numeradas.

### Integrantes

- Cauã Almeida Moura
- Felipe Fontes
- Thiago Santos

### Links de entrega

- Repositorio: https://github.com/CauaMouraDev/vinheria-agnello-checkpoint02
- GitHub Pages: https://cauamouradev.github.io/vinheria-agnello-checkpoint02/

### Como executar

Abra `index.html` em um navegador e selecione **Iniciar cadastro**. As respostas sao solicitadas em caixas de dialogo. Para conferir os detalhes, abra o console do navegador.

### Estrutura

```text
vinheria-agnello-checkpoint02/
|-- index.html
|-- README.md
`-- src/
	|-- css/
	|   `-- style.css
	|-- js/
	|   `-- script.js
	`-- assets/
		`-- imgs/
```
