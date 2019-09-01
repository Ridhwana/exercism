export const isPangram = (sentence) => {
  const arr = ALPHABET.split('');
  for(let char of arr) {
    if(!sentence.toLowerCase().includes(char)) {
      return false;
    }
  };

  return true;
};


const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
