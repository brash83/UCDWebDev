function multiplyArray(numbers) {
    let product = 1;
    for (let number of numbers) {
        product *= number;
    }
    return product;
}
