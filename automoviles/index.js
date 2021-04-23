"use strict";

let app = new Vue({
    el: "#app",
    data: {
        patente: "",
        marca: "",
        modelo: "",
        color: "",
        descripcion: "",

        autos: [],

    },

    methods: {

        agregar() {
            this.autos.push({
                patente: this.patente,
                marca: this.marca,
                modelo: this.modelo,
                color: this.color,
                descripcion: this.descripcion,
            })
            
        
        }


    }
})