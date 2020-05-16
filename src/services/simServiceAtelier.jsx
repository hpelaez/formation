import * as categoriesAPI from "./simServiceCategorie";

const ateliers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    titre: "React",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
    placeDisponible: 7,
    prix: 20,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    titre: "Angular",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
    placeDisponible: 3,
    prix: 25,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    titre: "Java",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
    placeDisponible: 10,
    prix: 15,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    titre: "Cisco",
    categorie: { _id: "5b21ca3eeb7f6fbccd471825", nom: "Réseaux" },
    placeDisponible: 5,
    prix: 17,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    titre: "TCP/IP",
    categorie: { _id: "5b21ca3eeb7f6fbccd471825", nom: "Réseaux" },
    placeDisponible: 6,
    prix: 18,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    titre: "Node",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
    placeDisponible: 8,
    prix: 22,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181c",
    titre: "MySQL",
    categorie: { _id: "5b21ca3eeb7f6fbccd471820", nom: "Base de données" },
    placeDisponible: 9,
    prix: 30,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181d",
    titre: "Oracle",
    categorie: { _id: "5b21ca3eeb7f6fbccd471820", nom: "Base de données" },
    placeDisponible: 2,
    prix: 27,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    titre: "Android",
    categorie: { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
    placeDisponible: 1,
    prix: 19,
  },
];

export function getAteliers() {
  return ateliers;
}

export function getAtelier(id) {
  return ateliers.find((a) => a._id === id);
}

export function saveAtelier(atelier) {
  let newAtelier = ateliers.find((a) => a._id === atelier._id) || {};
  newAtelier.name = atelier.name;
  newAtelier.categorie = categoriesAPI.categories.find(
    (c) => c._id === atelier.categorieId
  );
  newAtelier.placeDisponible = atelier.placeDisponible;
  newAtelier.prix = atelier.prix;

  if (!newAtelier._id) {
    newAtelier._id = Date.now();
    ateliers.push(newAtelier);
  }

  return newAtelier;
}

export function deleteAtelier(id) {
  let atelier = ateliers.find((m) => m._id === id);
  ateliers.splice(ateliers.indexOf(atelier), 1);
  return atelier;
}
