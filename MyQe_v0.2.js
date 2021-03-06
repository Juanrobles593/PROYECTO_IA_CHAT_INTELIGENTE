// ASISTENTE TRADUCTOR
// PENSADO PARA FACILITAR LA COMUNICACION ENTRE UNA PERSONA DE HABLA HISPANA Y OTRA DE HABLA EXTRANJERA O DIFERENTE AL ESPAÑOL

// ESTE PROGRAMA USA LOS SERVICIOS COGNITIVOS DE MICROSOFT AZURE
// REUNE DISTINTAS FUNCIONAIDADES REFERENTES A A TRADUCCION Y TRANLITERACION

//FUNCIONALIDADES 
// *se recomienda escribir sin acentos lo nombres de la funconalidades*

// LA FUNCIONALIDAD PRINCIPAL Y EL OBJETIVO DE ESTE PROGRAMA "CHAT INTELIGENTE";
//ESTE CHAT EMULA UNA CONVERSACION A TRAVEZ DE TEXTO TRADUCIENDO INSTANTANEAMENTE AL IDIOMA DE LA OTRA PERSONA Y ASI PODERSE COMUNICAR
// PARA ACTIVARLO BASTA CON ESCRIBIR EN CONSOLA ----->  CHAT INTELIGENTE



// FUNCIONALIDAD TRADUCTOR
// ESTA FUNCIONALIDAD TRADUCE DE UN IDIOMA "X" ( QUE ESTE SOPORTADO POR EL PROGRAMA), AL ESPAÑOL O VICEVERSA SOLO HAY QUE ESPECIFICAR 
// EL IDIOMA DESPUES DE HABER ESCRITO EL TEXTO
// PARA ACTIVARLO BASTA CON ESCRIBIR EN CONSOLA ----->  TRADUCTOR O TRADUCR TEXTO


//FUNCIONALIDAD TRANSLITERAR

// ESTA SE DIVIDE EN DOS:

// TRANSLITERAR Y TRADUCIR     Y   SIMPLEMENTE TRAUCIR SOLO BASTA ESCRIBIR EN CONSOLA ----> TRANSLITERAR  <------    Y LUEGO ESPECIFICAR CUAL DE LAS DOS SUB-FUNCIONALIDADES
// ESTA FUNCIONALIDAD TRADUCE Y TRANSLITERA UN TEXTO DEL ESPAÑOL A OTRO IDIOMA O SIMPLEMENTE TRANSLITERA UN TEXTO DE OTRO IDIOMA;
// ASI OBTENDREMOS LA PRONUNCIACION DEL TEXTO PROPORCIONADO


//FUNCIONALIDAD TRADUCCION DE TEXTO DE IMAGEN
// PARA ESTA FUNCIONALIDAD NECESITAREMOS UN LINK PARA PODER INGRESARLO Y ASI OBTENER LA TRADUCCCION
//SI NO SABES COMO CREAR UN LINK PARA TU IMAGEN TE DEJO E SIGUIENTE ENLACE QUE EXPLICA COMO HACERLO --> https://www.youtube.com/watch?v=CLmYi6c0Mmw&t=137s
// UNA VEZ HAYAS OBTENIDO EL LINK DE LA IMAGEN UBICALO DONDE SE LO REQUIERE Y AUTOMATICAMENTE RECONOCERA LOS CARACTERES DE LA 
//IMAGEN Y LUEGO LOS TRADUCIRA A ESPAÑOL, NO TE DEBES PREOCUPAR POR SABER EN QUE IDIOAM ESTA EL TEXTO EL PROGRAMA AUTOMATICAMENTE TRADUCIRA
// PARA ACTIVARLO BASTA CON ESCRIBIR EN CONSOLA ----->  TRADUCIR IMAGEN <-------





const prompt = require ('prompt-sync')();
const axios = require ('axios');

// FRASES DE BIENENIDA
console.log( " HOLA, SOY TU ASISTENTE DE TRADUCCION PERSONAL ");
console.log( " ¿EN QUE PUEDO AYUDARTE? ");

