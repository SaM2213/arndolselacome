//const faker = require("faker");
const boom = require("@hapi/boom");
const crypto = require("crypto");
const { query } = require("express");

//const getConnection = require("../libs/postgres");

//const pool = require("../libs/postgres.pool");
const sequelize = require("../libs/sequelize");

class ProductosService {

  constructor() {
    //this.productos = [];
    //this.generarDatos();
    // this.pool = pool;
    // this.pool.on("error",(err) => console.log(err));
  }

  // generarDatos(){
  //   const size =10;
  //   for (let index = 0;index <size; index ++){
  //     this.productos.push({
  //       id:faker.datatype.uuid(),
  //       nombreFunko: faker.commerce.productName(),
  //       precio: parseInt(faker.commerce.price()),
  //       imagen: faker.image.imageUrl(),
  //       esVisible : faker.datatype.boolean()
  //     });
  //   }
  // }

  async create(producto){
    // const pre = producto.precio;
    // if (pre < 10) {
    //   throw boom.notFound("El monto es demasiado bajo");
    // } else {
    //   producto.id = faker.datatype.uuid();
    // this.productos.push(producto);
    // }
    const nuevoProducto = {
      id: crypto.randomUUID(),
      ...producto
    }
    const {id, nombreFunko, precio} = nuevoProducto;
    const query = "insert into productos (id,nombreFunko,precio) values ('"+id+"',' " + nombreFunko + "', " + precio + ")";
    await sequelize.query(query);
    // const cliente = await getConnection();
    // await cliente.query("insert into productos (id,nombreFunko,precio) values ('"+id+"',' " + nombreFunko + "', " + precio + ")");

    return nuevoProducto;
  }

  async update(id,producto){

    // const posicion = this.productos.findIndex(item =>item.id == id);
    // if (posicion === -1) {
    //   throw boom.notFound("Producto no encontrado");
    // }
    // this.productos[posicion] =producto;
    // return this.productos[posicion];
    return producto;
  }

  async updateParcial(id,productoParcial){
    // const posicion = this.productos.findIndex(item =>item.id == id);
    // if (posicion === -1) {
    //   throw boom.notFound("Producto no encontradoooo");
    // }
    // const producto = this.productos[posicion];
    // this.productos[posicion] ={
    //   ...producto,
    //   ...productoParcial
    // };
    // return this.productos[posicion];
    return productoParcial;
  }

  delete(id){
    // const posicion = this.productos.findIndex(item =>item.id == id);
    // if (posicion === -1) {
    //   throw boom.notFound("Producto no encontra");
    // }
    // this.productos.splice(posicion,1);
    // return {
    //   mensaje : "operacion realizada",
    //   id
    // };
    return id;
  }

  async findAll(){
  //   return new Promise((resolve,reject)=>{
  //   setTimeout(() =>{
  //     resolve (this.productos);
  //   },
  //     1000)
  //  });
  //Base de datos//
  const query = 'select * from productos';
  const [data] = await sequelize.query(query);
  // const cliente = await getConnection();
  // const salida = await cliente.query('select * from productos');
  return data;
  }

  findBy(id){
    // const producto = this.productos.find(item =>item.id === id);
    // if (!producto){
    //   throw boom.notFound("Producto no encontrado");
    // }
    // if (!producto.esVisible){
    //   throw boom.forbidden("Producto no accesible");
    // }
    // return producto;
    return id;
  }

}




module.exports = ProductosService;
