const prompt = require ('prompt-sync')();
const axios = require ('axios');

// FRASES DE BIENENIDA
console.log( " HOLA, SOY TU ASISTENTE PERSONAL ");
console.log( " ¿EN QUE PUEDO AYUDARTE? ");
// SE PIDE INGRESAR LA PETICION DEL USUARIO QUE SE COMPARARA EN E SWITCH
var ingreso = prompt("");
// TRANSFORMAMOS A MAYUSCULAS PARA REDUCIR EL NUMERO DE CASOS POSIBLES, YA QUE TODOS LOS CASOS ESTARAN EN  MINUSCULAS
ingreso = ingreso.toLowerCase();


// PAR ACTIVAR EL CHAT INTELIGENTE SE DEBE ESCRIBIR EN CONSOLA "CHAT INTELIGENTE" , NADA MAS QUE ESO 

// SERA LA VARIABLE QUE VERA JUNTO A LO QUE ESCRIBA A PERSONA 2 
var palabraIdea = "";
// sera la palabra que vera juto con la traducion a su idioma de las palabras de la otra persona, QUE SIGNIFICRA "HA DICHO"
var resPalabraIdea = "";
// GUARDAMOS TODO EL PROCESO DE TRADUCCION DE LA PRIMERA PERSON AN EUNA FUNCION PARA ASI TENERLA EN UN AMBITO GLOBAL 
                // Y DESPUES UTILIZARLA EN TODOS LOS CASO DE TODOS LOS IDIOMAS se hara lomismo con la segunda funcion

function traductor( callback){  // utilizo un CALLBACK para controlar la asincronia y evitar que una funcion se ejecute mientrs la otra se esta ejeutando
    //esta variable GUARDARA las palabras que la persona quiere decir
    var usuario1 = prompt("ESCRIBE: ") ;
    if(usuario1.toLowerCase() == "cerrar chat" || usuario1.toLowerCase()== "desactivar chat" ){
        console.log( "CHAT DESACTIVADO, gracias por usar chat inteligente")
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
    var usuario2 = prompt(palabraIdea + ": ");
    //esta variable guardara  la respuesta
    var traUser2 = "" ;


    var datos =  [ { "Text" : usuario2 } ] ;
    // Guardamos la dirección del aa servicio (endpoint, punto de acceso) en una variable
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
            console.log( "  DIJO: " + traUser2);
            traductor(traductor2);
             } )
            // cachamos el error en caso de haberlo
            .catch (  error  =>  console.log (  error  ) ) ;
            }           
// PAR ACTIVAR EL CHAT INTELIGENTE SE DEBE ESCRIBIR EN CONSOLA "CHAT INTELIGENTE" , NADA AS QUE ESO 




// PARA EJECUTAR LA FUNCIONALIDAD DE TRADUCIR TEXTO SE DEBE ESCRIBIR EN CONSOLA "TRADUCCIO DE TEXTO"
// LA PETICION A TRADUCCION QUEDARA GUARDADA EN UNA FUNCION LA CUAL ESTARA DECLARADA EN UN AMBITO GLOBAL PARA SER USADA EN EL MOMENTO 
// QUE SEA NECESARIA , Y ES LA DE CONTINUACION:

function traducir(){
    
    
    //esta variable guardara  la respuesta
    var traduccion = "" ;


    var datos =  [ { "Text" : textoTraducir } ] ;
    // Guardamos la dirección del aa servicio (endpoint, punto de acceso) en una variable
    var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+ idiomaTexto ;

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
            traduccion =   respuesta.data[0].translations[0].text 
            console.log(" EL TEXTO QUE ME PROPORCIONASTES SE TRADUCE A LO SIGUIENTE: ")
            console.log("          " + traduccion);
            
             } )
            // cachamos el error en caso de haberlo
            .catch (  error  =>  console.log (  error  ) ) ;
            } 
// FIN DE LA FUNCION TRADUCCION


