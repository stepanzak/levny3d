


//responsive view: hamburger menu icon toggling menu and clicking on any menu link closing the menu
const navLinksList = document.getElementById('nav-links')

const menuIcon = document.getElementById("menu-icon")
menuIcon.addEventListener('click', () => {
navLinksList.style.display = (navLinksList.style.display === 'none' || navLinksList.style.display === '') ?
      'block':
      'none'
})

const navLinks = document.querySelectorAll("nav.top-bar > ul.links > a")
navLinks.forEach(element => element.addEventListener('click', () => {
  navLinksList.style.display = 'none'
}))
