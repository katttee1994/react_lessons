function helpful() {
  console.log("I did super job");
}
//when we want to export this we write just helpful without (),
// because if we will write helpful(), we will call the function

function sort() {
  console.log("All sorted!");
}

function sing() {
  console.log("LALALA");
}

// if we export only 1 function we can use: export default helpful;
// but if we want to export lots of then we can use: export { helpful, sort, sing};
export default helpful;
export { sort, sing };
