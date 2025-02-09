const numbers = [1, 2, 3, 4, 5];

let index = 0;

let sum = 0;

while (index < numbers.length) {
    sum += numbers[index];
    index = index + 1;
}


numbers.push(6);

console.log(numbers);
console.log(sum);