import printPDF from './index'
import path from 'path';
import fs from 'fs'

const template = './templates/example.html'
const options = {
    preferCSSPageSize: true,
    path: path.resolve('pdf', 'example.pdf')
}
const data = {
    greetings: 'Hola Mundo',
    date: '20/06/1993',
    items: [
        {itemNumber: 1},
        {itemNumber: 2},
        {itemNumber: 3},
        {itemNumber: 4},
        {itemNumber: 5},
        {itemNumber: 6},
        {itemNumber: 7}
    ],
    style: fs.readFileSync('./templates/example.css').toString()
}

printPDF(template, data, options)
.then(r => {
    console.log(r)
    process.exit()
})
.catch(err => {
    console.log(err)
})