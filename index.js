const puppeteer = require('puppeteer')
const fs = require('fs')
const ejs = require('ejs')

async function printPDF(template, css=null, data, optionsPDF) {
    const browser = await puppeteer.launch({headless: true, ignoreDefaultArgs: ['--disable-extensions']})
    const page = await browser.newPage()

    let html_str = fs.readFileSync(template)
    let html_rendered = ejs.render(html_str.toString(), data)

    await page.goto(`data:text/html, ${html_rendered}`, {
        waitUntil: ['load', 'domcontentloaded', 'networkidle0']
    })
    if(css){
        await page.addStyleTag(css)
    }

    let pdf = await page.pdf(optionsPDF)
    await page.close()
    let result = await pdf
    return result
}

module.exports = printPDF