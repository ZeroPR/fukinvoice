import puppeteer from 'puppeteer'
import fs from 'fs'
import ejs from 'ejs'

async function printPDF(template, css, data, optionsPDF) {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()

    let html_str = fs.readFileSync(template)
    let html_rendered = ejs.render(html_str.toString(), data)

    await page.goto(`data:text/html, ${html_rendered}`, {
        waitUntil: ['load', 'domcontentloaded', 'networkidle0']
    })
    await page.addStyleTag(css)

    return await page.pdf(optionsPDF)
}

export default printPDF