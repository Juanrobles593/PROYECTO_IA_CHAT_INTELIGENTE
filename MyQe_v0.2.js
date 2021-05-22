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
        // se pide ingresar el idioma de la otra persona
        var idioma = prompt(" INGRESA EL IDIOMA CON EL QUE HABLA LA OTRA PERSONA: ");
        // este swith verifica si el idioma esta soportado 
            switch( idioma ){
                case "ingles" :
                case "inglés" :
                idioma = 'en' ;
                //sera la palabra que aparecera y comprenda la otra persoa que debe escribir a continuacion
                var palabraIdea = "WRITE: "
                // sera la palabra que vera juto con la traducion a su idioma de las palabras de la otra persona
                var resPalabraIdea = "SAID: "
                break;
                default:
                console.log("EL IDIOMA NO ESTA SOPORTADO");
        }
        //estas variables seran las palabras que las ds persona quieren decir
        var usuario1 = prompt("ESCRIBE: ") ;
        //esta variable guardara  la respuesta
        var traUserEs = "";
        
       // function traduccion(texto, callback){
        var  datos  =  [ { "Text" : usuario1 } ] ;
        
        // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
        var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+idioma ;
    
            // Con axios realizamos la petición POST
        var traducir =  axios.post (  direccion ,  datos , {
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
                            traUserEs =  respuesta.data[0].translations[0].text  
                                console.log(resPalabraIdea + traUserEs)                
                            
                             } )
                            // cachamos el error en caso de haberlo
                            .catch (  error  =>  consola.log (  error  ) ) ;
                                       
    
        var usuario2 ;
   
        setTimeout( function(){
            return ( 
                usuario2 = prompt( palabraIdea +" "))},5 * 1000);
            // luego el usuario 2 escribe en su idioma
    
        //esta variable guardara  la respuesta
        var traUser2 = "" ;


        var datos =  [ { "Text" : usuario2 } ] ;
        // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
        var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es' ;
    
        // Con axios realizamos la petición POST
        axios . post (  direccion ,  datos ,  {
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

    } )
    // cachamos el error en caso de haberlo
    .catch (  error  =>  console.log (  error  ) ) ;
    
    
   // respuestaa
   break;

   default :
   console.log ( "NO LOGRO COMPRENDERTE");
}
