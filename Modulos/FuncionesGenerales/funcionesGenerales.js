// @ts-nocheck
import { Utils, Yggdrasil, Memory, Navigation } from '@aurotek/flows-js';

const t = Utils.getText;

const opcionInvalida = message => {
  Memory.setUserVar('intentos', Memory.getUserVar('intentos') + 1)
  const intentos = Memory.getUserVar('intentos');
  if (intentos < 3) {
    Yggdrasil.sendMessageText(message, 1);
  }
  else {
    Yggdrasil.sendMessageText(t('MensajesGenerales.intentosAgotados'));
    Navigation.setIdleFunction('finish', 3);
  }
}

export default {
    opcionInvalida
}