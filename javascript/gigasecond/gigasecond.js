
export const gigasecond = (date) => {
  let myDate = new Date(date.getTime() + 1000000000000);
  
  return myDate;
};
