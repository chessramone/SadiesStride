// Collect the nav button, and nav links
const navButton = document.querySelector('nav div:first-of-type img')
const navLinks  = document.querySelector('nav div:last-of-type ul')

// Get the style on the stylesheet
const computedStyle = window.getComputedStyle(navLinks)

// Add an event listner to the nav button
navButton.addEventListener('click', () => {

    // test the CSS style, not the dom style
    if (computedStyle.display == 'none') {
	navLinks.style.position = 'inherit'
	navLinks.style.display  = 'inherit'
	navButton.src = '/images/site_icons/close-menu.webp'
    }
    else {
	navLinks.style.position = 'absolute'
	navLinks.style.display  = 'none'
	navButton.src = '/images/site_icons/hamburger-menu.webp'
    }
})
