const prompt = require ('prompt-sync')();
const axios = require ('axios');

// FRASES DE BIENENIDA
console.log( " HOLA, SOY TU ASISTENTE PERSONAL ");
console.log( " ¿EN QUE PUEDO AYUDARTE? ");
// SE PIDE INGRESAR LA PETICION DEL USUARIO QUE SE COMPARARA EN E SWITCH
var ingreso = prompt("");
// TRANSFORMAMOS A MAYUSCULAS PARA REDUCIR EL NUMERO DE CASOS POSIBLES, YA QUE TODOS LOS CASOS ESTARAN EN  MINUSCULAS
ingreso = ingreso.toLowerCase();
// casos de pregunta de información sobre eL NOMBRE DEL PROGRAMA "
var pData =  [  "como te llamas", "como te llamas?" ];
// PAR ACTIVAR EL CHAT INTELIGENTE SE DEBE ESCRIBIR EN CONSOLA "CHAT INTELIGENTE" , NADA AS QUE ESO 
            

switch( ingreso){

    case pData[0]  :
    case pData[1]  :
        console.log(" Me llamo Myqe ");
        break;

    case "chat inteligente":       // CHAT INELIGENTE
        console.log( "ENTRASTE AL MODO CHAT INTELIGENTE");
        // se pide ingresar el idioma de la segunda persona 
        var idioma = prompt(" INGRESA EL IDIOMA CON EL QUE HABLA LA OTRA PERSONA: ");
        // este swith verifica si el idioma esta soportado 
            switch( idioma ){
                case "ingles" :
                case "inglés" :
                idioma = 'en' ;
                //sera la palabra que aparecera y comprenda la otra persoa que debe escribir a continuacion
                var palabraIdea = "WRITE: "
                // sera la palabra que vera juto con la traducion a su idioma de las palabras de la otra persona
                var resPalabraIdea = "HAS SAID: "
                // GUARDAMOS TODO EL PROCESO DE TRADUCCION DE LA PRIMERA PERSON AN EUNA FUNCION PARA ASI TENERLA EN UN AMBITO GLOBAL 
                // Y DESPUES UTILIZARLA EN TODOS LOS CASO DE TODOS LOS IDIOMAS
                function traductor( callback){  // utilizo un CALLBACK para controlar la asincronia y evitar que una funcion se ejecute mientrs la otra se esta ejeutando
                    //esta variable GUARDARA las palabras que la persona quiere decir
                    var usuario1 = prompt("ESCRIBE: ") ;
                    if(usuario1.toLowerCase() == "cerrar chat" ){
                        console.log( "DESACTIVADO, gracias por usar chat inteligente")
                    }
                    else{
                    //esta variable guardara  la respuesta DE LA PERSONA1 En el idioma de la persona2
                    var traUserEs = "";
                    //SE GUARDAN LOS DATO ES DECIR LAS PALABRAS DE LA PERSONA DE HABLA HISPANA
                    var  datos  =  [ { "Text" : usuario1 } ] ;
                    
                    // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
                    var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+idioma ;
                
                        // Con axios realizamos la petición POST
                     axios.post (  direccion ,  datos , {
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
                                        .then (  respuesta  =>   {  
                                        //guardamos el resultado en a variable antes declarada
                                        traUserEs =  respuesta.data[0].translations[0].text  
                                             console.log(resPalabraIdea + traUserEs) ;
                                            callback();               
                                            
                                         } )
                                        // cachamos el error en caso de haberlo
                                        .catch (  error  =>  consola.log (  error  ) ) ;
                    
                                        }}
                    //Guardamos el proceso de traduccion en una funcion global y declararla en cuaquier momento             
                    function traductor2(){
                    // luego el usuario 2 escribe en su idioma
                    var usuario2 = prompt("WRITE: ");
                    //esta variable guardara  la respuesta
                    var traUser2 = "" ;
            
            
                    var datos =  [ { "Text" : usuario2 } ] ;
                    // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
                    var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es' ;
                
                    // Con axios realizamos la petición POST
                    axios . post (  direccion ,  datos  , {
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
                            .then (  respuesta  =>   { 
                            traUser2 =   respuesta.data[0].translations[0].text  
                            console.log( "DIJO: " + traUser2);
                            traductor(traductor2);
                             } )
                            // cachamos el error en caso de haberlo
                            .catch (  error  =>  console.log (  error  ) ) ;
                            }
                            //llamamos a la funcion uno "traductor" y entregandole como callback la funcion 2 "traductor2"
                            traductor(traductor2);
                break;
                default:
                console.log("EL IDIOMA NO ESTA SOPORTADO");
                }
        

        
   
   // respuesta
   break;

   default :
   console.log ( "NO LOGRO COMPRENDERTE");
}
