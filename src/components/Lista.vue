<template>
    <div>
      <div class="card">
        <div class="card-header">Articulos</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Proveedor</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articulos: [],
    };
  },
  created: function () {
    this.consultarArticulos();
  },
  methods: {
    consultarArticulos() {
      axios.get("https://localhost:7053/articulos").then((result) => {
        console.log(result.data);
        this.articulos = result.data;
      });
    },

    borrarArticulo(id) {
      console.log(id);

      axios.delete("https://localhost:7053/articulos/borrar/" + id);

      window.location.href = "Listar";
    },
  },
}
</script>