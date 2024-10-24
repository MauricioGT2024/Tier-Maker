const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(el);

const imageInput = $("#image-input");
const itemsSection = $("#selector-items");

function createItem(src) {
  const imgElement = document.createElement("img");
  imgElement.draggable = true;
  imgElement.src = src;
  imgElement.className = "item-image";

  imgElement.addEventListener("dragstart", handleDragStart);
  imgElement.addEventListener("dragend", handleDragEnd);
  itemsSection.appendChild(imgElement);
}

imageInput.addEventListener("change", (event) => {
  const [file] = event.target.files;

  if (file) {
    const reader = new FileReader();

    reader.onload = (eventReader) => {
      createItem(eventReader.target.result)
    };

    reader.readAsDataURL(file);
  }
});

let draggedElement = null;
let sourceContainer = null;

const rows = $$('.tier .row')

rows.forEach(row => {
  row.addEventListener('drop', handleDrop)
})

function handleDragStart(event) {
  console.log("drag start", event.target);
  draggedElement = event.target;
  const sourceContainer = draggedElement.parentNode;
}

function handleDragEnd(event) {
  console.log("drag end", event.target);
  draggedElement = null;
  sourceContainer = null;
}
