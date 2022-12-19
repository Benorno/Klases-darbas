//(1)
let button = document.getElementById('button');

button.addEventListener('click', greeting);

function greeting() {
    let input = document.getElementById('input');
    input.value = 'Labas, pasauli!';
}

//(2)
let button2 = document.getElementById('sukurti');

button2.addEventListener('click', sukurtiForm)
function sukurtiForm() {
    let form = document.createElement("form");
    form.method = "post";
    form.action = "#";

    let input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.name = "check";

    let input2 = document.createElement("input");
    input2.type = "email";
    input2.name = "email";
    input2.placeholder = "Įveskite savo el. paštą";

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Siųsti";

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(submitButton);

    document.body.appendChild(form);
}
//(3)
let button3 = document.getElementById('pridet');

button3.addEventListener('click', addRow)
function addRow() {
    let table = document.getElementById("lentele");
    let stulpelis1 = document.getElementById("input-stulpelis1").value;
    let stulpelis2 = document.getElementById("input-stulpelis2").value;

    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = stulpelis1;
    cell2.innerHTML = stulpelis2;
}