switch( ingreso){

    case "como te llamas"  :
    case "como te llamas?" :
        console.log(" Me llamo Myqe ");
        break;

    case "chat inteligente": 
    case "activa el chat inteligente":
    case "activar chat inteligente":     // CHAT INELIGENTE
        console.log( "ENTRASTE AL MODO CHAT INTELIGENTE");
        // se pide ingresar el idioma de la segunda persona 
        var idioma = prompt(" INGRESA EL IDIOMA CON EL QUE HABLA LA OTRA PERSONA: ");
        // tranformamos el idioma a minusculas para compararlo en el switch
        idioma = idioma.toLowerCase()
        // este swith verifica si el idioma esta soportado 
            switch( idioma ){

                // caso idioma " INGLES "
                case "ingles" :
                case "inglés" :
                
                idioma = 'en' ;
                //sera la palabra que aparecera y comprenda la otra persoa que debe escribir a continuacion, SIGNIFICARA "ESCRIBE"
                palabraIdea = "  WRITE: "
                // sera la palabra que vera juto con la traducion a su idioma de las palabras de la otra persona, QUE SIGNIFICRA "HA DICHO"
                resPalabraIdea = "HAS SAID: "
                
                
                            //llamamos a la funcion uno "traductor" y entregandole como callback la funcion 2 "traductor2"
                            traductor(traductor2);
                break;
                
                
                 // caso idioma " Aleman "
                case "aleman":
                case "alemán" :
                    
                    idioma = 'de';
                    palabraIdea = "  SCHREIBEN: ";
                    resPalabraIdea = "HAT GESAGT: ";
    
                                traductor(traductor2);
                    break

                // caso idioma " CANADIENSE O FRANCES CANADIENSE", LOS SEPARE PORQQUE SI ALGUIEN BUSCA FRANCES BUENO SE HA REFERIR al de FRANCIA
                case "canadiense":
                case "frances (canada)" :
                case "francés (canadá)" :
                case "frances canadiense" :
                case "francés canadiense" :
                    
                idioma = 'fr-ca' ;
                    palabraIdea = "DICÉCRIT: ";
                    resPalabraIdea = "HA DCHO: ";

                            traductor(traductor2);
                break;

                // caso idioma " CHINO ( SIMPLIFICADO O TRADICIONAL ), SE UTILIZA EL IF PORQUE NO ESPECIFICA QUE TIPO DE CHINO "
                case "chino":
                                    
                        var typeCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                        typeCh = typeCh.toLowerCase()
                        if (typeCh == "simplificado"){
                        
                        idioma = 'zh-Hans' ;
                        palabraIdea = "  写: ";
                        resPalabraIdea = "他说: ";
        
                                    traductor(traductor2);
                        
                        }else if (typeCh == "tradicional" ){
                            
                            idioma = 'zh-Hant' ;
                        palabraIdea = "  寫： ";
                        resPalabraIdea = "他說：";
                                     
                                    traductor(traductor2);
                        }

                // caso idioma "CHINO SIMPLIFCADO "
                case "chino simplificado":
                case "chino-simplificado":
                case "chino (simplificado)" :

                idioma = 'zh-Hans' ;
                palabraIdea = "  写: ";
                resPalabraIdea = "他说: ";
    
                                traductor(traductor2);
                break;
                
                // caso idioma "CHINO tradicional "
                case "chino tradicional" :
                case "chino tradicional" :
                case "chino (tradicional)" :
                    
                idioma = 'zh-Hant' ;
                palabraIdea = "  寫： ";
                resPalabraIdea = "他說：";
                                 
                                traductor(traductor2);
                break;

                // caso idioma " CROATA "
                case "croata": 
                
                idioma = 'hr' ;
                palabraIdea = "  PISATI: ";
                resPalabraIdea = "JE REKAO: ";

                            traductor(traductor2);
                break;
                
                // caso idioma " FRANCES "
                case "francés" :
                case "frances" :
                
                idioma = 'fr' ;
                palabraIdea = "  ÉCRIVE: ";
                resPalabraIdea = "IL A DIT: ";

                            traductor(traductor2);
                break;

                // caso idioma " GRIEGO "
                case "griego":
                case "greco" :

                idioma = 'el' ;
                palabraIdea = "  ΓΡΑΦΩ: ";
                resPalabraIdea = "ΕΧΕΙ ΕΞΕΤΑΣΗ: ";

                            traductor(traductor2);
                break;

                // caso idioma " HOLANDES "
                case "holandes":
                case "holandés" :
                
                idioma = 'nl' ;
                palabraIdea = "  SCHRIJF: ";
                resPalabraIdea = "HIJ ZEI: ";

                            traductor(traductor2);
                break;

                // caso idioma " ITALIANO"
                case "italiano":
                case "italino" :

                idioma = 'it' ;
                palabraIdea = "  SCRIVI: ";
                resPalabraIdea = "HA DETTO: ";

                            traductor(traductor2);
                break;

                // caso idioma " NORUEGO "
                case "noruego":

                idioma = 'nb' ;
                palabraIdea = "  SKRIVE: ";
                resPalabraIdea = "HAR SAGT: ";

                            traductor(traductor2);
                break;

                // caso idioma " PORTUGUES ( brazil ) "
                case "portugues":
                case "portugués" :
                    
                        var typePt = prompt("¿Portugués de Brazil o Portugal? (Espesifica el país a continuacion) :");
                        typePt = typePt.toLowerCase()
                        if (typePt == "brazil"){
                        
                            idioma = 'pt' ;
                            palabraIdea = "  ESCREVE: ";
                            resPalabraIdea = "DISSE: ";
        
                                    traductor(traductor2);
                        
                        }else if (typePt == "portugal" ){
                            
                            idioma = 'pt-pt' ;
                            palabraIdea = "  ESCREVE: ";
                            resPalabraIdea = "DISSE: ";
                                     
                                    traductor(traductor2);
                        }
                break;

                case "portugues brazil":
                case  "portugés de brazil":
                case  "portugues (brazil)": 
                case  "portugués (brazil)": 
                case  "portugues(brazil)" : 
                case  "portugués(brazil)" :
                 
                    idioma = 'pt' ;
                    palabraIdea = "  ESCREVE: ";
                    resPalabraIdea = "DISSE: ";

                            traductor(traductor2);
                break;
                
                case "portugues portugal":
                case  "portugés de portugal":
                case  "portugues (portugal)": 
                case  "portugués (portugal)": 
                case  "portugues(portugal)" : 
                case  "portugués(portugal)" :
                    
                    idioma = 'pt-pt' ;
                    palabraIdea = "  ESCREVE: ";
                    resPalabraIdea = "DISSE: ";
    
                                traductor(traductor2);
                    break;

                // caso idioma " RUSO "
                case "ruso":
                    
                    idioma = 'ru';
                    palabraIdea = "  НАПИСАТЬ: ";
                    resPalabraIdea = "ОН СКАЗАЛ: ";

                            traductor(traductor2);
                break;

                // caso idioma " UCRANIO "
                case "ucranio":
                case "ucraniano" :
                    
                    idioma = 'uk';
                    palabraIdea = "  НАПИСАТИ: ";
                    resPalabraIdea = "СКАЗАЛ: ";

                            traductor(traductor2);
                break;

                // caso idioma " SUECO "
                case "sueco":
                
                idioma = 'sv' ;
                palabraIdea = "  ESCRIVER: ";
                resPalabraIdea = "HAR SAGT: ";

                            traductor(traductor2);
                break;




                default:
                console.log("EL IDIOMA NO ESTA SOPORTADO EN ESTE PROGRAMA ");
                
                }
        
   
   
   break;

   case "traduccion de texto":
   case "MyQe puedes traducir texto":
   case "traducir texto":
    
    console.log("ESCRIBE EL TEXTO A TRADUCIR")// se pide el texto que se va a tarucir
    var textoTraducir = prompt( "TEXTO: ");// se guarda el texto en una variable
    var idiomaTexto = prompt( "A que idioma deseas traducir este texto: " );// se guarad el idioma, 
    idiomaTexto = idiomaTexto.toLowerCase     //lo pasamos a minusculas para luego introducirlo como parametro al switch y compararlo
         
                switch(idiomaTexto){
                    
                    case "aleman":
                    case "alemán":
                                idiomaTexto = 'de' ;
                                traducir ();
                    break;
                    
                    // caso idioma canadiense o frances de canada
                    case "canadiense":
                    case "frances (canada)" :
                    case "francés (canadá)" :
                    case "frances canadiense" :
                    case "francés canadiense" :
                                idiomaTexto = 'fr-ca' ;
                                traducir ();
                    break;

                    // caso idioma " CHINO ( SIMPLIFICADO O TRADICIONAL ), SE UTILIZA EL IF PORQUE NO ESPECIFICA QUE TIPO DE CHINO "
                    case "chino":
                                    
                    var tipoCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                    tipoCh = tipoCh.toLowerCase()
                        
                        if (tipoCh == "simplificado"){
                    
                                idiomaTexto = 'zh-Hans';
                                traducir ();
                    
                        }else if (ttipoCh == "tradicional" ){
                        
                                idiomaTexto = 'zh-Hant';
                                traducir ();
                        }
                               
                    break;

                    // caso idioma "CHINO SIMPLIFCADO "
                    case "chino simplificado":
                    case "chino-simplificado":
                    case "chino (simplificado)" :
    
                                idiomaTexto = 'zh-Hans';
                                traducir ();
                    break;

                    // caso idioma "CHINO tradicional "
                    case "chino tradicional" :
                    case "chino tradicional" :
                    case "chino (tradicional)" :
                        
                                idiomaTexto = 'zh-Hant';
                                traducir ();
                    break;

                    // caso idioma " CROATA "
                    case "croata": 
                
                                idiomaTexto = 'hr';
                                traducir ();
                    break;

                    // caso idioma " FRANCES "
                    case "francés" :
                    case "frances" :
                    
                                idiomaTexto = 'fr' ;
                                traducir ();
                    break;

                    // caso idioma " GRIEGO "
                    case "griego":
                    case "greco" :

                                idiomaTexto = 'el';
                                traducir ();
                    break;

                    // caso idioma " HOLANDES "
                    case "holandes":
                    case "holandés" :
                    
                                idiomaTexto = 'nl';
                                traducir ();
                    break;

                    // caso idioma " ITALIANO"
                    case "italiano":
                    case "italino" :
    
                                idiomaTexto = 'it';
                                traducir ();
                    break;

                    // caso idioma " NORUEGO "
                case "noruego":

                                idiomaTexto = 'nb';
                                traducir ();
                    break;

                    // caso idioma " PORTUGUES ( brazil ) "
                    case "portugues":
                    case "portugués":

                        var tipoPt = prompt("¿Portugués de Brazil o Portugal? (Espesifica el país a continuacion) :");
                        tipoPt = tipoPt.toLowerCase()
                            
                            if (tipoPt == "brazil"){
                        
                                    idiomaTexto = 'pt';
                                    traducir ();
                        
                            }else if (tipoPt == "portugal" ){
                            
                                    idiomaTexto = 'pt-pt';
                                    traducir ();
                            }
                    break;

                    // caso especificado de ( Portgues de Brazil)
                    case "portugues brazil":
                    case  "portugés de brazil":
                    case  "portugues (brazil)": 
                    case  "portugués (brazil)": 
                    case  "portugues(brazil)" : 
                    case  "portugués(brazil)" :
                                 
                                idiomaTexto = 'pt';
                                traducir ();
                    break;
                    
                    // caso especificado de Portugues de Portugal)
                    case "portugues portugal":
                    case  "portugés de portugal":
                    case  "portugues (portugal)": 
                    case  "portugués (portugal)": 
                    case  "portugues(portugal)" : 
                    case  "portugués(portugal)" :
                                            
                                idiomaTexto = 'pt-pt';
                                traducir ();
                    break;

                    //caso idioma " RUSO "
                    case "ruso":
                    
                                idiomaTexto = 'ru';
                                traducir ();
                    
                    break;

                    // caso idioma " UCRANIO "
                    case "ucranio":
                    case "ucraniano" :
                        
                                idioma = 'uk';
                                traducir ();
                    break;

                    // caso idioma " SUECO "
                    case "sueco":
                
                                idiomaTexto = 'sv';
                                traducir ();
                    break;

                   
                    




                }

             


   default :
   console.log ( "NO LOGRO COMPRENDERTE");
}