// SE PIDE INGRESAR LA PETICION DEL USUARIO QUE SE COMPARARA EN E SWITCH
var ingreso = prompt("");  
all (ingreso);


function all (ingreso){

// TRANSFORMAMOS A MAYUSCULAS PARA REDUCIR EL NUMERO DE CASOS POSIBLES, YA QUE TODOS LOS CASOS ESTARAN EN  MINUSCULAS
ingreso = ingreso.toLowerCase();
 


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
        idioma = idioma.toLowerCase();
        
        // SERA LA VARIABLE QUE VERA JUNTO A LO QUE ESCRIBA A PERSONA 2 
        var palabraIdea = "";
        // sera la palabra que vera juto con la traducion a su idioma de las palabras de la otra persona, QUE SIGNIFICRA "HA DICHO"
        var resPalabraIdea = "";
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
                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;
                
                
                 // caso idioma " Aleman "
                case "aleman":
                case "alemán" :
                    
                    idioma = 'de';
                    palabraIdea = "  SCHREIBEN: ";
                    resPalabraIdea = "HAT GESAGT: ";
    
                                traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
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

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " CHINO ( SIMPLIFICADO O TRADICIONAL ), SE UTILIZA EL IF PORQUE NO ESPECIFICA QUE TIPO DE CHINO "
                case "chino":
                                    
                        var typeCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                        typeCh = typeCh.toLowerCase();
                        if (typeCh == "simplificado"){
                        
                        idioma = 'zh-Hans' ;
                        palabraIdea = "  写: ";
                        resPalabraIdea = "他说: ";
        
                                    traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                        
                        }else if (typeCh == "tradicional" ){
                            
                            idioma = 'zh-Hant' ;
                        palabraIdea = "  寫： ";
                        resPalabraIdea = "他說：";
                                     
                                    traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                        }

                // caso idioma "CHINO SIMPLIFCADO "
                case "chino simplificado":
                case "chino-simplificado":
                case "chino (simplificado)" :

                idioma = 'zh-Hans' ;
                palabraIdea = "  写: ";
                resPalabraIdea = "他说: ";
    
                                traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;
                
                // caso idioma "CHINO tradicional "
                case "chino tradicional" :
                case "chino tradicional" :
                case "chino (tradicional)" :
                    
                idioma = 'zh-Hant' ;
                palabraIdea = "  寫： ";
                resPalabraIdea = "他說：";
                                 
                                traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " CROATA "
                case "croata": 
                
                idioma = 'hr' ;
                palabraIdea = "  PISATI: ";
                resPalabraIdea = "JE REKAO: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;
                
                // caso idioma " FRANCES "
                case "francés" :
                case "frances" :
                
                idioma = 'fr' ;
                palabraIdea = "  ÉCRIVE: ";
                resPalabraIdea = "IL A DIT: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " GRIEGO "
                case "griego":
                case "greco" :

                idioma = 'el' ;
                palabraIdea = "  ΓΡΑΦΩ: ";
                resPalabraIdea = "ΕΧΕΙ ΕΞΕΤΑΣΗ: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " HOLANDES "
                case "holandes":
                case "holandés" :
                
                idioma = 'nl' ;
                palabraIdea = "  SCHRIJF: ";
                resPalabraIdea = "HIJ ZEI: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " ITALIANO"
                case "italiano":
                case "italino" :

                idioma = 'it' ;
                palabraIdea = "  SCRIVI: ";
                resPalabraIdea = "HA DETTO: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " NORUEGO "
                case "noruego":

                idioma = 'nb' ;
                palabraIdea = "  SKRIVE: ";
                resPalabraIdea = "HAR SAGT: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
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
        
                                    traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                        
                        }else if (typePt == "portugal" ){
                            
                            idioma = 'pt-pt' ;
                            palabraIdea = "  ESCREVE: ";
                            resPalabraIdea = "DISSE: ";
                                     
                                    traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
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

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
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
    
                                traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                    break;

                // caso idioma " RUSO "
                case "ruso":
                    
                    idioma = 'ru';
                    palabraIdea = "  НАПИСАТЬ: ";
                    resPalabraIdea = "ОН СКАЗАЛ: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " UCRANIO "
                case "ucranio":
                case "ucraniano" :
                    
                    idioma = 'uk';
                    palabraIdea = "  НАПИСАТИ: ";
                    resPalabraIdea = "СКАЗАЛ: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;

                // caso idioma " SUECO "
                case "sueco":
                
                idioma = 'sv' ;
                palabraIdea = "  ESCRIVER: ";
                resPalabraIdea = "HAR SAGT: ";

                            traductor( idioma ,palabraIdea, resPalabraIdea , traductor2);
                break;




                default:
                console.log("EL IDIOMA NO ESTA SOPORTADO EN ESTE PROGRAMA ");
                
                console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                ingreso = prompt(" ");
                
                if(ingreso == "chao" || ingreso == "CHAO"){
                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                }else{
                all(ingreso);
                };
                
            }
        
   
   
   break;

   case "traductor":
   case "traduccion de texto":
   case "MyQe puedes traducir texto":
   case "traducir texto":
    
    console.log("CLARO!, ESCRIBE EL TEXTO A TRADUCIR")// se pide el texto que se va a tarucir
    //traducirAll();
    //function traducirAll(){
    var textoTraducir = prompt( "TEXTO: ");// se guarda el texto en una variable
    var idiomaTexto = prompt( "A QUE IDIOMA DESEAS TRADUCIR EL TEXTO: " );// se guarad el idioma, 
    idiomaTexto = idiomaTexto.toLowerCase();    //lo pasamos a minusculas para luego introducirlo como parametro al switch y compararlo
         
                switch(idiomaTexto){
                    
                    case "aleman":
                    case "alemán":
                                idiomaTexto = 'de' ;
                                traducir (textoTraducir , idiomaTexto);
                    break;
                    
                    // caso idioma canadiense o frances de canada
                    case "canadiense":
                    case "frances (canada)" :
                    case "francés (canadá)" :
                    case "frances canadiense" :
                    case "francés canadiense" :
                                idiomaTexto = 'fr-ca' ;
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " CHINO ( SIMPLIFICADO O TRADICIONAL ), SE UTILIZA EL IF PORQUE NO ESPECIFICA QUE TIPO DE CHINO "
                    case "chino":
                                    
                    var tipoCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                    tipoCh = tipoCh.toLowerCase();
                        
                        if (tipoCh == "simplificado"){
                    
                                idiomaTexto = 'zh-Hans';
                                traducir (textoTraducir , idiomaTexto);
                    
                        }else if (ttipoCh == "tradicional" ){
                        
                                idiomaTexto = 'zh-Hant';
                                traducir (textoTraducir , idiomaTexto);
                        }
                               
                    break;

                    // caso idioma "CHINO SIMPLIFCADO "
                    case "chino simplificado":
                    case "chino-simplificado":
                    case "chino (simplificado)" :
    
                                idiomaTexto = 'zh-Hans';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma "CHINO tradicional "
                    case "chino tradicional" :
                    case "chino tradicional" :
                    case "chino (tradicional)" :
                        
                                idiomaTexto = 'zh-Hant';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " CROATA "
                    case "croata": 
                
                                idiomaTexto = 'hr';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " FRANCES "
                    case "francés" :
                    case "frances" :
                    
                                idiomaTexto = 'fr' ;
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " ESPAÑOL "
                    case "espanol" :
                    case "esp" :
                    
                                idiomaTexto = 'es' ;
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " GRIEGO "
                    case "griego":
                    case "greco" :

                                idiomaTexto = 'el';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " HOLANDES "
                    case "holandes":
                    case "holandés" :
                    
                                idiomaTexto = 'nl';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " INGLES "
                    case "ingles" :
                    case "inglés" :
                    
                                idiomaTexto = 'en' ;
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " ITALIANO"
                    case "italiano":
                    case "italino" :
    
                                idiomaTexto = 'it';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " NORUEGO "
                    case "noruego":

                                idiomaTexto = 'nb';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " PORTUGUES ( brazil ) "
                    case "portugues":
                    case "portugués":

                        var tipoPt = prompt("¿Portugués de Brazil o Portugal? (Espesifica el país a continuacion) :");
                        tipoPt = tipoPt.toLowerCase();
                            
                            if (tipoPt == "brazil"){
                        
                                    idiomaTexto = 'pt';
                                    traducir (textoTraducir , idiomaTexto);
                        
                            }else if (tipoPt == "portugal" ){
                            
                                    idiomaTexto = 'pt-pt';
                                    traducir (textoTraducir , idiomaTexto);
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
                                traducir (textoTraducir , idiomaTexto);
                    break;
                    
                    // caso especificado de Portugues de Portugal)
                    case "portugues portugal":
                    case  "portugés de portugal":
                    case  "portugues (portugal)": 
                    case  "portugués (portugal)": 
                    case  "portugues(portugal)" : 
                    case  "portugués(portugal)" :
                                            
                                idiomaTexto = 'pt-pt';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    //caso idioma " RUSO "
                    case "ruso":
                    
                                idiomaTexto = 'ru';
                                traducir (textoTraducir , idiomaTexto);
                    
                    break;

                    // caso idioma " UCRANIO "
                    case "ucranio":
                    case "ucraniano" :
                        
                                idiomaTexto = 'uk';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    // caso idioma " SUECO "
                    case "sueco":
                
                                idiomaTexto = 'sv';
                                traducir (textoTraducir , idiomaTexto);
                    break;

                    default:
                        console.log("EL IDIOMA NO ESTA SOPORTADO POR ESTE PROGRAMA");
                        
                        console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                        ingreso = prompt("");
                        
                        if(ingreso == "chao" || ingreso == "CHAO"){
                        console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                        }else{
                        all(ingreso);
                        };
                        

                }
            

    break;

    case "puedes transliterar texto":
    case "transliteracion":
    case "transliteracion de texto":
    case "transliterar texto":
    case "transliterar":    
    
    var infoTra = prompt("QUIERES TRADUCIR Y TRANSLITERAR ( tyt ) O SIMPLEMENTE TRANSLITERAR ( trs )? ESPECIFICA A CONTINUACION:")
    infoTra.toLowerCase() ;
                    
                    if( infoTra == "tyt" || infoTra == "traducir y transliterar"){
                            var textoTra = prompt("INTRODUCE EL TEXTO: ");
                            var idiomaTra = prompt("A QUE IDIOMA DESEAS TRADUCIR PARA LUEGO TRANSLITERAR: ");
                            var tradText = "";
                            var transText = "";

                            switch( idiomaTra ){

                                case "chino":
                                 var tipeCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                                tipeCh = tipeCh.toLowerCase();
                                    
                                    if (tipeCh == "simplificado"){
                                
                                            idiomaTra = 'zh-Hans';
                                            tyt (textoTra , idiomaTra);
                                
                                    }else if (tipeCh == "tradicional" ){
                                    
                                            idiomaTra = 'zh-Hant';
                                            tyt (textoTra , idiomaTra);
                                    }
                                           
                                break;
            
                                // caso idioma "CHINO SIMPLIFCADO "
                                case "chino simplificado":
                                case "chino-simplificado":
                                case "chino (simplificado)" :
                
                                            idiomaTra = 'zh-Hans';
                                            tyt (textoTra , idiomaTra);
                                break;
            
                                // caso idioma "CHINO tradicional "
                                case "chino tradicional" :
                                case "chino tradicional" :
                                case "chino (tradicional)" :
                                    
                                            idiomaTra = 'zh-Hant';
                                            tyt (textoTra , idiomaTra);
                                break;

                                // caso idioma " GRIEGO "
                                case "griego":
                                case "greco" :
    
                                    idiomaTra = 'el';
                                    tyt (textoTra , idiomaTra);
                                break;

                                //caso idioma " RUSO "
                                case "ruso":
                    
                                    idiomaTra = 'ru';
                                    tyt (textoTra , idiomaTra);
                                
                                break;
                                
                                // caso idioma " UCRANIO "
                                case "ucranio":
                                case "ucraniano" :
                            
                                    idiomaTra = 'uk';
                                    tyt (textoTra , idiomaTra);
                                
                                break;

                                default :
                                console.log("EL IDIOMA NO ESTA SOPORTADO POR EL PROGRAMA, PRUEBA SOLO TRADUCIENDO");
                                console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                                ingreso = prompt(" ");
                                if(ingreso == "chao" || ingreso == "CHAO"){
                                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                                }else{
                                all(ingreso);
                                }
                                


                            }


                    }else if(infoTra == "trs" || infoTra == "transliterar"){
                        var textoTransliteracion = prompt("INTRODUCE EL TEXTO: ");
                            var idiomaTrs = prompt("A QUE IDIOMA DESEAS TRANSLITERAR: ");
                            var transliteracion = "";
                            var codigoIdioma;

                            switch( idiomaTrs ){

                                case "chino":
                                 var tipeCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
                                tipeCh = tipeCh.toLowerCase()
                                    
                                    if (tipeCh == "simplificado"){
                                
                                            idiomaTrs = 'Hans';
                                            codigoIdioma = 'Hans';
                                            trs (textoTransliteracion , idiomaTrs);
                                
                                    }else if (tipeCh == "tradicional" ){
                                    
                                            idiomaTrs = 'Hant';
                                            codigoIdioma = 'Hant';
                                            trs (textoTransliteracion , idiomaTrs);
                                    }
                                           
                                break;
            
                                // caso idioma "CHINO SIMPLIFCADO "
                                case "chino simplificado":
                                case "chino-simplificado":
                                case "chino (simplificado)" :
                
                                            idiomaTrs = 'zh-Hans';
                                            codigoIdioma = 'Hans';
                                            trs (textoTransliteracion , idiomaTrs);
                                break;
            
                                // caso idioma "CHINO tradicional "
                                case "chino tradicional" :
                                case "chino tradicional" :
                                case "chino (tradicional)" :
                                    
                                            idiomaTrs = 'zh-Hant';
                                            codigoIdioma = 'Hant';
                                            trs (textoTransliteracion , idiomaTrs);
                                break;

                                // caso idioma " GRIEGO "
                                case "griego":
                                case "greco" :
    
                                    idiomaTrs = 'el';
                                    codigoIdioma = 'Grek';
                                    trs (textoTransliteracion , idiomaTrs);

                                break;

                                //caso idioma " RUSO "
                                case "ruso":
                    
                                    idiomaTrs = 'ru';
                                    codigoIdioma = 'Cyrl';
                                    trs (textoTransliteracion , idiomaTrs);
                                
                                break;
                                
                                // caso idioma " UCRANIO "
                                case "ucranio":
                                case "ucraniano" :
                            
                                    idiomaTrs = 'uk';
                                    codigoIdioma = 'Cyrl';
                                    trs (textoTransliteracion , idiomaTrs);

                                break;

                                default :
                                console.log("EL IDIOMA NO ESTA SOPORTADO POR EL PROGRAMA, PRUEBA SOLO TRADUCIENDO");
                                
                                console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                                ingreso.toLowerCase();
                                
                                if(ingreso == "chao" || ingreso == "CHAO"){
                                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                                }else{
                                all(ingreso);
                                }
                                
                            }


                    }
    break;

    case "traducir imagen":
    case "traduccion de imagenes":
    case "traducir una imagen":

       
        var idiomaIma = prompt("ESCRIBE EL IDIOMA DEL TEXTO: ")
       idiomaIma = idiomaIma.toLowerCase();
        
        switch(idiomaIma){
                    
            case "aleman":
            case "alemán":
                        idiomaIma = 'de' ;
                        traImages( idiomaIma);
            break;
            
            // caso idioma canadiense o frances de canada
            case "canadiense":
            case "frances (canada)" :
            case "francés (canadá)" :
            case "frances canadiense" :
            case "francés canadiense" :
                        idiomaIma = 'fr-ca' ;
                        traImages( idiomaIma);
            break;

            // caso idioma " CHINO ( SIMPLIFICADO O TRADICIONAL ), SE UTILIZA EL IF PORQUE NO ESPECIFICA QUE TIPO DE CHINO "
            case "chino":
                            
            var tipoCh = prompt("¿chino tradicional o simplificado? (Espesifica el tipo a continuacion): ");
            tipoCh = tipoCh.toLowerCase();
                
                if (tipoCh == "simplificado"){
            
                        idiomaIma = 'zh-Hans';
                         traImages( idiomaIma);
            
                }else if (ttipoCh == "tradicional" ){
                
                        idiomaIma = 'zh-Hant';
                        traImages(idiomaIma);
                }
                       
            break;

            // caso idioma "CHINO SIMPLIFCADO "
            case "chino simplificado":
            case "chino-simplificado":
            case "chino (simplificado)" :

                        idiomaIma = 'zh-Hans';
                        traImages( idiomaIma);
            break;

            // caso idioma "CHINO tradicional "
            case "chino tradicional" :
            case "chino tradicional" :
            case "chino (tradicional)" :
                
                        idiomaIma = 'zh-Hant';
                        traImages( idiomaIma);
            break;

            // caso idioma " CROATA "
            case "croata": 
        
                        idiomaIma = 'hr';
                        traImages( idiomaIma);
            break;

            // caso idioma " FRANCES "
            case "francés" :
            case "frances" :
            
                        idiomaIma = 'fr' ;
                        traImages( idiomaIma);
            break;

            // caso idioma " ESPAÑOL "
            case "espanol" :
            case "esp" :
            
                        idiomaIma = 'es' ;
                        traImages( idiomaIma);
            break;

            // caso idioma " GRIEGO "
            case "griego":
            case "greco" :

                        idiomaIma = 'el';
                        traImages( idiomaIma);
            break;

            // caso idioma " HOLANDES "
            case "holandes":
            case "holandés" :
            
                        idiomaIma = 'nl';
                        traImages( idiomaIma);
            break;

            // caso idioma " INGLES "
            case "ingles" :
            case "inglés" :
            
                        idiomaIma = 'en' ;
                        traImages( idiomaIma);
            break;

            // caso idioma " ITALIANO"
            case "italiano":
            case "italino" :

                        idiomaIma = 'it';
                        traImages(idiomaIma);
            break;

            // caso idioma " NORUEGO "
            case "noruego":

                        idiomaIma = 'nb';
                        traImages( idiomaIma);
            break;

            // caso idioma " PORTUGUES ( brazil ) "
            case "portugues":
            case "portugués":

                
                
                            idiomaIma = 'pt';
                            traImages( idiomaIma);
                
                    
            break;


            //caso idioma " RUSO "
            case "ruso":
            
                        idiomaIma = 'ru';
                        traImages( idiomaIma);
            
            break;

            // caso idioma " UCRANIO "
            case "ucranio":
            case "ucraniano" :
                
                        idiomaIma = 'uk';
                        traImages( idiomaIma);
            break;

            // caso idioma " SUECO "
            case "sueco":
        
                        idiomaIma= 'sv';
                        traImages( idiomaIma);
            break;

            default:
                console.log("EL IDIOMA NO ESTA SOPORTADO POR ESTE PROGRAMA");
                
                console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                ingreso = prompt("");
                
                if(ingreso == "chao" || ingreso == "CHAO"){
                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                }else{
                all(ingreso);
                };
                

        }
        
          
          
         



    break;

   default :
   console.log ( "NO LOGRO COMPRENDERTE, REVISA TU ORTOGRAFIA");
   console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
        ingreso = prompt(" ");
        if(ingreso == "chao" || ingreso == "CHAO"){
            console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
        }else{
            all(ingreso);
        }

}

}




