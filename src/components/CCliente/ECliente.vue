
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarCliente">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.nombre" id="nombre">
                <label for="" class="label">Nombre(s)</label>
            </div>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.apellidos" id="apellidos">
                <label for="" class="label">Apellido(s)</label>
            </div>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.telefono" id="telefono">
                <label for="" class="label">Telefono</label>
            </div>

            <div class="inputContainer">
                <input type="email" class="input" placeholder="a" v-model="form.email" id="email">
                <label for="" class="label">Email</label>
            </div>
            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.direccion" id="direccion">
                <label for="" class="label">Direccion</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DCliente' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DCliente' }" class="submitBtn" id="finaliza"
                style="display: none;">Finalizar</router-link>

            <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                {{ smg }}
            </div>
        </form>
    </div>
</template>
    
<script>
import axios from 'axios';
export default {
    name: "ECliente",
    components: {
    },
    data: function () {
        return {
            pkCliente: null,
            form: {
                "pkCliente": "",
                "nombre": "",
                "apellidos": "",
                "telefono": "",
                "email": "",
                "direccion": "",
            },
        }
    },


    methods: {
        agregarCliente() {
            axios.put("https://localhost:7294/Cliente?id=" + this.pkCliente, this.form).then
                (result => {
                    if (result.status == 200) {
                        document.getElementById("alert").style.display = "block";
                        document.getElementById('botonesopcion').style.display = "none";
                        this.smg = "Actualizado";
                        document.getElementById('finaliza').style.display = "block";
                        console.log(result.data.result);
                    }

                });

        }
    },
    mounted: function (pkCliente) {
        this.pkCliente = this.$route.params.pkCliente;
        console.log(this.pkCliente);
        axios.get("https://localhost:7294/Cliente/" + this.pkCliente)
            .then(datos => {
                this.form.pkCliente = datos.data.value.result.pkCliente;
                this.form.nombre = datos.data.value.result.nombre;
                this.form.apellidos = datos.data.value.result.apellidos;
                this.form.telefono = datos.data.value.result.telefono;
                this.form.email = datos.data.value.result.email;
                this.form.direccion = datos.data.value.result.direccion;
                console.log(this.form);
            });
    }
}
</script>