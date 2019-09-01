export const isPangram = (sentence) => {
  const arr = ALPHABET.split('');

  // for(let char of arr) {
  //   if(!sentence.toLowerCase().includes(char)) {
  //     return false;
  //   }
  // };
  // return true;

  return arr.every(char => sentence.toLowerCase().includes(char))
};


const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
