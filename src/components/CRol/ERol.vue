
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarRol">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.nombre" id="user">
                <label for="" class="label">Rol</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DRol' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DRol' }" class="submitBtn" id="finaliza"
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
    name: "ERol",
    components: {
    },
    data: function () {
        return {
            pkRol: null,
            form: {
                "pkRol": "",
                "nombre": ""
            },
        }
    },


    methods: {
        agregarRol() {

            
            axios.put("https://localhost:7294/Rol?id=" + this.pkRol, this.form).then
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
    mounted: function (pkRol) {
        this.pkRol = this.$route.params.pkRol;
        console.log(this.pkRol);
        axios.get("https://localhost:7294/Rol/" + this.pkRol)
            .then(datos => {
                this.form.pkRol = datos.data.value.result.pkRol;
                this.form.nombre = datos.data.value.result.nombre;
                console.log(this.form);
            });
    }
}
</script>