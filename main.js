const array1 = [1,2,3];
array1[1] = 22;

console.log(array1);


const array2 = ['John', 'Massie', 'Array'];
array2[3] = 'Poison';
console.log(array2);

const array3 = [1,2,3,4,5];

for(let numbers of array3) {
    numbers+=
    console.log(numbers);
}

const array4 = ['lean', 'locomotive', 'art', 'jeffkiller', 'minepoc'];

for (let objects of array4) {
    if (objects.length >= 5) {
        console.log(objects);
    }
}

const array5 = [123, 365, 1234, 6457, 3268, 1345, 978, 90213, 1236, 5];

const maxNumber = Math.max(...array5);
console.log(maxNumber);

const array6 = [12,36,55,10,3,167,100,98,59,11];

for(let numbers of array6) {
    if (numbers % 2 == 0) {
        console.log(numbers)
    }
}
