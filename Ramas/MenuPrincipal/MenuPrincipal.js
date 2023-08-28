import { Navigation, Utils, Yggdrasil, Memory } from '@aurotek/flows-js';
import VerPersonajesRandom from '../VerPersonajesRandom/VerPersonajesRandom';
import BuscarPersonaje from '../BuscarPersonaje/BuscarPersonaje';
import FuncionesGenerales from '../../Modulos/FuncionesGenerales/funcionesGenerales';

const t = Utils.getText;

const menu = () => {
  Yggdrasil.showMenu(
    'menuPrincipal',
    t('MenuPrincipal.mensaje'),
    [
      t('MenuPrincipal.opcion.uno'),
      t('MenuPrincipal.opcion.dos'),
    ],
    undefined,
    undefined,
    undefined,
    2
  );

  Navigation.setNextFunction('MenuPrincipal.validaMenu');
};

const validaMenu = () => {
  const opc = Yggdrasil.evaluateMenuOption('menuPrincipal', Yggdrasil.getMessageText(), false);
  const nombrePaso = 'USUARIO - Menú Principal';

  switch (opc) {
    case 1:
      Memory.setUserVar('intentos', 0);
      VerPersonajesRandom.menu();
      break;
    case 2:
      Memory.setUserVar('intentos', 0);
      BuscarPersonaje.menu();
      break;
    default:
      FuncionesGenerales.opcionInvalida(t('MenuPrincipal.opcionInvalida'));
      break;
  };
};

const finMenu = () => {
  Yggdrasil.sendMessageText(t('MenuPrincipal.despedida'), 0);
  Navigation.setTerminated('finish', 3);
};

export default {
  menu,
  validaMenu,
  finMenu
};
