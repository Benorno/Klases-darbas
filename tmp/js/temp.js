//JS Funkcijos

//7 uzduotis
let studentas = {
    firstName: 'Tomas',
    lastName: 'Tomauskas',
    school: 'KTU',
    course: 4,
    grades: [10, 9, 5, 7, 4]
};
document.write('dot notation<br>');
document.write(`${studentas.firstName} ${studentas.lastName} mokosi ${studentas.school}, ${studentas.course} kurse, jo pažymiai ${studentas.grades} <br>`);
document.write('bracket notation<br>');
document.write(`${studentas['firstName']} ${studentas['lastName']} mokosi ${studentas['school']}, ${studentas['course']} kurse, jo pažymiai ${studentas['grades']} <br>`)

//8uzduotis
let pazymiai = studentas.grades;
let print = [];
for (let i = 0; i < pazymiai.length; i++) {
    print += studentas.grades[i] + '; ';
}
document.write('pazymiai <br>')
document.write(`${print} <br>`)

//9uzduotis
let naujiPazymiai = [];
for (let o = 0; o < studentas.grades.length; o++) {
    naujiPazymiai += studentas.grades[o] + 1 + '; ';
    if (studentas.grades[o] >= 10) {
        naujiPazymiai = '*klaida: pazimys uz 10 negali buti didesnis* <br>';
    }
}
document.write('pakelti pazymiai <br>')
document.write(`${naujiPazymiai} <br>`)

//10uzduotis
let paskutiniaiPazymiai = studentas.grades.slice(-3);
let isvestiSuma = 0;

for (let p = 0; p < paskutiniaiPazymiai.length; p++) {
    isvestiSuma += paskutiniaiPazymiai[p];
}
document.write('pazymiu suma <br>')
document.write(`${isvestiSuma} <br>`)

//11uzduotis
let lastPazymiai = studentas.grades.slice(-2);
let suma = 1;

for (let a = 0; a < lastPazymiai.length; a++) {
    suma = suma * lastPazymiai[a];
}
document.write('pazymiu sandauga <br>')
document.write(`${suma} <br>`)

//12uzduotis
if (typeof studentas.course === 'number') {
    skaicius = typeof studentas.course;  //grazinama kaip number
} else {
    skaicius = '*klaida: studentas.course NERA number tipo*';
}
document.write('typeof patikra <br>')
document.write(`${skaicius} <br>`);

//13uzduotis
if (typeof studentas.course === 'number') {
    patikra = studentas.course === 4;  //grazinama kaip true
} else {
    patikra = '*klaida: tipas NERA number tipo*';
}
document.write('Patikrinimas ar mokosi 4 kurse <br>')
document.write(`${patikra} <br>`)

//14uzduotis
if (studentas.course === 4) {
    zinute = 'studentas ' + studentas.firstName + ' ' + studentas.lastName + ' yra abiturientas';
} else if (studentas.course > 4) {
    zinute = '*klaida: yra tik 4 kursai*';
} else {
    zinute = 'Studentui ' + studentas.firstName + ' ' + studentas.lastName + ' dar toli iki mokslu baigimo';
}
document.write('Ar abiturientas? <br>')
document.write(`${zinute} <br>`)

//15uzduotis
//funkcija 'suma' jau buvo naudota 11uzduotyje
function addition(a, b) {
    return a + b;
}

//16uzduotis
document.write('nuo 1 iki 100 <br>')
let max = '..........'.length; //10 tasku '..........'
                            //----10 tasku * 10 tasku = 100
for(let qty = '.'.length;qty <= (max * max);qty++){
    document.write(`${qty}`);
}

//17uzduotis