// PAR ACTIVAR EL CHAT INTELIGENTE SE DEBE ESCRIBIR EN CONSOLA "CHAT INTELIGENTE" , NADA MAS QUE ESO 
// GUARDAMOS TODO EL PROCESO DE TRADUCCION DE LA PRIMERA PERSON AN EUNA FUNCION PARA ASI TENERLA EN UN AMBITO GLOBAL 
                // Y DESPUES UTILIZARLA EN TODOS LOS CASSO DE TODOS LOS IDIOMAS se hara lomismo con la segunda funcion

function traductor( idioma , palabraIdea, resPalabraIdea , callback){  // utilizo un CALLBACK para controlar la asincronia y evitar que una funcion se ejecute mientrs la otra se esta ejeutando
    //esta variable GUARDARA las palabras que la persona quiere decir consola
    var usuario1 = prompt("ESCRIBE: ") ;
    if(usuario1.toLowerCase() == "cerrar chat" || usuario1.toLowerCase() == "desactivar chat" ){
        console.log( "CHAT DESACTIVADO, gracias por usar chat inteligente");
        
        console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
        ingreso = prompt(" ");
        if(ingreso == "chao" || ingreso == "CHAO"){
            console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
        }else{
            all(ingreso);
        }
        
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
                             palabraIdea = palabraIdea.toUpperCase();
                            callback(palabraIdea, idioma , resPalabraIdea);               
                            
                         } )
                        // cachamos el error en caso de haberlo
                        .catch (  error  =>  console.log (  error.data  ) ) ;
    
                        }}
    //Guardamos el proceso de traduccion en una funcion global y declararla en cuaquier momento             
    function traductor2(palabraIdea, idioma,resPalabraIdea){
    // luego el usuario 2 escribe en su idioma
    var usuario2 = prompt(palabraIdea );
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
            // Accedemos al atributo que contiene el texto traducido consola
            .then (  respuesta  =>   { 
            traUser2 =   respuesta.data[0].translations[0].text  
            console.log( "  DIJO: " + traUser2);
            traductor(idioma , palabraIdea, resPalabraIdea , traductor2);
             } )
            // cachamos el error en caso de haberlo
            .catch (  error  =>  console.log (  error  ) ) ;
            }           
