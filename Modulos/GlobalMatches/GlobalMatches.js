import { Yggdrasil, Utils } from '@aurotek/flows-js';
import MenuPrincipal from '../../Ramas/MenuPrincipal/MenuPrincipal'

const t = Utils.getText;

const match = () => {
  const palabrasClave = {
    menu: MenuPrincipal.menu,
    adios: MenuPrincipal.finMenu
  };

  const mensaje = Yggdrasil.getMessageClean();

  if (mensaje in palabrasClave) {
    const funcion = palabrasClave[mensaje];
    funcion();
    return false;
  }

  return true;
};

export default {
  match,
};
