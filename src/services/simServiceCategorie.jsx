export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", nom: "Programmation" },
  { _id: "5b21ca3eeb7f6fbccd471820", nom: "Base de données" },
  { _id: "5b21ca3eeb7f6fbccd471825", nom: "Réseaux" }
];

export function getCategories() {
  return categories.filter(g => g);
}
