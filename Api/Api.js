import { Yggdrasil, HTTP, Navigation } from '@aurotek/flows-js';

const obtenerDatos = id => {
  try {
    const response = HTTP.requestGet(`https://rickandmortyapi.com/api/character/${id}`);

    if (response.status_code === 200) {
      const {
        content: { name, status, species, location: { name: location_name }, image }
      } = response;
      return { id, name, status, species, location_name, image };
    }
    else {
      Yggdrasil.sendMessageText(`Status code: ${response.status_code}. El bot finalizará.`, 2);
      Navigation.setIdleFunction('cierreConversacion', 3);
    }
  }
  catch (error) {
    Yggdrasil.sendMessageText(`ERROR API: ${error}. El bot finalizará.`, 2);
    Navigation.setIdleFunction('cierreConversacion', 3);
  }
}

export default {
  obtenerDatos
};

/*
const obtenerDatos = id => {
  try {
    const response = HTTP.requestGet(`https://rickandmortyapi.com/api/character/${id}`);

    if (response.status_code >= 100 && response.status_code < 200) {
      Yggdrasil.sendMessageText('AVISO: El servidor ha recibido los encabezados de la solicitud y el cliente puede continuar enviando el cuerpo de la solicitud.', 1);
    }
    else if (response.status_code >= 200 && response.status_code < 300) {
      //Yggdrasil.sendMessageText('AVISO: La solicitud fue exitosa y el cuerpo de la respuesta contiene los datos solicitados.', 1);
    }
    else if (response.status_code >= 300 && response.status_code < 400) {
      Yggdrasil.sendMessageText('AVISO: El recurso solicitado se ha movido temporal o permanentemente a otra ubicación.', 1);
    }
    else if (response.status_code >= 400 && response.status_code < 500) {
      Yggdrasil.sendMessageText('ERROR: La solicitud contenía sintaxis inválida o faltaba información requerida.', 1);
    }
    else if (response.status_code >= 500 && response.status_code < 600) {
      Yggdrasil.sendMessageText('ERROR: El servidor encontró un error al procesar la solicitud.', 1);
    }
    else {
      Yggdrasil.sendMessageText('ERROR: Se devolvió un status code desconocido en la respuesta.', 1);
    }

    if (response.status_code < 200 || response.status_code >= 300) {
      Yggdrasil.sendMessageText(`Status code: ${response.status_code}. El bot finalizará.`, 2);
      Navigation.setIdleFunction('cierreConversacion', 3);
      return;
    }

    const {
      content: { name, status, species, location: { name: location_name }, image }
    } = response;

    //Logger.logBot(`Response obtenerDatos: ${status_code}`);

    return { id, name, status, species, location_name, image };
  } catch (error) {
    Yggdrasil.sendMessageText(`ERROR API: ${error}. El bot finalizará.`, 2);
    Navigation.setIdleFunction('cierreConversacion', 3);
  }
};
*/