class Zapatillas{
    #marca;
    #color;
    #foto;
    #funcionalidad;

    constructor (marca, color, foto, funcionalidad){
        this.#marca=marca;
        this.#color=color;
        this.#foto=foto;
        this.#funcionalidad= funcionalidad;

    }

    getNombre(){
        return this.#marca;
    }
    
    getColor(){
        return this.#color;
    }
    
    getFoto(){
        return this.#foto;
    }
    
    getFuncionalidad(){
        return this.#funcionalidad;
    }

}



export {Zapatillas};