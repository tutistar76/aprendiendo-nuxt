<template>
<div>
    <h1>Nuevo Producto</h1>
<b-container   class="bv-example-row">
    <b-row>
        <b-col cols="5">
        <form name="from producto">
            <div class="form-group">
                <label for="url">Imagen</label>
                <input type="text" class="form-control" name="url" placeholder="Ingrese url">
                <label for="Nombre">Nombre del producto</label>
                <input type="text" class="form-control" name="Nombre del procucto" placeholder="Ingrese producto">
                <label for="url">Precio</label>
                <input type="text" class="form-control" name="Precio" placeholder="Ingrese presio">
                <label for="url">Cantidad</label>
                <input type="text" class="form-control" name="Cantidad" placeholder="Ingrese cantidad">
            </div>
            <div class="row" id="galeria"></div>
        </form>
        </b-col>
    </b-row>
    <b-row class="text-center">
        <b-col lg="4" class="pd-2">
            <b-button variant="primary">Guardar</b-button>
        </b-col>
    </b-row>
</b-container>
    </div>
</template>
