import { autoBindSteps, loadFeatures } from 'jest-cucumber';

const feature = loadFeatures('./features/Navigation.feature');
/* eslint-disable */
const sinon = require('sinon');
const testing = require('../../../test/testing');
const context = require('../dist/bundleVars');
/* eslint-enable */

// Set contexts to test
testing.setContext(context);
const bot = context.BotJS;

const steps = ({
  given, when, then,
}) => {
  let doGetRequestMock;

  when('se inicia el bot', () => {
    testing.initializeBot();
    bot.start();
  });

  when(/^se ingresa "(.*)"$/, (text) => {
    testing.type(text);
  });

  when(/^existe una petición con status code (\d+) que regresa "(.*)"$/, (code, response) => {
    doGetRequestMock = sinon.stub(context.ScriptFunctions, 'doGetRequest').returns(`{"status_code":${code},"content":"${response}"}`);
  });

  then(/^bot responde "(.*)"$/, (message) => {
    expect(testing.getMessageByPosition(1)).toBe(message);
  });

  then(/^función requestGet responde "(.*)" con status code (\d+)$/, (message, code) => {
    expect(JSON.parse(doGetRequestMock.returnValues[0])).toEqual({ status_code: +code, content: message });
    expect(doGetRequestMock.calledOnce).toBe(true);
    expect(doGetRequestMock.calledWith('https://rickandmortyapi.com/api/character/42')).toBe(true);
  });
};

autoBindSteps(feature, [steps]);
