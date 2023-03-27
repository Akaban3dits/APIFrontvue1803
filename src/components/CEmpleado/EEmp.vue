
<template>
    <div class="signupFrm">
        <form action="" class="form" v-on:submit.prevent="agregarUsuario">
            <h1 class="title">Actualizar</h1>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.nombre" id="user">
                <label for="" class="label">Nombre</label>
            </div>

            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.apellidos" id="password">
                <label for="" class="label">Apellidos</label>
            </div>
            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.direccion" id="fkempleado">
                <label for="" class="label">Direccion</label>
            </div>
            <div class="inputContainer">
                <input type="text" class="input" placeholder="a" v-model="form.ciudad" id="fkrol">
                <label for="" class="label">Ciudad</label>
            </div>
            <div class="inputContainer">
                <input type="number" class="input" placeholder="a" v-model="form.fkPuesto" id="fkrol">
                <label for="" class="label">Puesto</label>
            </div>
            <div class="inputContainer">
                <input type="number" class="input" placeholder="a" v-model="form.fkDepartamento" id="fkrol">
                <label for="" class="label">Departamento</label>
            </div>
            <div class="inputContainer" role="group" id="botonesopcion">
                |<button type="submit" class="submitBtn">Agregar</button>|
                |<router-link :to="{ path: '/DEmp' }" class="submitBtn">Cancelar</router-link>|
            </div>
            <router-link :to="{ path: '/DEmp' }" class="submitBtn" id="finaliza"
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
    name: "EEmp",
    components: {
    },
    data: function () {
        return {
            pkEmpleado: null,
            form: {
                "pkEmpleado": "",
                "nombre": "",
                "apellidos": "",
                "direccion": "",
                "ciudad": "",
                "fkPuesto": "",
                "fkDepartamento": ""
            },
        }
    },


    methods: {
        agregarUsuario() {

            
            axios.put("https://localhost:7294/Empleado?id=" + this.pkEmpleado, this.form).then
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
    mounted: function (pkEmpleado) {
        this.pkEmpleado = this.$route.params.pkEmpleado;
        const Fecha= this.form.fechaderegistro;
        console.log(this.pkEmpleado);
        axios.get("https://localhost:7294/Empleado/" + this.pkEmpleado)
            .then(datos => {
                this.form.pkEmpleado = datos.data.value.result.pkEmpleado;
                this.form.nombre = datos.data.value.result.nombre;
                this.form.apellidos = datos.data.value.result.apellidos;
                this.form.direccion = datos.data.value.result.direccion;
                this.form.ciudad = datos.data.value.result.ciudad;
                this.form.fkPuesto = datos.data.value.result.fkPuesto;
                this.form.fkDepartamento = datos.data.value.result.fkDepartamento;
                console.log(this.form);
            });
    }
}
</script>