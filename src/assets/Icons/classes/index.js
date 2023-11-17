import Arcanista from "./arcanista.png";
import Barbaro from "./barbaro.png";
import Bardo from "./bardo.png";
import Bucaneiro from "./bucaneiro.png";
import Caçador from "./caçador.png";
import Cavaleiro from "./cavaleiro.png";
import Clerigo from "./clerigo.png";
import Druida from "./druida.png";
import Guerreiro from "./guerreiro.png";
import Inventor from "./inventor.png";
import Ladino from "./ladino.png";
import Lutador from "./lutador.png";
import Nobre from "./nobre.png";
import Paladino from "./paladino.png";

export {
  Arcanista,
  Barbaro,
  Bardo,
  Bucaneiro,
  Caçador,
  Cavaleiro,
  Clerigo,
  Druida,
  Guerreiro,
  Inventor,
  Ladino,
  Lutador,
  Nobre,
  Paladino,
};

export function ClassIcon(className) {
  className = className.toLowerCase();

  switch (className) {
    case "arcanista":
      return Arcanista;
    case "barbaro":
      return Barbaro;
    case "bardo":
      return Bardo;
    case "bucaneiro":
      return Bucaneiro;
    case "caçador":
      return Caçador;
    case "cavaleiro":
      return Cavaleiro;
    case "Clerigo":
      return Clerigo;
    case "druida":
      return Druida;
    case "guerreiro":
      return Guerreiro;
    case "inventor":
      return Inventor;
    case "ladino":
      return Ladino;
    case "lutador":
      return Lutador;
    case "nobre":
      return Nobre;
    case "paladino":
      return Paladino;

    default:
      break;
  }
}
