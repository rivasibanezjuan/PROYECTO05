export class Automovil {
    private _matricula : string 
    private _modelo : string 
    private _consumo : number
    private _velocidad : number
    private _arranque : boolean

    constructor (matricula : string, modelo : string, consumo : number){
        this._matricula = matricula
        this._modelo = modelo
        this._consumo = consumo
        this._velocidad = 0
        this._arranque = true
}

public get matricula(){

    return this._matricula

}

public get modelo(){

    return this._modelo

}

public get consumo(){

    return this._consumo

}

public get velocidad(){

    return this._velocidad

}

public get arranque(){

    return this._arranque

}

public arrancado(){

    if(this._arranque==false){

        this._arranque=true

    }else{

        if (this._velocidad!=0){

            throw 'No puede apagar el automovil si se encuentra circulando, la velocidad debe de ser 0 pues usted estara parado'

        } else {

            this._arranque=false
        }
    }
}

public set velocidad(n:number){

    if(this._arranque==false){

        throw 'No es posible modificar la velocidad de un automovil que no esta circulando'

    } else {

        this._velocidad=n
    }
}

public consumido(t:number){

    if(!this._arranque || this._velocidad==0){

        throw 'No es posible el calculo del consumo de un automovil que no esta circulando'

    } else {

        return (this._velocidad/t) * (this._consumo/100)
    }
}

public imprimirAutomovil(){

    return `${this._modelo} con matricula ${this._matricula}  y consumo de ${this._consumo} (L) cada 100 km`

}

}