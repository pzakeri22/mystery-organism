// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



//parisa's code starts here;

// console.log(returnRandBase());
// console.log(mockUpStrand());

// takes number (no two organisms should have the same number).) & array of 15 DNA bases.

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
      //parameter is specimenNum.
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
// console.log(pAequorFactory(13,mockUpStrand()));

let pAequorCount = 1;
let pAequorArray = [];

  while (pAequorCount <30) {
    let newpAequor = pAequorFactory(pAequorCount,mockUpStrand());
    if (newpAequor.willLikelySurvive() ) {
      pAequorArray.push(newpAequor);
      pAequorCount++;
    }

  }


// ex1 = ['A', 'C', 'T', 'G']
// ex2 = ['C', 'A', 'T', 'T']


// objectTest = {
//   specimenNum: 13,
//   dna: ['C','G','C','G','C','G','C','G','C','G','C', 'A', 'T', 'C', 'G'], //mockUpStrand()
//   mutate() {
//     const index = Math.floor(Math.random() * 15);
//     const origBase = this.dna[index] 
//     let newBase = returnRandBase();
//     while (origBase === newBase) {
//       newBase = returnRandBase();
//     }
//     this.dna[index] = newBase;
//     return this.dna;
//   },
//   compareDna(pAequor) {
//     //parameter is specimenNum.
//     let sharedCount;
//     for (let i = 0; i<15; i++) {
//       if (this.dna[i] === pAequor.dna[i]) {
//         sharedCount++;
//       }
//     } 
//     const sharedDna = (sharedCount / 15) * 100;
//     console.log(`Specimen #1 and specimen #2 have ${sharedDna}% DNA in common.`)
//   },
//   willLikelySurvive() {
//     let cAndGcount = 0;
//     for (let i = 0; i<15; i++) {
//       if (this.dna[i] === 'C' || this.dna[i] === 'G') {
//         cAndGcount++;
//       }
//     } 
//     console.log(cAndGcount);
//     const cAndGPercent = (cAndGcount / 15) * 100;
//     return cAndGPercent >= 60;

//   }
// }

//   console.log(objectTest.willLikelySurvive());