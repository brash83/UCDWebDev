function sumOfOddIntegers(N) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += (2 * i + 1); 
    }
    console.log(sum);
}