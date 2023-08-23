import { Utils, Yggdrasil } from '@aurotek/flows-js';

const t = Utils.getText;

const mostrarInfo = info => {
  const num = info.id % 3;
  switch (num) {
    case 1:
      Yggdrasil.sendMessageText(t('InfoPersonaje.buenaEleccion.uno'), 0);
      break;
    case 2:
      Yggdrasil.sendMessageText(t('InfoPersonaje.buenaEleccion.dos'), 0);
      break;
    default:
      Yggdrasil.sendMessageText(t('InfoPersonaje.buenaEleccion.tres'), 0);
      break;
  }
  Yggdrasil.sendCard(`${info.name}`, 
`{!strong!}${t('InfoPersonaje.id')}:{!/strong!} ${info.id}
{!strong!}${t('InfoPersonaje.estado')}:{!/strong!} ${info.status}
{!strong!}${t('InfoPersonaje.especie')}:{!/strong!} ${info.species}
{!strong!}${t('InfoPersonaje.genero')}:{!/strong!} ${info.gender}
{!strong!}${t('InfoPersonaje.ubicacion')}:{!/strong!} ${info.location_name}`,
  info.image,
  'image/jpg',
  undefined,
  'vertical',
  undefined,
  undefined,
  1
  );
}

export default {
  mostrarInfo
};
