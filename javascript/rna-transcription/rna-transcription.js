var DnaTranscriber = function() {
  this.transcription = {
    G: `C`,
    C: `G`,
    T: `A`,
    A: `U`
  };

}

DnaTranscriber.prototype.toRna = function(dna) {

  return dna.split('').map( char => {
    if(this.transcription[char]) {
      return this.transcription[char];
    } else {
      throw Error('Invalid input');
    }
  }).join('');

};


module.exports = DnaTranscriber;

// curious to loog at http://exercism.io/submissions/610d3af8559a40a3ab14545ed1ad4c72
