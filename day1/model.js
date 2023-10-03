function calculateSum(n){
    var sum = 0;
    for(var i=1; i<=n;i++){
        sum = sum + i;
    }
        return sum;
}


module.exports = calculateSum;