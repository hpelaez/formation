import _ from "lodash";

// export function paginer(items, numeroPage, taillePage) {
//   const indexDebut = (numeroPage - 1) * taillePage;
//   return _(items).slice(indexDebut).take(taillePage).value();
// }

const paginer = (items, numeroPage, taillePage) => {
  const indexDebut = (numeroPage - 1) * taillePage;
  return _(items).slice(indexDebut).take(taillePage).value();
};

export default paginer;
