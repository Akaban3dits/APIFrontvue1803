<template>
    <div>
      <div class="card">
        <div class="card-header">Cliente</div>
  
        <div class="card_body">
          <table class="table">
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
              <tr v-for="Cliente in Cliente" :key="Cliente.PkCliente">
                <td>{{ Cliente.PkCliente }}</td>
                <td>{{ Cliente.Nombre }}</td>
                <td>{{ Cliente.Apellidos }}</td>
                <td>{{ Cliente.Telefono }}</td>
                <td>{{ Cliente.Email }}</td>
                <td>{{ Cliente.Direccion}}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="eliminar(Cliente.PkCliente)"
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
        console.log(result.data.result);
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