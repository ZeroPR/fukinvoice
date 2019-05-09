import puppeteer from 'puppeteer'
import fs from 'fs';
import ejs from 'ejs';
import mustache from 'mustache'

async function printPDF(template, data, optionsPDF) {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    // let html_str = fs.readFileSync(template)
    // console.log(html_str)
    // let html_rendered = ejs.render(html_str.toString(), data)
    let html_rendered = mustache.render(template, data)
    console.log(html_rendered)
    await page.goto(`data:text/html, ${html_rendered}`, {
        waitUntil: ['load', 'domcontentloaded', 'networkidle0']
    })
    return await page.pdf(optionsPDF)
}

export default printPDF