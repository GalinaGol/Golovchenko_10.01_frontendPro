const postListElement = document.getElementById("post-list");
const searchInputElement = document.getElementById("search-input");
const postInfo = document.getElementById("post-details");
const commentsContainer = document.getElementById("comments-container")

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments"

let postsData = [];
let commentData = []

fetch(API_URL)
  .then((response) => response.json())
  .then((posts) => {
    postsData = posts;
    renderPostsList(postsData);
  })
  .catch((error) => console.error(error));

const renderPostsList = (posts) => {
  postListElement.innerHTML = "";

  posts.forEach((postItem) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="post-item">
        <h3 class="post-title" data-id="${postItem.id}">Title: ${postItem.title}</h3>
        <div class="post-info">
          <p>ID: ${postItem.id}</p>
        </div>
      </div>
    `;
    postListElement.appendChild(li);
  });

  setTimeout(function() {
    let postTitleSelector = document.getElementsByClassName("post-title");

    for(let i = 0; i < postTitleSelector.length; i++) {
      postTitleSelector[i].addEventListener('click', showPostDetails)
    }
  }, 100)

};

searchInputElement.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  const filteredPosts = postsData.filter(({ id }) =>
    id.toString().includes(searchTerm)
  );
  renderPostsList(filteredPosts);
});


function showPostDetails(event) {
  let postId = event.target.dataset.id;
  let post = findPostById(postId);

  commentsContainer.style.display = 'none';
  postInfo.innerHTML = "";

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="post-item">
      <h3>Title: ${post.title}</h3>
      <p>Body: ${post.body}</p>
      <div class="post-info">
        <p>ID: ${post.id}</p>
        <p>Comment length: ${post.body.length}</p>
        <button class="btn" id="comment-btn" data-post-id="${post.id}">Show all comments</button>
      </div>
    </div>
  `;

  setTimeout(function() {
    let showCommentsSelector = document.getElementById("comment-btn");
    showCommentsSelector.addEventListener("click", (event) => {
      renderComments(event.target.dataset.postId)
    });
  }, 100)

  postInfo.appendChild(li);

};

function findPostById(postId) {
  return postsData.find(post => post.id == postId);
}

fetch(API_URL_COMMENTS)
  .then((response) => response.json())
  .then((comments) => {
    commentData = comments;
  })
  .catch((error) => console.error(error));

  const renderComments = (postId) => {
    commentsContainer.style.display = 'block';
    commentsContainer.innerHTML = "";
  
    let comments = getPostComments(postId);

    comments.forEach((commentItem) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="container">
          <h3 data-id="${commentItem.id}"> comment: ${commentItem.body}</h3>
          <div>
            <p>ID: ${commentItem.id}</p>
            <p id="post-id">PostID: ${commentItem.postId}</p>
          </div>
        </div>
      `;
      commentsContainer.appendChild(li);
    });
  };

function getPostComments(commentsPostId) {
  return commentData.filter(({ postId }) => postId == commentsPostId);
}  

  

