'use strict';

// Factory function for pAequor
// Returns object with specimen number and dna
const pAequorFactory = (id, bases) => {
    return {
        specimenNum: id,
        dna: bases,

        mutate() {
            // Randomly selects a base in the dna and changes the
            // current base to a different base.

            // Randomly select a base for mutation
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randomIndex];

            // Randomly select a different base and change
            let dnaBases = ['A', 'T', 'C', 'G'];
            dnaBases.splice(dnaBases.indexOf(currentBase), 1);
            this.dna[randomIndex] = dnaBases[Math.floor(Math.random() * dnaBases.length)];
        },

        compareDNA(comparable) {
            let matchSum = 0;
            for (let idx = 0; idx < this.dna.length; idx++) {
                if (this.dna[idx] === comparable.dna[idx])
                    matchSum++;
            }
            const pctMatch = Math.round(matchSum/this.dna.length*100);
            console.log(`specimen #${this.specimenNum} and specimen #${comparable.specimenNum} have ${pctMatch}% DNA in common.`);
        },

        willLikelySurvive() {
            const cOrGBases = this.dna.filter(base => base === 'C' || base === 'G');
            if (cOrGBases.length / this.dna.length >= 0.6)
                return true;
            
            return false;
        }
    }
};

// imported into factory.js
export { pAequorFactory };