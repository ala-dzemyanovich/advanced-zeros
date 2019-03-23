module.exports = function getZerosCount(number, base) {
    let simpleFactors = [];
    let baseSystem = base;
    let count = 1;
    let result = [];

    while (baseSystem % 2 === 0) {
        simpleFactors.push(2);
        baseSystem /= 2;
    }
    let sqrtNum = Math.sqrt(baseSystem);
    for (let i = 3; i <= sqrtNum; i++) {
        while (baseSystem % i === 0) {
            simpleFactors.push(i);
            baseSystem /= i;
        }
    }
    if (baseSystem > 2) {
        simpleFactors.push(baseSystem);
    }
    let power = 1;
    let sum = 0;
    for (let i = 0; i < simpleFactors.length; i++) {
        if (i < simpleFactors.length - 1 && simpleFactors[i] === simpleFactors[i+1]) {
            count++;
        }
        else count = 1;
        while (Math.floor(number / Math.pow(simpleFactors[i], power)) >= 1) {
            sum += Math.floor(number / Math.pow(simpleFactors[i], power));
            power++;
        }
        sum = Math.floor(sum / count);
        result.push(sum);
        sum = 0;
        power = 1;
    }
    console.log(simpleFactors);
    console.log(sum);
    console.log(result);
    return Math.min.apply(null, result);
}

