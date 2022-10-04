class Tarjeta {
    #titulo="def titulo";
    #imagen="def imagen";
    #subtitulo=" por def";
    #descripcion="def descrop";
    #link="def link";



    /**
     * construye un objeto tarjeta
     * @param {string} titulo de la tarjeta
     * @param {string} imagen de la tarjeta URL
     */
    constructor(titulo, subtitulo, descripcion, link){
        this.#titulo= titulo;
        this.#subtitulo=subtitulo;
        this.#descripcion= descripcion;
        this.#link= link;
    }

    generarHtml(){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.#titulo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.#subtitulo}</h6>
                <p class="card-text">${this.#descripcion}</p>
                <a href="#" class="card-link">${this.#link}</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
        `;
    }


}

export {Tarjeta};