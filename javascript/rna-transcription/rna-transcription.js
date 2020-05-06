export const toRna = (DNA) => {
  let RNA = "";
  for (let i of DNA) {
    RNA += pairs[i];
  }
  return RNA;
};
const pairs = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
