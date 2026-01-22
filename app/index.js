try {
    // 1. Log de Início
    console.log(JSON.stringify({ 
        timestamp: new Date().toISOString(), 
        level: "INFO", 
        message: "O sistema está ligando..." 
    }));

    const amount = Number(process.env.AMOUNT) || 0;
    const currency = process.env.CURRENCY;

    if (!currency) {
        throw new Error("Variável CURRENCY não foi encontrada!");
    }

    // 2. Log de Sucesso (Formulário preenchido)
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        level: "INFO",
        message: "Pagamento processado com sucesso",
        data: { valor: amount, moeda: currency }
    }));

} catch (error) {
    // 3. Log de Erro (Caso algo falhe)
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        level: "ERROR",
        message: "Falha no pagamento",
        detalhes: error.message
    }));
}