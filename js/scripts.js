"use strict";

document.querySelector("#voting-table-points").addEventListener("click", (event) => {
  const clickedValue = event.target.textContent;
  const parentForClickableElements = event.target.parentNode;
  const clickedIndex = Array.from(parentForClickableElements.children).findIndex(
    (value) => clickedValue === value.textContent
  );
  parentForClickableElements.nextElementSibling.children[clickedIndex].textContent++;
});
