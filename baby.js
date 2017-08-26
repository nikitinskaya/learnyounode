var sum = process.argv.slice([2]);
sum = sum.reduce(function(prev, cur) {
    return +prev + +cur;
});
console.log(sum);