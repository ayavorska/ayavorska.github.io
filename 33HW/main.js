"use strick";
const text = document.querySelector("#text");
const textarea = document.querySelector("#textarea");

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyE" && event.ctrlKey) {
    event.preventDefault();
    textarea.value = text.innerHTML;
    text.classList.add("textarea");
    textarea.classList.remove("textarea");
    textarea.focus();
  }
  if (event.code === "KeyS" && event.ctrlKey) {
    event.preventDefault();
    text.innerHTML = textarea.value;
    textarea.classList.add("textarea");
    text.classList.remove("textarea");
  }
});

// Task 2
function getCellValue(tr, index) {
  return tr.children[index].innerText || tr.children[index].textContent;
}

const comparer = (index, asc) => (a, b) =>
  ((v1, v2) =>
    v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
      ? v1 - v2
      : v1.toString().localeCompare(v2))(
    getCellValue(asc ? a : b, index),
    getCellValue(asc ? b : a, index)
  );

document.querySelectorAll("th").forEach((th) =>
  th.addEventListener("click", () => {
    const table = th.closest("table");
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(
        comparer(
          Array.from(th.parentNode.children).indexOf(th),
          (this.asc = !this.asc)
        )
      )
      .forEach((tr) => table.appendChild(tr));
  })
);

// Task 3
function resize(event) {
  event.preventDefault();
  document.onmousemove = function(event) {
    let frame = document.querySelector(".frame");
    frame.style.width = event.pageX - frame.offsetLeft + "px";
    frame.style.height = event.pageY - frame.offsetTop + "px";
  };
  document.onmouseup = function() {
    document.onmousemove = null;
  };
}