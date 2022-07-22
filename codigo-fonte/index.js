const Express = require('express');

const Aplicativo = new Express();

Aplicativo.get('/', (RequisicaiServidor, RespostaServidor) => RespostaServidor.send("Hello World"))

Aplicativo.listen(1234, () => console.log('Servidor Okay..'))