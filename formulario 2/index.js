"use strict"

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        edad: 0,
        errores: []
    },

    methods: {
        validar(evento) {
            this.errores = [];
            if (this.nombre == "") {
                this.errores.push("El nombre está vacío");
            }

            if (this.nombre.includes(" ")) {
                this.errores.push("El nombre no debe contener espacios");
            }

            if (this.edad < 18 || this.edad > 99) {
                this.errores.push("La edad permitida es entre 18 y 99 años");
            }

            if (this.errores.length) {
                evento.preventDefault();
              }
              
            if (this.errores.length == 0) {
                evento.target.submit();
            }

        }

    }
})