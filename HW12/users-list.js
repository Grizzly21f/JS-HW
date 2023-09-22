const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const div = document.getElementById('user-details')[0];

let ul = document.createElement('ul');
console.log(id);
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
.then(value => value.json())
.then(data => {
    const main = document.createElement('li');
    main.innerText = `id - ${data.id}, name - ${data.name}, username - ${data.username}, email - ${data.email}`;

    userAdress = document.createElement('li');
    userAdress.innerText = `street: ${data.address.street}, suite: ${data.address.suite}`

    ul.append(main,userAdress);
    div.appendChild(ul);
})