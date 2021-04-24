<template>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
                <router-link to="/"> Portada </router-link>
            </li>
            <li class="nav-item" role="presentation">
                <router-link to="/sobremi">Sobre Mi</router-link>
            </li>
            <li class="nav-item" role="presentation">
                <router-link to="/Contacto">Contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
               <router-link to="/UltimoPost/1">último post</router-link>
            </li>
            <li class="nav-item" role="presentation">
               <router-link to="/RutasInexistentes">Rutas Inexistentes</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default{
    name: "Nav",
};
</script>
