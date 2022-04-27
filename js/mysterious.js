'use strict';

// button controls for html page
import { toggleHiddenElement } from "./modules/dom-functions.js";

const buttonElement = document.getElementById('generate-button');
const pElement = document.getElementById('generate-p');

// event listener for button click
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});