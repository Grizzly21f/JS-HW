const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const userWrapper = document.getElementsByClassName('Wper')[0];
const ul = document.getElementsByClassName('u-details')[0];
const postList = document.getElementsByClassName('post-list')[0];
let postsDisplayed = false;

let nodePostList = [];

    if (!postsDisplayed) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {
                const postList = document.getElementsByClassName('post-list')[0];
                posts.forEach(post => {
                    const postItem = document.createElement('div');
                    postItem.innerHTML = `
                        <span>${post.title}</span>
                        <button class="post-details-button" data-post-id="${post.id}">View Details</button>`;

                    nodePostList.push(postItem);

                    postList.appendChild(postItem);
                    postItem.classList.add('post-item');
                });
            });
       postsDisplayed = !postsDisplayed
    } else {
        postList.innerHTML='';
    }

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
        const userExplorer = (object) => {
            for (const item in object) {
                if (typeof object[item] === 'object') {
                    const li = document.createElement('div');
                    li.innerText = `-----${item}-----`;
                    ul.appendChild(li);
                    userExplorer(object[item]);
                    li.classList.add('li-details')
                } else {
                    const li = document.createElement('div');
                    li.innerText = `${item}: ${object[item]}`;
                    ul.appendChild(li);
                }
            }
        }

        userExplorer(data);

        const showPostsButton = document.getElementsByClassName('showl')[0];
        showPostsButton.style.fontFamily = 'Oxanium';

        let listSwitcher = true;
        showPostsButton.addEventListener('click', () => {
            if (listSwitcher) {
                const emptyDiv = document.createElement('div');
                postList.innerHTML = '';
                postList.classList.remove('post-list')
                postList.appendChild(emptyDiv);
                listSwitcher = !listSwitcher;
            } else {
                postList.classList.add('post-list')
                nodePostList.map(item => postList.appendChild(item))
                listSwitcher = !listSwitcher;
            }
        });
        userWrapper.addEventListener('click', (event) => {
            if (event.target.classList.contains('post-details-button')) {
                const postId = event.target.getAttribute('data-post-id');
                window.location.href = `post-details.html?id=${postId}`;
            }
        });
    });
