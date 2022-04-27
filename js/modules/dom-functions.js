'use strict';

// import to generate dna specimens
import { factory } from "./factory.js";

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      // make element appear
      domElement.style.display = 'block';
      
      // generate specimens
      const specimens = factory();

      // print to <p>
      domElement.innerHTML = '';
      specimens.forEach((specimen) => {
        domElement.innerHTML += specimen + '<br>';
      });
    } else {
      domElement.style.display = 'none';
    }
}

// imported into mysterious.js
export { toggleHiddenElement };