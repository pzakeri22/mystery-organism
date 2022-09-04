// ------ Starter code for this project ------

//Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single DNA strand comprising 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// ------ My own code for this project ------

/* Factory function, passing in a unique specimen number and DNA strand.
   Returns new pAequor organism containing given specimen number and DNA strand
   Created a "mutate" method for genetic mutation which changes one randomly chosen DNA base to a different base and returns new DNA strand
   Created a "compareDna" method which allows comparison of current organism's DNA to another organism, using their specimen number. 
   Prints message showing % of shared DNA
   Created a "willLikelySurvive" method which checks if current organism has at least 60% of their DNA comprised of "C" or "G" bases, meaning 
   they are more likely to survive. If so, returns true, else returns false.
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const index = Math.floor(Math.random() * 15);
      const origBase = this.dna[index] 
      let newBase = returnRandBase();
      while (origBase === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
      return this.dna;
    },
    compareDna(pAequor) {
      let sharedCount = 0;
      for (let i = 0; i<15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          sharedCount++;
        }
      } 
      const sharedDna = (sharedCount / 15) * 100;
      console.log(`Specimen #1 and specimen #2 have ${sharedDna}% DNA in common.`)
    },
    willLikelySurvive() {
      let cAndGcount = 0;
      for (let i = 0; i<15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cAndGcount++;
        }
      } 
      const cAndGPercent = (cAndGcount / 15) * 100;
      return cAndGPercent >= 60;
    },
    willLikelySurvive2() {
      const survive = this.dna.filter(element => element === 'C' || element === 'G');
      return survive.length / this.dna.length >= 0.6;

    }

  }
}

// Created a function which creates 30 pAequor organisms that are deemed likely to survive

let pAequorCount = 1;
let pAequorArray = [];

  while (pAequorCount <30) {
    let newpAequor = pAequorFactory(pAequorCount,mockUpStrand());
    if (newpAequor.willLikelySurvive() ) {
      pAequorArray.push(newpAequor);
      pAequorCount++;
    }

  }