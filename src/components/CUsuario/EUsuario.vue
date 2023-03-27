
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarUsuario">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.user" id="user">
                <label for="" class="label">Usuario</label>
            </div>

            <div class="inputContainer">
                <input type="password" class="input" placeholder="a" v-model="form.password" id="password">
                <label for="" class="label">Password</label>
            </div>
            <div class="inputContainer">
                <input type="number" class="input" placeholder="a" v-model="form.fkempleado" id="fkempleado">
                <label for="" class="label">Fkempleado</label>
            </div>
            <div class="inputContainer">
                <input type="number" class="input" placeholder="a" v-model="form.fkrol" id="fkrol">
                <label for="" class="label">Fkrol</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DUsuario' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DUsuario' }" class="submitBtn" id="finaliza"
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
    name: "EUsuario",
    components: {
    },
    data: function () {
        return {
            pkUsuario: null,
            form: {
                "pkUsuario": "",
                "user": "",
                "password": "",
                "fkempleado": "",
                "fkrol": "",
            },
        }
    },


    methods: {
        agregarUsuario() {

            
            axios.put("https://localhost:7294/Usuario?id=" + this.pkUsuario, this.form).then
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
    mounted: function (pkUsuario) {
        this.pkUsuario = this.$route.params.pkUsuario;
        const Fecha= this.form.fechaderegistro;
        console.log(this.pkUsuario);
        axios.get("https://localhost:7294/Usuario/" + this.pkUsuario)
            .then(datos => {
                this.form.pkUsuario = datos.data.value.result.pkUsuario;
                this.form.user = datos.data.value.result.user;
                this.form.password = datos.data.value.result.password;
                this.form.fkempleado = datos.data.value.result.fkempleado;
                this.form.fkrol = datos.data.value.result.fkrol;
                console.log(this.form);
            });
    }
}
</script>