
async function main() {

  //user enter total cost of goods;
  let totalCost = parseFloat(await input("Enter the total cost of goods (we have cameras!): $"));
  while (isNaN(totalCost) || totalCost < 0) {
    output("Invalid amount! Please try again.")
    totalCost = parseFloat(await input("Enter the total cost of goods (we have cameras!): $"));
    }


  //user enters payment amount;
  let cashReceived = parseFloat(await input("Enter your payment: $"));
  while (isNaN(cashReceived) || cashReceived < 0) {
      output("Invalid amount! Please try again.");
      cashReceived = parseFloat(await input("Enter your payment: $"));
    }


  //user enters discount code;
  let discountInput = parseInt(await input("Enter a discount code: "));
  let discountOff = 0

  switch (discountInput) {
    case 0:
      output(`Sorry, no discount was applied.`)
      break;
    case 1:
      discountOff = 0.10;
      output("You received 10% off in savings today!")
      break;
    case 2:
      discountOff = 0.15;
      output("You received 15% off in savings today!")
      break;
    case 3:
      discountOff = 0.25;
      output("You received 25% off in savings today!")
      break;
    case 4:
      discountOff = 0.35;
      output("You received 35% off in savings today!")
      break;
    case 5:
      discountOff = 0.40;
      output("You received 40% off in savings today!")
      break;
    default:
      output("Invalid code. No discount applied.")
      break;
  }


  
  //calculate change to give back to user with discount;
  let finalTotal = totalCost - (totalCost * discountOff)
  let changeBack = cashReceived - finalTotal
  
  if (changeBack >= 0) {
    output(`Your change is $${changeBack.toFixed(2)}!`);
  }
  else {
    output("Insufficient Payment! Please try again.")
  }

}
