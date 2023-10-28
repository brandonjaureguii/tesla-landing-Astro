
const ListItem = document.querySelectorAll("#landing-header .li-link")
const MenuBackdrop = document.querySelector("#menu-backdrop")

ListItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect()
        const { clientHeight, clientWidth } = item 
        MenuBackdrop.style.setProperty("--left", `${left}px`)
        MenuBackdrop.style.setProperty("--top", `${top}px`)
        MenuBackdrop.style.setProperty("--width", `${width}px`)
        MenuBackdrop.style.setProperty("--height", `${height}px`)
        MenuBackdrop.style.opacity = "1"
        MenuBackdrop.style.visibility = "visible"

        item.addEventListener("mouseleave", ()=> {
        MenuBackdrop.style.opacity = "0"
        MenuBackdrop.style.visibility = "hidden"
        })
    })
})

const $header = document.getElementById('landing-header')

const observerOptions = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.60 
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            const color = entry.target.getAttribute('data-header-color')
            $header.style.color = color
        }
    })
}, observerOptions)
const $sections = document.querySelectorAll('.landing-section')
$sections.forEach(section => observer.observe(section))



const $title = document.getElementById("title")
const $subtitle = document.getElementById("subtitle-container")
const $btnFooter = document.getElementById("btn-footer")

$title.style.opacity = "0"
$subtitle.style.opacity = "0"
$btnFooter.style.opacity = "0"


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        $title.classList.add("slideup-animation")
        $title.style.opacity = "1"
    }, 500);
    setTimeout(() => {
        $subtitle.classList.add("slideup-animation")
        $subtitle.style.opacity = "1"
        $btnFooter.classList.add("slidedown-animation")
        $btnFooter.style.opacity = "1"
    }, 1150);
});