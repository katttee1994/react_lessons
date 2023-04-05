// we need to import things from helpers.js. It doesn't metter what we will call it like below (word: helpful)
// this word must be the same as helpful() below. It means that we are importing whatever is exporting in file name
// './helpers'
// we can write there whatever we want. But when we write the name of file where we want to import some things,
// then we need to write it with './somenameoffile'; just like below.
// we use this: import helpful from "./helpers";
// helpful();
//  only if we want to import 1 think, but it should be also only one function in file helpers.js
//  but if we have a lot of funtion and we want to import just 1 then we write import { helpful } from "./helpers";
import helpful { sort, sing } from "./helpers";

// in that case, name below need to be the same as in { helpful }
helpful();
sort();
sing();
