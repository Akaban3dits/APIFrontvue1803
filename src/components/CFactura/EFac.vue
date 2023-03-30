
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarUsuario">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.razonSocial" id="user">
                <label for="" class="label">Razon Social</label>
            </div>

            <div class="inputContainer">
                <input type="password" class="input" placeholder="a" v-model="form.rfc" id="password">
                <label for="" class="label">RFC</label>
            </div>
            <div class="inputContainer">
                <label for="" class="label1">Cliente</label>
                <select class="input" name="fkrol" id="fkrol" v-model="form.fkCliente">
                    <option v-for="clie in Cliente" :value="clie.pkCliente" :key="clie.pkCliente">{{ clie.nombre
                    }}</option>
                </select>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DFac' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DFac' }" class="submitBtn" id="finaliza"
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
    name: "EFac",
    components: {
    },
    data: function () {
        return {
            pkFactora: null,
            form: {
                "pkFactora": "",
                "razonSocial": "",
                "rfc": "",
                "fkCliente": ""
            },
            Cliente: []
        }
    },


    methods: {
        agregarUsuario() {


            axios.put("https://localhost:7294/Factura?id=" + this.pkFactora, this.form).then
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
    mounted: function (pkFactora) {
        this.pkFactora = this.$route.params.pkFactora;
        console.log(this.pkFactora);
        axios.get("https://localhost:7294/Factura/" + this.pkFactora)
            .then(datos => {
                this.form.pkFactora = datos.data.value.result.pkFactora;
                this.form.razonSocial = datos.data.value.result.razonSocial;
                this.form.rfc = datos.data.value.result.rfc;
                this.form.fkCliente = datos.data.value.result.fkCliente;
                console.log(this.form);
            });
        axios.get("https://localhost:7294/Cliente").then((result) => {
            console.log(result.data);
            this.Cliente = result.data.result;
        });
    }

}
</script>