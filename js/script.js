const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const ROWS = 10
const COLS = 3

const range = length => Array.from({ length }, (_, i) => i)

const renderExcel = () => {
    console.log('entro')
    const $table = $('table')
    const $cabecera = $('thead')
    const $cuerpo = $('tbody')

    const headerHTML = `
    <tr> 
        <th></th>
        ${range(COLS).map(i => `<th>${i}</th>`).join('')}
    </tr>`
    $cabecera.innerHTML = headerHTML

    const bodyHTML = range(ROWS).map(row => {
        return `
        <tr> 
            <td>${row + 1}</td>
            ${range(COLS).map(column => `
                <td data-x="${column}" data-y="${row}">
                    <span></span>
                    <input type="text" value="" />
                </td>
                `).join('')}
        </tr>`
    }).join('')
    $cuerpo.innerHTML = bodyHTML
}

renderExcel()