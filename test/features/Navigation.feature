Feature: Navigation in bot template

Scenario: Iniciar conversación
  When se inicia el bot
  Then bot responde "¡Oye, tú! Soy yo, Rick. Bueno, en realidad soy un bot con toda mi brillantez y sarcasmo empaquetados en líneas de código. Así que prepárate para algunas respuestas científicas y comentarios sarcásticos mientras navegamos por este desquiciado multiverso. ¡Wubba lubba dub dub!" 

Scenario: Seleccionar opción 2 en el menú principal
  When se inicia el bot
  When se ingresa "2"
  Then bot responde "Escribe un ID (1-826) para buscar el personaje correspondiente, o si de repente entras en pánico y no sabes qué hacer, solo escribe {!strong!}menú{!/strong!} y volveremos al menú principal. ¡Vamos, no tenemos todo el día!"

Scenario: Seleccionar opción 2 en el menú principal y escribir el ID 42
  When existe una petición con status code 200 que regresa "mock response"
  When se inicia el bot
  When se ingresa "2"
  When se ingresa "42"
  Then función requestGet responde "mock response" con status code 200