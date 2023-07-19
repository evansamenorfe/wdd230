// function handleClick() {
//     var row = document.getElementById("navigation"); // Replace "navigation" with the correct ID of the element you want to toggle
//     var isExpanded = row.getAttribute("aria-expanded") === "true";
//     var card = document.querySelector(".card"); // Assuming you want to toggle the "active" class on this element

//     if (isExpanded) {
//         card.classList.remove("active");
//     } else {
//         card.classList.add("active");
//     }

//     // Assuming toggleAnimation() is defined and implemented elsewhere
//     // Assuming values1, animatel, values2, animate2, values3, and animate3 are defined elsewhere
//     toggleAnimation(values1, animatel);
//     toggleAnimation(values2, animate2);
//     toggleAnimation(values3, animate3);

//     row.setAttribute("aria-expanded", !isExpanded);
//     row.setAttribute("aria-label", !isExpanded ? "Close Menu" : "Open Menu");
// }

// // Add event listener to a button with ID "toggleButton" (replace with the actual ID of your button)
// var toggleButton = document.getElementById("toggleButton");
// toggleButton.addEventListener("click", handleClick);
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("humburgerbtn").classList.toggle("open");
}

const x = document.getElementById('humburgerbtn');
x.onclick  = toggleMenu;

