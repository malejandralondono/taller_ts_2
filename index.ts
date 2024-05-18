import { series } from './dataSeries.js';

const table:HTMLTableElement = document.getElementById('TableBody') as HTMLTableElement;
const cardDetails:HTMLElement = document.getElementById('cardDetails') as HTMLElement;
const detailsImage:HTMLImageElement = document.getElementById('detailsImage') as HTMLImageElement;
const detailsTitle:HTMLElement = document.getElementById('detailsTitle') as HTMLElement;
const detailsDescription:HTMLElement = document.getElementById('detailsDescription') as HTMLElement;
const detailsLink:HTMLAnchorElement = document.getElementById('detailsLink') as HTMLAnchorElement;

let promedio = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length);

series.forEach(series => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<td>${series.id}</td>
                     <td>${series.title}</td>
                    <td>${series.network}</td>
                     <td>${series.seasons}</td>`;
    row.addEventListener('click', () => {
        detailsImage.src = series.image;
        detailsImage.alt = 'Portada de ' + series.title;
        detailsTitle.textContent = series.title;
        detailsDescription.textContent = series.description;
        detailsLink.href = series.website;

    });

});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;    
