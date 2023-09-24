const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const userWrapper = document.getElementsByClassName('userWrapper')[0];
const ul = document.createElement('ul');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
        const userExplorer = (object) => {

            for (const item in object) {
                if (typeof object[item] === 'object') {
                    const li = document.createElement('li');
                    li.innerText = `-----${item}-----`;
                    ul.appendChild(li);
                    userExplorer(object[item]);
                } else {
                    const li = document.createElement('li');
                    li.innerText = `${item}: ${object[item]}`;
                    ul.appendChild(li);
                }

            }
        }
        userExplorer(data);
        userWrapper.appendChild(ul);
    })



