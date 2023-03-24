<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="col">
    <div class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DCliente'}">Cliente</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Usuarios</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Departamentos</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Empleados</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Facturas</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Puestos</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DUsuario'}">Roles</RouterLink></span>
        </a>
      </li>
      
    </ul>
  </div>
  </div>
  <div class="col"><RouterView></RouterView>
    
  </div>
</template>
