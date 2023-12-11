let arr = [];

let arr1 = {
  name: 'Christiana',
  surname: 'Osedi',
  middlename: 'Eleojo'
};

function guessName () {
  if (arr1.name === 'Christiana') {
    arr.push(arr1.name);
    arr.push(arr1.surname);
    console.log(arr); 
  } else {
    console.log('Please try again');
  }
}

guessName();

