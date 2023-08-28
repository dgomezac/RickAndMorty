import {
  Yggdrasil, Utils, Navigation, Memory, Env,
} from '@aurotek/flows-js';
import env from './env';
import GlobalMatches from './Modulos/GlobalMatches/GlobalMatches';
import MenuPrincipal from './Ramas/MenuPrincipal/MenuPrincipal'; 
import VerPersonajesRandom from './Ramas/VerPersonajesRandom/VerPersonajesRandom';
import BuscarPersonaje from './Ramas/BuscarPersonaje/BuscarPersonaje';

const t = Utils.getText;

const start = () => {
  Env.init(env);
  Memory.setUserVar('intentos', 0);
  Yggdrasil.sendMessageText(t('Inicio.saludo'), 0);
  Yggdrasil.sendMessageText(t('Inicio.aviso'), 1);
  MenuPrincipal.menu();
};

const cierreConversacion = () => {
  Navigation.setTerminated('finish', 0);
};

const messageReceived = () => GlobalMatches.match();

const eventReceived = () => {
  // This is intentional
};

const finish = () => {
  // This is intentional
};

const commandReceived = () => {
  Memory.setCommandResponse(undefined, undefined, {});
};

export {
  start,
  cierreConversacion,
  messageReceived,
  eventReceived,
  finish,
  commandReceived,
  Navigation,
  Memory,
  MenuPrincipal,
  VerPersonajesRandom,
  BuscarPersonaje,
};