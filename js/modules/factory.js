'use strict';

import { mockUpStrand } from "./dna.js";
import { pAequorFactory } from "./paequor.js";

// Factory function for generating pAequor
function factory() {
    // Generate 30 instances of pAequor that will survive
    let viableSpecimens = [];
    let viabilityCount = 0;
    let newSpecimen;
    while (viabilityCount < 30) {
      newSpecimen = pAequorFactory(viabilityCount + 1, mockUpStrand());

      if (newSpecimen.willLikelySurvive()) {
        viableSpecimens.push(newSpecimen);
        viabilityCount++;
      }
    }
  
    let specimens = [];

    viableSpecimens.forEach(e => specimens.push(`Strand: ${e.dna}\ 
        Will survive? ${e.willLikelySurvive()}`));

    return specimens;
  };

  // imported into dom-functions.js
export { factory };