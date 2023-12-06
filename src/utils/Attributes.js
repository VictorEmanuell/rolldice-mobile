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

export const attributeName = (attribute) => {
  switch (attribute) {
    case "FOR":
      return "Força";
    case "DES":
      return "Destreza";
    case "CON":
      return "Constituição";
    case "INT":
      return "Inteligência";
    case "SAB":
      return "Sabedoria";
    case "CAR":
      return "Carisma";
    default:
      return attribute;
  }
};