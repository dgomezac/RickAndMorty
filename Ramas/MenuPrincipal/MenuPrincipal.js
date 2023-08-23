import { Navigation, Utils, Yggdrasil, Logger } from '@aurotek/flows-js';
import VerPersonajesRandom from '../VerPersonajesRandom/VerPersonajesRandom';
import BuscarPersonaje from '../BuscarPersonaje/BuscarPersonaje';

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
  const opcion = Yggdrasil.evaluateMenuOption('menuPrincipal', Yggdrasil.getMessageText(), false);
  //Logger.logBot(opcion);
  switch (opcion) {
    case 1:
      //Logger.logBot("Ver personajes random");
      VerPersonajesRandom.menu();
      break;
    case 2:
      //Logger.logBot("Buscar personaje");
      BuscarPersonaje.menu();
      break;
    default:
      //Logger.logBot("Default");
      Yggdrasil.sendMessageText(t('MenuPrincipal.opcionInvalida'), 0);
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
