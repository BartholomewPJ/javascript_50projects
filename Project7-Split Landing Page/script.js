const left = document.querySelector(".ps")
const right = document.querySelector(".xbox")
const container = document.querySelector(".container")

left.addEventListener("mouseenter", () => container.classList.add("hover-ps"))
left.addEventListener("mouseleave", () => container.classList.remove("hover-ps"))

right.addEventListener("mouseenter", () => container.classList.add("hover-xbox"))
right.addEventListener("mouseleave", () => container.classList.remove("hover-xbox"))