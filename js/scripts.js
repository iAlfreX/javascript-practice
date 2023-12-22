"use strict";

async function requestPost(url, event) {
  try {
    event.preventDefault();
    const parentElement = event.currentTarget;
    const inputElement = parentElement.querySelector("#postId");
    const enteredId = Number(inputElement.value);

    if (!checkIDValidity(enteredId, 1, 100)) {
      const errorElement = parentElement.querySelector("#error");
      const errorMessage = "Пожалуйста, введите корректный ID от 1 до 100...";
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      throw new Error(errorMessage);
    }

    const response = await fetchData(url);
    const posts = await parseJSONData(response);
    displayPost(enteredId, posts);

    return enteredId;
  } catch (error) {
    alert(error.message);
    console.error(`Произошла ошибка: ${error.message}`);
  }
}

async function requestComments(url, postIdPromise, event) {
  try {
    const response = await fetchData(url);
    const comments = await parseJSONData(response);
    const postId = await postIdPromise;
    const filteredComments = comments.filter((comment) => comment.postId === postId);

    event.target.remove();
    displayComments(filteredComments);
  } catch (error) {
    alert(error.message);
    console.error(error.message);
  }
}

function displayComments(filteredComments) {
  const commentsBlock = document.querySelector("#comments");

  filteredComments.forEach((comment) => {
    const block = document.createElement("div");
    const userEmail = document.createElement("span");
    const userComment = document.createElement("p");

    block.style.cssText = "margin: 10px 0; padding-bottom: 10px; border-bottom: 1px solid #FF0000;";
    block.append(userEmail);
    block.append(userComment);

    userEmail.style.cssText = "margin-bottom: 5px; font-size: 14px;";
    userEmail.textContent = comment.email;

    userComment.style.cssText = "font-size: 12px;";
    userComment.textContent = comment.body;

    commentsBlock.append(block);
  });
}

function checkIDValidity(enteredId, minId, maxId) {
  return enteredId >= minId && enteredId <= maxId;
}

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Ошибка при получении данных!");

    return response;
  } catch (err) {
    throw err;
  }
}

async function parseJSONData(data) {
  try {
    const jsonData = await data.json();

    return jsonData;
  } catch (err) {
    throw err;
  }
}

function displayPost(enteredId, posts) {
  const post = posts.find((post) => post.id === enteredId);

  if (post) {
    const parentElement = document.querySelector("#form");
    const postElement = document.querySelector("#post");

    parentElement.style.display = "none";
    postElement.querySelector("#postHeading").textContent = post.title;
    postElement.querySelector("#postText").textContent = post.body;
    postElement.style.display = "block";
  }
}

let postId;
document.querySelector("#form").addEventListener("submit", (event) => {
  postId = requestPost("https://jsonplaceholder.typicode.com/posts", event);
});
document.querySelector("#postButton").addEventListener("click", (event) => {
  requestComments("https://jsonplaceholder.typicode.com/comments", postId, event);
});
