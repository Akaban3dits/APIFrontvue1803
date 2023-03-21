<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Clientes</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="cliente.Nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del cliente</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="apellidos"
                id="apellidos"
                v-model="cliente.Apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa los apellidos del cliente</small
              >
            </div>
            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="cliente.Telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el telefono del cliente</small
              >
            </div>
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                v-model="cliente.name"
                aria-describedby="helpId"
                id="emamil"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del articulo</small
              >
            </div>
            <div class="form-group">
              <label for="">Dirección:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                v-model="cliente.Dirección"
                aria-describedby="helpId"
                id="direccion"
                placeholder="Dirección"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la dirección del cliente</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.cliente);
  
        var datosEnviar = {
          Nombre: this.cliente.Nombre,
          Apellidos: this.cliente.Apellidos,
          Telefono: this.cliente.Telefono,
          Email: this.cliente.Email, 
          Dirección: this.cliente.Dirección
        };
  
        axios.post("https://localhost:7294/Cliente/Create", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "Listar";
          });
      },
    },
  };
  </script>