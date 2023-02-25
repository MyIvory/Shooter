let initialState = [];

let wikiReduser = (state = [], action) => {
  return state;
};
export default wikiReduser;

export const toStrong = (str, ...indexs) => {
  return str.split("/s").map((item, index) => {
    return indexs.includes(index) ? <strong>{item}</strong> : item;
  });
};
export const clickEdit = (e) => {
  console.log("Edit");
  e.stopPropagation();
};
