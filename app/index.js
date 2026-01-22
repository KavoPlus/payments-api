const http = require('http'); // 1. Carrega a ferramenta de rede

// 2. Cria o servidor (o interfone)
const server = http.createServer((req, res) => {
    // Esse bloco roda toda vez que alguém acessar a API
    console.log(JSON.stringify({ 
        timestamp: new Date().toISOString(), 
        level: "INFO", 
        message: "Alguém chamou a API!" 
    }));

    res.end("Pagamento recebido!"); // Resposta que aparece no navegador
});

// 3. Diz em qual "porta" o servidor vai ficar ouvindo
server.listen(3000, () => {
    console.log(JSON.stringify({ 
        level: "INFO", 
        message: "Servidor ligado na porta 3000" 
    }));
});