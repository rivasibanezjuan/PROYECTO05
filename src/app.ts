import { leerTeclado } from './vistas/entradaTeclado'
import { Automovil } from './models/automoviles'
import { menu, submenu } from './vistas/menu'
       
const main = async () => {
let n : number
let automoviles : Array<Automovil> = new Array()
do {
    n = await menu ()
    switch(n){

        case 1:
            console.log("Se va a proceder a crear un automovil nuevo")
            let matricula: string, modelo: string, consumo: number    
            try {
                
                matricula =  await leerTeclado('Por favor, introduzca la matricula del automovil')
                modelo =  await leerTeclado('Por favor, introduzca el modelo del automovil')
                consumo = parseInt( await leerTeclado('Por favor, introduzca el consumo del automovil (L/100KM)'))
                
                let automovil=new Automovil(matricula, modelo, consumo)
                let existe = false
                
                automoviles.forEach(automovil => {
                    if (automovil.modelo==automovil.modelo){
                        existe=true
                    }
                });
                if (existe){
                    console.log('Este automovil ya existe')
                } else{
                    automoviles.push(automovil)
                }
            } catch (error) {
                console.log(error)
            
            }
            case 2:

                if (automoviles.length==0){
                    
                    console.log('No se localiza ningún automovil')

                } else {
                    
                    console.log('Imprimiendo automoviles...')
                    automoviles.forEach(automovil => {
                    console.log(`${automovil.imprimirAutomovil()}`)
                    });
                }
                
                break

            case 3:

                if (automoviles.length==0){

                    console.log('No se localiza ningún automovil')

                } else {

                    let m1:string
                    console.log('Debe usted elegir un automovil, a continuacion se le pedira la matricula y le mostraremos los automoviles creados')
                    automoviles.forEach(Automovil => {
                        console.log(`${Automovil.imprimirAutomovil()}`)

                    });

                    m1=await leerTeclado('Por favor, introduzca la matricula del automovil')
                    let index:number=-1
                    automoviles.forEach(automovil => {
                        
                        if(automovil.matricula==m1){

                           index=automoviles.indexOf(automovil)

                        } else {

                            console.log('El automovil introducido no existe, pruebe otra vez')

                        }
                    });

                    if(index!=-1){

                        let n2:number

                        do {

                            n2 = await submenu()
                            switch(n2){

                                case 1:

                                    console.log('Atencion, va a eliminar un automovil')
                                    
                                    if (automoviles.length==0){
                                       
                                        console.log('No se localiza ningún automovil')
                                    
                                    } else {
                                       
                                        console.log('Dispone de los siguientes automoviles')
                                        automoviles.forEach(automovil => {
                                            console.log(`${automovil.imprimirAutomovil()}`)

                                        });

                                        let eliminar:String
                                        eliminar=await leerTeclado('Por favor, introduzca la matricula del automovil a eliminar')
                                        let e:boolean=false
                                        let index=0

                                        // no acabado *
                                    }

                                    break

                                case 2:

                                    if(automoviles[index].arranque){

                                        try {

                                            automoviles[index].arrancado()
                                            console.log('Apagando automovil')

                                        } catch (error) {

                                            console.log(error)

                                        }

                                    } else {

                                        console.log('Encendiendo automovil')
                                        automoviles[index].arrancado()

                                    }

                                    break

                                case 3:

                                    let tiempo:number
                                    try {

                                        tiempo=parseInt(await leerTeclado("Por favor, introduzca el tiempo (H) del automovil a la velocidad actual"))
                                        console.log(`El automovil ha consumido ${automoviles[index].consumido(tiempo)} litros`)

                                    } catch (error) {
                                        console.log(error)
                                    }

                                    break

                                case 0:

                                    console.log('\n--Regresando a la lista de automoviles--')

                                    break

                                default:

                                    console.log("Opción incorrecta")

                                    break
                            }
                        } while (n2!=0);
                    }
                }
                break
            case 0:
                console.log('\n-- ADIÓS --')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()