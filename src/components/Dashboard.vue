<template>
    <head>
    

  </head>
  <div class="sidebar">
      <a class="active" href="#">Inicio</a>
      <a href="#">Dashboard</a>
      <a href="#">Configuración</a>
    </div>
    <div class="table">
            <div class="table-head">
                <h3>Table</h3>
            </div>
            <div class="table-body">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>PkCliente</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Direccion</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
              <tr v-for="Clientes in Cliente" :key="Clientes.pkCliente">
                <td>{{ Clientes.pkCliente }}</td>
                <td>{{ Clientes.nombre }}</td>
                <td>{{ Clientes.apellidos }}</td>
                <td>{{ Clientes.telefono }}</td>
                <td>{{ Clientes.email }}</td>
                <td>{{ Clientes.direccion}}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="eliminar(Clientes.PkCliente)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
                    </table>
                </div>
            </div>
        </div>
 
</template>
<script>
import axios from "axios";


export default {

  components:{

  },
  data() {
    return {
      Cliente: []
    };
  },
  created: function () {
    this.consultarCliente();
  },
  methods: {
    consultarCliente() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data);
        this.Cliente = result.data.result;

        // console.log(this.Usuarios[1].fkEmpleado);



      //   for (let i = 0; i < this.Usuarios.length; i++) {
      //     this.Empleado.push(this.Usuarios[i].fkEmpleado);
      //   }

      //   if (this.Empleado.length != 0) {
      //     for (let i = 0; i < this.Empleado.length; i++) {
      //       axios.get("https://localhost:7051/Empleado?id=" + this.Empleado[i]).then((result) => {
      //         this.nombresempleados = result.data.result;
      //         console.log(result.data.result.apellidos);
      //       });
      //     }
      //   }
      //   else {
      //     console.log("Array empleados no lleno");
      //   }


       });


    },

    borrarArticulo(id) {
      var pregunta=window.confirm('Esta se seguro de eliminar este registro?');

      if(pregunta===true){
        axios.delete("https://localhost:7294/Cliente/" + id);
        window.location.href = "get";
        
      }else{
        
      }  

    },
    editaregistro() {
    window.location.href="/putUsuario";

    

    },
  },

};
</script>