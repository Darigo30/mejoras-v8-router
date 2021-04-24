<template>
    <div class="administrador">
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h1 v-if="id === 'simple'" ><strong>Bienvenido a la página de  {{ id  }}</strong></h1>
                            <h2 v-if="id === 'avanzado'" ><strong>Esta página de administración está en construcción. Intente como administrador simple</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>

export default {
   props: ["id"],
};
</script>
