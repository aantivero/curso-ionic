var faker = require('faker');

function generarProductos() {
    var productos = [];

    for (var id = 0; id < 20; id++) {
        var nombre = faker.commerce.productName();
        var descripcion = faker.commerce.product();
        var precio = faker.commerce.price();

        productos.push({
            "id": id,
            "nombre": nombre,
            "descripcion": descripcion,
            "precio": precio
        });
    }
    return {"productos": productos}
}
module.exports = generarProductos;