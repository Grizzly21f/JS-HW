const ul = document.createElement('div');
const userWrapper = document.getElementsByClassName('userWrapper')[0];

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            const button = document.createElement('button');
            button.addEventListener('click', (e) => {
                location.href = `user-details.html?id=${user.id}`;
            })
            button.innerText = 'Details';
            button.style.fontFamily = 'Oxanium';
            button.classList.add('user-button');




            const div = document.createElement('div');

            div.innerText = `${user.id} - ${user.name}`;

            ul.append(div);
            div.appendChild(button);
            ul.classList.add('u-ul')
            div.classList.add('u-div')
        }
        userWrapper.appendChild(ul);
    })
