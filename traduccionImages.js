
const axios = require ('axios');

var link = "https://www.kunr.org/sites/kunr/files/styles/medium/public/202103/rent_sign_creative_commons.jpg"//https://t1.fr.ltmcdn.com/es/posts/3/1/1/frases_de_amor_en_ingles_113_600.jpg"
  traImages(link);






  function traImages( link){
var  datos  =   { "url" : link }  ;
var respuesta2 ;

   
        // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
        var  direccion  =  'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.2/ocr?language=en&detectOrientation=true&model-version=latest' ;
    
            // Con axios realizamos la petición POST
          axios.post (  direccion ,  datos ,  {
                            // Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
                            headers : {
                             // Valor de la llave del servicio ( la llave es la Luis XD )
                            'Ocp-Apim-Subscription-Key' : '9f8839e9bd4e446c8d1bfad49bd6db72' ,
                            // La región donde se encuentra el servicio
                            'Ocp-Apim-Subscription-Region' : 'southcentralus' ,
                            'Content-Type' : 'application / json'  
                             }
                            } )
                            // Aaccedemos al atributo que contiene el texto traducido antes de trasuser va el cal back
                            .then (  respuesta  => {
                                //idiomaIma = respuesta.data.language  ;                               
                                    var j = 0 ;
                                // guardamos la rspesta en un a variable
                                    console.log( respuesta2 = respuesta.data.regions[0].lines);
                                    // llamamos a la funcion imagen, se manda la funcion traIma como calbak
                                    imagen(respuesta2,traIma);
                                   
                                    
                                    
                                    // funcion imagen
                                    function imagen(respuesta2, callback){
                                        //for que controla las lineas
                                        if(j < respuesta2.length){
                                        respuesta = respuesta2[j].words;
                                        // se utiliza el callback para ejecutar la funcin traima
                                        callback(respuesta, ab);
                                        j++;
                                        
                                        imagen(respuesta2,traIma);
                                        }else{
                                            console.log("ESTE ES EL TEXTO  Y SU TRADUCCION ES LA SIGUIENTE:");
                                        };
                                        };
                                    //console.log ( respuesta.data.regions[0].lines[0].words)// respregions[0].lines[0].words[2].text                             })
                                     // cachamos el error en caso de haberlo*/
                                    }).catch (  error  =>  console.log (  error  ) ) ;
                                    // superciclo
                                    
                                 
                                           
                                       
                                    };
                                    function traIma ( respuesta, callback ){                                 
                                        var respuestaPalabra =  [];
                                        var traduccion;
                                          
                                           for(i = 0 ; i < respuesta.length ; i++){
                                           respuestaPalabra[i] =  respuesta[i].text ;                                 
       
                                           var  respuestaFinal = respuestaPalabra.join(" ");
                                           
                                           
                                           
                                           
                                           } 
                                           console.log( respuestaFinal);
                                             
                                           callback(respuestaFinal);
                                           // el callback imprime la traduccion
                                        }      
                                    // funcion final
                                    function ab(respuestaFinal){
                
                
                                        var datos =  [ { "Text" : respuestaFinal } ] ;
                               // Guardamos la dirección del aa servicio (endpoint, punto de acceso) en una variable
                                        var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es' ;
               
                                // Con axios realizamos la petición POST
               
                               
                                        axios.post (  direccion ,  datos  , {
                                // Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
                                        headers : {
                                    // Valor de la llave del servicio ( la llave es la Luis XD )
                                    'Ocp-Apim-Subscription-Key' : '58f9f4075c9c46bca61a78cfc71a45b6' ,
                                    // La región donde se encuentra el servicio
                                    'Ocp-Apim-Subscription-Region' : 'southcentralus' ,
                                    'Content-Type' : 'application / json'  
                                    }
                                    } )
                                    // Accedemos al atributo que contiene el texto traducido
                                    .then (  respuesta  =>   {  console.log(respuesta.data[0].translations[0].text);
                                       
                                    
                                   
                                    //console.log("TRADUCCION: " + traduccion);
                                    
                                   }) .catch (  error  =>  console.log (  error.data  ) ) ;
                                    
                                }   
                                    

                
            ;
            //FIN FUNCIOON TRADUCCION DE IMAGENES

            
           
                
                

                            
            