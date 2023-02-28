const randomPeople = [
    {
        imagen: 'img-1',
        name: 'name1',
        last: 'last1'
    },
    {
        imagen: 'img-2',
        name: 'name2',
        last: 'last2'
    },
    {
        imagen: 'img-3',
        name: 'name3',
        last: 'last3'
    },
    {
        imagen: 'img-4',
        name: 'name4',
        last: 'last4'
    },
    {
        imagen: 'img-5',
        name: 'name5',
        last: 'last5'
    }
];

const datos = (idImagen,idNombre,idApellido) => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            document.getElementById(idImagen).src = data.results[0].picture.medium;
            document.getElementById(idNombre).innerHTML = data.results[0].name.first;
            document.getElementById(idApellido).innerHTML = data.results[0].name.last;
        })
}

for (const i of randomPeople) {
    datos(i.imagen,i.name,i.last)
}




