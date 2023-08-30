function evenArray(array) {
    let isEvenArray = true;
  
    array.forEach((value) => {
      if (value % 2 !== 0) {
        isEvenArray = false;
        throw new Error('Array contains odd numbers');
      }
    });
  
    if (isEvenArray) {
      console.log('Even Array');
    }
  
    // Empty the array
    array.splice(0, array.length);
  }
  
  const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8, 10];
const array3 = [2, 4, 6, 8, 41];

try {
  evenArray(array1);
} catch (error) {
  console.error("Array includes odd number");
}

try {
  evenArray(array2);
} catch (error) {
  console.error("even array");
}

try {
  evenArray(array3);
} catch (error) {
  console.error("array includes odd numbers");
}
