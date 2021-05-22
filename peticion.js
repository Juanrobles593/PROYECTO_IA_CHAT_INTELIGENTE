const prompt = require ('prompt-sync')();
const axios = require ('axios');


var texto1 = "hola"
var idioma = 'en'


var  datos  =  [ { "Text" : texto1 } ] ;
var palabraClave = "HAS SAID: ";
var traUserEs;    
        // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
        var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+ idioma ;
    
            // Con axios realizamos la petición POST
          axios.post (  direccion ,  datos ,  {
                            // Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
                            headers : {
                             // Valor de la llave del servicio ( la llave es la Luis XD )
                            'Ocp-Apim-Subscription-Key' : '58f9f4075c9c46bca61a78cfc71a45b6' ,
                            // La región donde se encuentra el servicio
                            'Ocp-Apim-Subscription-Region' : 'southcentralus' ,
                            'Content-Type' : 'application / json'  
                             }
                            } )
                            // Accedemos al atributo que contiene el texto traducido antes de trasuser va el cal back
                            .then (  respuesta  => {
                                traUserEs = respuesta.data[0].translations[0].text
                                     console.log ( palabraClave + traUserEs );
                            })
                            // cachamos el error en caso de haberlo
                            .catch (  error  =>  console.log (  error  ) ) ;
                                      