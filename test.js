import printPDF from './index'
import path from 'path';
import fs from 'fs'

// const template = './templates/conduce.ejs'
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
    // greetings: 'Hola Mundo',
    // date: '20/06/1993',
    // items: [
    //     {itemNumber: 1},
    //     {itemNumber: 2},
    //     {itemNumber: 3},
    //     {itemNumber: 4},
    //     {itemNumber: 5},
    //     {itemNumber: 6},
    //     {itemNumber: 7}
    // ],

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

printPDF(template, css, data, options)
.then(r => {
    console.log(r)
    process.exit()
})
.catch(err => {
    console.log(err)
})