// PAR ACTIVAR EL CHAT INTELIGENTE SE DEBE ESCRIBIR EN CONSOLA "CHAT INTELIGENTE" , NADA  MAS QUE ESO 




// PARA EJECUTAR LA FUNCIONALIDAD DE TRADUCIR TEXTO SE DEBE ESCRIBIR EN CONSOLA "TRADUCCION DE TEXTO"
// LA PETICION A TRADUCCION QUEDARA GUARDADA EN UNA FUNCION LA CUAL ESTARA DECLARADA EN UN AMBITO GLOBAL PARA SER USADA EN EL MOMENTO 
// QUE SEA NECESARIA , Y ES LA DE CONTINUACION:

function traducir(textoTraducir , idiomaTexto){
    
    
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
            traduccion =   respuesta.data[0].translations[0].text ;
            console.log(" EL TEXTO QUE ME PROPORCIONASTES SE TRADUCE A LO SIGUIENTE: ")
            console.log("          " + traduccion);
            console.log("");
            console.log("DESEAS SEGUIR TRADUCIENDO? SI ES ASI ESCRIBE EL TEXTO; CASO CONTRARIO ESCRIBE (SALIR)");
                                      textoTraducir = prompt(" ");
                                      textoTraducir = textoTraducir.toLowerCase();
                                      if(textoTraducir == "salir" || textoTraducir == "SALIR"){
                                            console.log("GRACIAS POR USAR EL SERVICIO DE TRADUCCIÓN");
                                            
                                            console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                                            ingreso = prompt(" ");
                                            if(ingreso == "chao" || ingreso == "CHAO"){
                                                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                                                }else{
                                                all(ingreso);
                                                }

                                            }else{
                                            traducir(textoTraducir, idiomaTexto);
                                            }
            
             } )
            // cachamos el error en caso de haberlo
            .catch (  error  =>  console.log (  error.data  ) ) ;
            };
