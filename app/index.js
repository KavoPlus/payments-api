// Payment Data (Variables)
const customerName = "Braia SRE";
const product = "Cloud Course";
const amount = 150.00    ;
const currency = "USD" ;
const isSucces = true;

console.log("--- Payment Processing System ---");
console.log(`Customer: ${customerName}`);
console.log(`Purchased: ${product}`);
console.log(`Amount: ${amount} ${currency}`);

if (isSucces){ 
    console.log ("Status : PAYMENT APPROVED🚀")
 } else {
    console.log("Status: PAYMENT FAILED! ❌");
}

console.log("---------------------------------");