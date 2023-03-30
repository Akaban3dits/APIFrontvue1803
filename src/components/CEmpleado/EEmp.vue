
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
                <label for="" class="label1">Puesto</label>
                <select class="input" name="fkrol" id="fkrol" v-model="form.fkPuesto">
                    <option v-for="pue in Puesto" :value="pue.pkPuesto" :key="pue.pkPuesto">{{ pue.nombre }}</option>
                </select>
            </div>
            <div class="inputContainer">
                <label for="" class="label1">Departamento</label>
                <select class="input" name="fkrol" id="fkrol" v-model="form.fkDepartamento">
                    <option v-for="dep in Departamento" :value="dep.pkDepartamento" :key="dep.pkDepartamento">{{ dep.nombre
                    }}</option>
                </select>
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
            Departamento: [],
            Puesto: []
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
        const Fecha = this.form.fechaderegistro;
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
        axios.get("https://localhost:7294/Puesto").then((result) => {
            console.log(result.data);
            this.Puesto = result.data.result;
        });
        axios.get("https://localhost:7294/Departamento").then((result) => {
            console.log(result.data);
            this.Departamento = result.data.result;
        });
    }
}
</script>