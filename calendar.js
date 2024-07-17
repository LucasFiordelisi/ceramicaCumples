const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const birthdays = {
    "Enero": ["19: Anahi ♑", "28: Angi ♒"],
    "Febrero": ["22: Juli ♒"],
    "Marzo": ["20: Kiara ♓","24: Delfi ♈"],
    "Abril": ["2: Lucas ♈"],
    "Mayo": ["5: Mari ♉"],
    "Junio": ["*: ---"],
    "Julio": ["5: Ale(Rubia) ♋","7: Pili ♋"],
    "Agosto": ["3: Tuly ♌"],
    "Septiembre": ["*: ----"],
    "Octubre": ["*: -----"],
    "Noviembre": ["21: Agos ♏", "28: Luci ♐"],
    "Diciembre": ["6: Ale Ch ♐"]
};

window.addEventListener('DOMContentLoaded', (event) => {
    months.forEach((month, index) => {
        const monthDiv = document.getElementById(`month-${index + 1}`);
        monthDiv.innerHTML = `<h3>${month}</h3>`;
        
        if (birthdays[month]) {
            const ul = document.createElement('ul');
            ul.className = 'birthdays';
            birthdays[month].forEach(birthday => {
                const li = document.createElement('li');
                li.textContent = birthday;
                ul.appendChild(li);
            });
            monthDiv.appendChild(ul);
        }
    });
});
