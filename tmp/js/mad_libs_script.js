function makeMadLib() {
    let noun = document.getElementById('noun').value;
    let adj = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    if (noun == null || adj == null || person == null) {
        document.getElementById('story').innerHTML = 'Please fill in all the inputs';
    } else {
        document.getElementById('story').innerHTML = `${person} really likes ${adj} ${noun}`;
    }
}
