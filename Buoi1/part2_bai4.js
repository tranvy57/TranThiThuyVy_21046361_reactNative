// Assuming calcTip function is already defined as follows:
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

// 3. Use a for loop to perform the 10 calculations
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// Output the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);