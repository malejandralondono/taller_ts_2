import { series } from './dataSeries.js';
const table = document.getElementById('TableBody');
const cardDetails = document.getElementById('cardDetails');
const detailsImage = document.getElementById('detailsImage');
const detailsTitle = document.getElementById('detailsTitle');
const detailsDescription = document.getElementById('detailsDescription');
const detailsLink = document.getElementById('detailsLink');
let promedio = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length);
series.forEach(series => {
    const row = table.insertRow();
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
const row = table.insertRow();
row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;
