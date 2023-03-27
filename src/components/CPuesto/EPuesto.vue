
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarPuesto">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.nombre" id="user">
                <label for="" class="label">Puesto</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DPuesto' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DPuesto' }" class="submitBtn" id="finaliza"
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
    name: "EPuesto",
    components: {
    },
    data: function () {
        return {
            pkPuesto: null,
            form: {
                "pkPuesto": "",
                "nombre": ""
            },
        }
    },


    methods: {
        agregarPuesto() {

            
            axios.put("https://localhost:7294/Puesto?id=" + this.pkPuesto, this.form).then
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
    mounted: function (pkPuesto) {
        this.pkPuesto = this.$route.params.pkPuesto;
        console.log(this.pkPuesto);
        axios.get("https://localhost:7294/Puesto/" + this.pkPuesto)
            .then(datos => {
                this.form.pkPuesto = datos.data.value.result.pkPuesto;
                this.form.nombre = datos.data.value.result.nombre;
                console.log(this.form);
            });
    }
}
</script>