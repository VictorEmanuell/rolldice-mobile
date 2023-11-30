export const attributeKey = (attribute) => {
  switch (attribute) {
    case "FOR":
      return "strength";
    case "DES":
      return "dexterity";
    case "CON":
      return "constitution";
    case "INT":
      return "intelligence";
    case "SAB":
      return "wisdom";
    case "CAR":
      return "charisma";
  }
};
