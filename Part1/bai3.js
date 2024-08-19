const Dolphins = {
    score1: 97,
    score2: 112,
    score3: 101
};

const Koalas = {
    score1: 109,
    score2: 95,
    score3: 123
};

const getAverage = (team) => {
    return (team.score1 + team.score2 + team.score3) / 3;
}

const averageDolphins = getAverage(Dolphins);
const averageKoalas = getAverage(Koalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins win with an average score of ${averageDolphins}`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log(`Koalas win with an average score of ${averageKoalas}`);
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log(`It's a draw with both teams having an average score of ${averageDolphins}`);
} else {
    console.log('No team wins the trophy');
}