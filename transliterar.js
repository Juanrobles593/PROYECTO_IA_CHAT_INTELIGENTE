const prompt = require ('prompt-sync')();
const axios = require ('axios');

/*

   TRADUCCION Y TRANSLITERACION



var texto1 = "hola";
var idiomaTraducir =   'th'   ;
var idioma2 =  'latn'      ;
var tranliteracion = "";

var  datos  =  [ { "Text" : texto1 } ] ;

var traUserEs;    
        // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
        var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + idiomaTraducir + '&toScript=latn'  ;
    
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
                            // Aaccedemos al atributo que contiene el texto traducido antes de trasuser va el cal back
                            .then (  respuesta  => {
                                 tranliteracion = respuesta.data[0].translations[0].transliteration.text;
                                 var traduccion =  respuesta.data[0].translations[0].text;
                                 console.log("LA TRADUCCION ES: "+ traduccion);
                                  console.log ( "LA TRANSLITERACION ES: " + tranliteracion  );
                            })
                            // cachamos el error en caso de haberlo
                            .catch (  error  =>  console.log (  error  ) ) ;
                            */
                   // TRANSLITERAR
                            var texto1 = "สวัสดี";
                            //var idiomaTraducir =   'th'   ;
                            var idioma2 =  'latn'      ;
                            var tranliteracion = "";
                            
                            var  datos  =  [ { "Text" : texto1 } ] ;
                            
                            var traUserEs;    
                                    // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
                                    var  direccion  =  'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=th&fromScript=thai&toScript=latn'  
                                
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
                                                        // Aaccedemos al atributo que contiene el texto traducido antes de trasuser va el cal back
                                                        .then (  respuesta  => {
                                                             tranliteracion = respuesta.data[0].text;                                                          
                                                              console.log ( "LA TRANSLITERACION ES: " + tranliteracion  );
                                                        })
                                                        // cachamos el error en caso de haberlo
                                                        .catch (  error  =>  console.log (  error  ) ) ;