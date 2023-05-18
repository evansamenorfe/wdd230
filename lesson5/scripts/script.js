// Document Object Model (DOM)

const input = document.querySelector("#favchap");
const button = document.querySelector("#addbutton");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
    if (input && input.value) {
            const item = list.appendChild(Object.assign(document.createElement("li"), {
                class: "list-item",
                innerHTML: input.value
            }))

            item.appendChild(Object.assign(document.createElement("button"), {
                class: "addbutton",
                type: "submit",
                innerHTML: "❌"
            })).addEventListener("click", function () {
                list.removeChild(item);
            })
            input.focus();
            input.value = "";

    }
})