const inputName = document.getElementById('inputName'),
    inputEmail = document.getElementById('inputEmail'),
    inputAge = document.getElementById('inputAge'),
    inputCountry = document.getElementById('inputCountry'),
    inputDni = document.getElementById('inputDni'),
    buttonPrint = document.getElementById('buttonPrint'),
    table = document.getElementById('table'),
    form = document.querySelector("#form");

const countrys = ['Venezuela','Colombia','Peru','Chile'];

for (let i = 0; i < countrys.length; i++) {
    const option = document.createElement('option');
    option.textContent = countrys[i];
    option.setAttribute('value',countrys[i]);
    inputCountry.appendChild(option);
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const tr = document.createElement('tr');
    
    const thName = document.createElement('th');
    thName.className= 'th';
    thName.textContent = inputName.value;
    tr.appendChild(thName);
    // inputName.value = '';

    const thEmail = document.createElement('th');
    thEmail.className = 'th';
    thEmail.textContent = inputEmail.value;
    tr.appendChild(thEmail);
    // inputEmail.value = '';

    const thAge = document.createElement('th');
    thAge.className = 'th';
    thAge.textContent = inputAge.value;
    tr.appendChild(thAge);
    // inputAge.value = '';

    const thCountry = document.createElement('th');
    thCountry.className = 'th';
    thCountry.textContent = inputCountry.value;
    tr.appendChild(thCountry);
    // inputCountry.value = '';

    const thDni = document.createElement('th');
    thDni.className = 'th';
    thDni.textContent = inputDni.value;
    tr.appendChild(thDni);
    // inputDni.value = '';

    table.appendChild(tr);
    form.reset();
});
