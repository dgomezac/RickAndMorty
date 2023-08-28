import { Navigation, Utils, Yggdrasil, Logger, Memory } from '@aurotek/flows-js';
import InfoPersonaje from '../InfoPersonaje/InfoPersonaje';
import Api from '../../Api/Api';
import FuncionesGenerales from '../../Modulos/FuncionesGenerales/funcionesGenerales';

const t = Utils.getText;

// Get a random integer between two values, inclusive
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const menu = (delay = 0, primeraVez = true) => {
  const infoPersonajes = [];
  for (let i = 0; i < 5; i++) {
    const id = getRandomInt(1, 826);
    const info = Api.obtenerDatos(id);
    if (info) {
      infoPersonajes.push(info);
    }
  }

  Memory.setUserVar('INFO_PERSONAJES', infoPersonajes);

  Yggdrasil.showMenu(
    'menuVerPersonajesRandom',
    primeraVez ? t('VerPersonajesRandom.mensaje') : t('VerPersonajesRandom.mensajeAlterno'),
    infoPersonajes.map(info => info.name.length > 20 ? info.name.substring(0, 17) + "..." : info.name),
    undefined,
    undefined,
    undefined,
    delay
  );

  Navigation.setNextFunction('VerPersonajesRandom.validaMenu');
};

const validaMenu = () => {
  const infoPersonajes = Memory.getUserVar('INFO_PERSONAJES');
  const opcion = Yggdrasil.evaluateMenuOption('menuVerPersonajesRandom', Yggdrasil.getMessageText(), false);
  //Logger.logBot(opcion);
  if (opcion >= 1 && opcion <= 5) {
    Memory.setUserVar('intentos', 0);
    InfoPersonaje.mostrarInfo(infoPersonajes[opcion - 1]);
    menu(5, false);
  }
  else {
    FuncionesGenerales.opcionInvalida(t('VerPersonajesRandom.opcionInvalida'));
  }
};

export default {
  menu,
  validaMenu,
};
