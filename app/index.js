try {
    console.log("--- Payment System Status: BOOTING ---");

    // Usamos o Number() para garantir que o texto "200" vire o número 200
const amount = Number(process.env.AMOUNT) || 0;
    
    // Agora o código busca 'CURRENCY' do ambiente. 
    // Se não encontrar, ele falha (o que vai disparar nosso Catch)
    const currency = process.env.CURRENCY; 

    if (!currency) {
        throw new Error("Environment variable 'CURRENCY' is missing!");
    }

    console.log(`Processing payment of: ${amount} ${currency}`);

} catch (error) {
    console.log("[SRE ALERT] The system caught an error!");
    console.log(`Error details: ${error.message}`);
} finally {
    console.log("Cleaning up resources... System remains online.");
}