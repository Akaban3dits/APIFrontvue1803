
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarDepa">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.nombre" id="user">
                <label for="" class="label">Departamento</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DDepa' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DDepa' }" class="submitBtn" id="finaliza"
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
    name: "EDepa",
    components: {
    },
    data: function () {
        return {
            pkDepartamento: null,
            form: {
                "pkDepartamento": "",
                "nombre": ""
            },
        }
    },


    methods: {
        agregarDepa() {

            
            axios.put("https://localhost:7294/Departamento?id=" + this.pkDepartamento, this.form).then
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
    mounted: function (pkDepartamento) {
        this.pkDepartamento = this.$route.params.pkDepartamento;
        console.log(this.pkDepartamento);
        axios.get("https://localhost:7294/Departamento/" + this.pkDepartamento)
            .then(datos => {
                this.form.pkDepartamento = datos.data.value.result.pkDepartamento;
                this.form.nombre = datos.data.value.result.nombre;
                console.log(this.form);
            });
    }
}
</script>