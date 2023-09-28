const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const userWrapper = document.getElementsByClassName('Wper')[0];
const ul = document.createElement('div');
let postsDisplayed = false;

function fetchUserPosts() {
    if (!postsDisplayed) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {
                const postList = document.createElement('div');
                postList.classList.add('post-list');

                posts.forEach(post => {
                    const postItem = document.createElement('div');
                    postItem.innerHTML = `
                        <span>${post.title}</span>
                        <button class="post-details-button" data-post-id="${post.id}">View Details</button>`;
                    postList.appendChild(postItem);
                    postItem.classList.add('post-item');
                });
                postList.classList.add('post-list');

                userWrapper.appendChild(postList);
                // postsDisplayed = true;
            });
       postsDisplayed = !postsDisplayed
    } else {
        const postList = document.getElementsByClassName('post-list')[0];
        postList.innerHTML='';
    }

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

        ul.classList.add('u-details');
        userExplorer(data);
        userWrapper.appendChild(ul);

        const showPostsButton = document.createElement('button');
        showPostsButton.classList.add('showl')
        showPostsButton.innerText = 'Show Posts';
        showPostsButton.style.fontFamily = 'Oxanium';
        showPostsButton.addEventListener('click', fetchUserPosts);
        userWrapper.appendChild(showPostsButton);

        userWrapper.addEventListener('click', (event) => {
            if (event.target.classList.contains('post-details-button')) {
                const postId = event.target.getAttribute('data-post-id');
                window.location.href = `post-details.html?id=${postId}`;
            }
        });
    });
