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
          <span><RouterLink :to="{path: '/DDepa'}">Departamentos</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DEmp'}">Empleados</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DFac'}">Facturas</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DPuesto'}">Puestos</RouterLink></span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a>
          <span><RouterLink :to="{path: '/DRol'}">Roles</RouterLink></span>
        </a>
      </li>
      
    </ul>
  </div>
  </div>
  <div class="col"><RouterView></RouterView>
    
  </div>
</template>
