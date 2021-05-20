/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map()
    let wordArr = this.words
    //console.log(finwords)
    for(let i=0; i<wordArr.length; i++){
      let word = wordArr[i];
      let nextWord = wordArr[i+1] || null;
      if(chains.has(word)){
        chains.get(word).push(nextWord)
      }else{
        chains.set(word, [nextWord])
      }
      this.chains = chains
  }

  }
  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  makeText(numWords = 100) {
    // pick a random key to begin
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    // produce markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }

    return out.join(" ");
  }
  
}

  



module.exports = {
  MarkovMachine,
};