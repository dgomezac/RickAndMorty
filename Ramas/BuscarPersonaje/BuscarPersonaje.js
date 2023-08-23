import { Navigation, Utils, Yggdrasil, Logger } from '@aurotek/flows-js';
import InfoPersonaje from '../InfoPersonaje/InfoPersonaje';
import Api from '../../Api/Api';

const t = Utils.getText;

const menu = (delay = 0, primeraVez = true) => {
  Yggdrasil.sendMessageText(primeraVez ? t('BuscarPersonaje.mensaje') : t('BuscarPersonaje.mensajeAlterno'), delay);
  Navigation.setNextFunction('BuscarPersonaje.obtenerRespuesta');
};

const obtenerRespuesta = () => {
  const id = Yggdrasil.getMessageText();
  //Logger.logBot(id);
  const info = Api.obtenerDatos(id);
  if (info) {
    InfoPersonaje.mostrarInfo(info);
    menu(5, false);
  }
};

export default {
  menu,
  obtenerRespuesta,
};
