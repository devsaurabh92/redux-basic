export function setTechnology (text) {
  console.log(text);
  return {
     type: "SET_TECHNOLOGY",
     text: text
   }
}
