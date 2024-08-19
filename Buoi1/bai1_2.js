var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;
var markBMI = markMass/(markHeight*markHeight).toFixed(2);
var johnBMI = johnMass/(johnHeight*johnHeight).toFixed(2);
var markHigherBMI = markBMI;
if (markHigherBMI) 
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
    
    


