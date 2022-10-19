import {
  conect
} from './modules/async'

import {
  filter
} from "./modules/filter"

import {
  showMore
} from "./modules/showMore"

import {
  loadElementsGanlder
} from "./modules/clousures"

import {
  exportCallbackFunction
} from "./modules/clousureTwo";



window.addEventListener('load', ()=>{

  // conect();

  filter();

  showMore();

  // loadElementsGanlder();

  exportCallbackFunction();

});



