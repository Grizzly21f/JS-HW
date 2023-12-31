const params = new URLSearchParams(document.location.search);
const postId = params.get('id');

const postDetailsContainer = document.querySelector('.post-details');
const commentsContainer = document.querySelector('.comments');

const backButton = document.getElementsByClassName('back')[0];
let detailsPageId = JSON.parse(localStorage.getItem('detailId')) || null;
backButton.addEventListener('click', () => {
    location.href = `user-details.html?id=${detailsPageId}`;
    localStorage.removeItem('detailId');
})

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetails = document.createElement('div');
        postDetails.innerHTML = `
                <h2>Post Details</h2>
                <p>Title: ${post.title}</p>
                <p>ID: ${post.id}</p>
                <p>Body: ${post.body}</p>`;
        postDetailsContainer.appendChild(postDetails);

    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');
            commentBlock.classList.add('cyber-tile-bi');
            commentBlock.innerHTML = `
                    <h2>Comment Details</h2>
                    <p>Name: ${comment.name}</p>
                    <p>ID: ${comment.id}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Body: ${comment.body}</p>`;
            commentsContainer.appendChild(commentBlock);

        });

    });
