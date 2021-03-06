const printPDF = require('./index.js')
const path = require('path')

const dir = './temp'
const template = './templates/invoiceCredito.ejs'
const css = {path:'./templates/ic.css'}
const options = {
    format: 'A4',
    margin: {
        top: '24px',
        bottom: '24px',
        left: '14px',
        right: '14px',
    },
    path: path.resolve('pdf', 'example2.pdf')
}
const data = {
    id: '32714',

    conduce_id: '32714',

    fecha_formateada: '5/9/2019',

    direccion: {
        nombre: 'Direccion'
    },

    empleado: {
        nombre: 'Nombre',
        apellidos: 'Apellido Apellido'
    },

    cliente: {
        id: 'CLT3468',
        nombre: 'Nombre',
        apellidos: 'Apellido Apellido',
        direccion: {
            nombre: 'Direccion'
        },
        telefono: '(787) 215 5552',
        email: 'cliente@mail.com'
    },

    metodo_de_pago: 'crédito',

    carrito: [
        {
            id: 1,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 2,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 3,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },

        {
            id: 1,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 2,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 3,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 1,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 2,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 3,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 1,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 2,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 3,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 1,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 2,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
        {
            id: 3,
            marca: 'Prueba',
            modelo: 'Probando',
            descripcion: 'Probando 123',
            precio_vendido: '$999.99'
        },
    ],

    total: '$999.99',

    mensaje: '¿Dime socio quien tu eres?'
}

printPDF(template, css, data, options).then(
    f => {
        console.log(f)
    }
)
