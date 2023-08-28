import { Navigation, Utils, Yggdrasil, Memory } from '@aurotek/flows-js';
import InfoPersonaje from '../InfoPersonaje/InfoPersonaje';
import FuncionesGenerales from '../../Modulos/FuncionesGenerales/funcionesGenerales';
import Api from '../../Api/Api';

const t = Utils.getText;

const menu = (delay = 0, primeraVez = true) => {
  Yggdrasil.sendMessageText(primeraVez ? t('BuscarPersonaje.mensaje') : t('BuscarPersonaje.mensajeAlterno'), delay);
  Navigation.setNextFunction('BuscarPersonaje.obtenerRespuesta');
};

const obtenerRespuesta = () => {
  const id = parseInt(Yggdrasil.getMessageText(), 10);
  if (Number.isInteger(id) && id >= 1 && id <= 826) {
    Memory.setUserVar('intentos', 0);
    const info = Api.obtenerDatos(id);
    if (info) {
      InfoPersonaje.mostrarInfo(info);
      menu(5, false);
    }
  }
  else {
    FuncionesGenerales.opcionInvalida(t('BuscarPersonaje.opcionInvalida'));
  }
};

export default {
  menu,
  obtenerRespuesta,
};