// FIN DE LA FUNCION TRADUCCION



// FUNCION TRANSLITERAR Y TRADUCIR

function tyt (textoTra , idiomaTra){
    var  datos  =  [ { "Text" : textoTra } ] ;

     
            // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
            var  direccion  =  'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + idiomaTra +'&toScript=latn'  ;
        
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
                                     transText = respuesta.data[0].translations[0].transliteration.text;
                                      tradText =  respuesta.data[0].translations[0].text;
                                     console.log("LA TRADUCCION ES: "+ tradText);
                                      console.log ( "LA TRANSLITERACION ES: " + transText  );
                                      console.log("DESEAS SEGUIR TRANSLITERANDO? SI ES ASI ESCRIBE EL TEXTO; CASO CONTRARIO ESCRIBE (SALIR)");
                                      textoTra = prompt(" ");
                                      
                                      if(textoTra == "salir" || textoTra == "SALIR"){
                                          console.log("GRACIAS POR USAR EL SERVICIO DE TRADUCCIÓN Y TRANSLITERACIÓN");

                                          console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                                            ingreso = prompt(" ");
                                            if(ingreso == "chao" || ingreso == "CHAO"){
                                                console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                                                }else{
                                                all(ingreso);
                                                }

                                            

                                        }else{
                                          tyt (textoTra , idiomaTra);
                                        };
                                        })
                                // cachamos el error en caso de haberlo
                                .catch (  error  =>  console.log (  error  ) ) ;
};
// FIN DE LA FUNCION DE TRANSLITERACION Y TRADUCCION


