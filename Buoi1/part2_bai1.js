const Dolphins = [97, 112, 101]
const Koalas = [109, 95, 123]

const calcAverage = (listCores) => {
    return listCores.reduce((a, b) => a + b, 0) / 3;
}

const avgDolphins = calcAverage(Dolphins);
const avgKoalas = calcAverage(Koalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(avgDolphins, avgKoalas);