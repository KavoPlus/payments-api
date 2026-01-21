try {
     console.log("--- Payment System Status: BOOTING ---");

        const amount = 150.00;

        console.log(`Processing payment of : ${amount} ${currency}`);
}
catch (error) {

   console.log("[SRE ALERT] The system caught an error!");
    console.log(`Error details: ${error.message}`);
    
} finally {
    console.log("Cleaning up resources... System remains online.");
}