//FUNCION TRANSLITERAR
function trs(textoTransliteracion , idiomaTrs){                   
                                    var  datos  =  [ { "Text" : textoTransliteracion } ] ;
       
                                    // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
                                    var  direccion  =  'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language='+ idiomaTrs + '&fromScript=' + codigoIdioma + '&toScript=latn'  
                                
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
                                                            transliteracion = respuesta.data[0].text;                                                          
                                                            console.log ( "LA TRANSLITERACION ES: " + transliteracion  );
                                                            textoTransliteracion = textoTransliteracion.toLowerCase();


                                                            console.log("DESEAS SEGUIR TRANSLITERANDO? SI ES ASI ESCRIBE EL TEXTO; CASO CONTRARIO ESCRIBE (SALIR)");
                                                            textoTrasliteracion = prompt(" ");
                                                            textoTrasliteracion = textoTrasliteracion.toLowerCase();
                                                            if(textoTransliteracion == "salir"){
                                                            console.log("GRACIAS POR USAR EL SERVICIO DE TRANSLITERACION");

                                                            console.log(" TE PUEDO AYUDAR EN ALGO MAS?, SI ES ASI ESCRIBE EL NOMBRE DE LA FUNCIONALIDAD, CASO CONTRARIO SOLO DI (CHAO)");
                                                            ingreso = prompt(" ");
                                                            if(ingreso == "chao" || ingreso == "CHAO"){
                                                            console.log(" CHAO!!! RECUERDA QUE SIEMPRE ESTARE AQUI PARA TI!");
                                                            }else{
                                                            all(ingreso);
                                                            }

                                                            }else{
                                                            trs (textoTransliteracion , idiomaTrs);
                                                            };
                                                        })
                                                        // cachamos el error en caso de haberlo
                                                        .catch (  error  =>  console.log (  error  ) ) ;
                                                    }
// FIN FUNCION TRANSLITERAR

// FUNCION TRADUCCION DE IMAGENES ESTA FUNCION SE DIVIDE A SU VEZ EN TRES FUNCIONES INTRCONECTADAS ENTRE SI 

function traImages(  idiomaIma ){
    console.log("Escribe el link a continuacion")
        var link = prompt("");
    var  datos  =   { "url" : link }  ;
    var respuesta2 ;
    
       
            // Guardamos la dirección del servicio (endpoint, punto de acceso) en una variable
            var  direccion  =  'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.2/ocr?language=' + idiomaIma + '&detectOrientation=true&model-version=latest' ;
        
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
                                         respuesta2 = respuesta.data.regions[0].lines;
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
