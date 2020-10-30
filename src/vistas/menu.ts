import  {  leerTeclado  }  from  './entradaTeclado'

export  const  menu  =  async  ( )  =>  {
    let  n : number
    console . log ( '\n' )
    console . log ( '1.- Introducir automovil' )
    console . log ( '2.- Ver automoviles' )
    console . log ( '3.- Elegir automovil' )
    console . log ( '0.- Salir' )
    n  =  parseInt (  await  leerTeclado ( 'Opción: ' )  )
    return  n
}

export  const  submenu  =  async  ( )  =>  {
    let  n : number
    console . log ( '\ n' )
    console . log ( '1.- Borrar automovil' )
    console . log ( '2.- Arrancar - Apagar' )
    console . log ( '3.- Calcular consumo' )
    console . log ( '0.- Salir' )
    n  =  parseInt (  await  leerTeclado ( 'OPCIÓN: ' )  )
    return  n
}