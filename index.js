const phoneNumberDialog = document.getElementById("phone-number-dialog")
const emailDialog = document.getElementById("email-dialog")
const meetDialog = document.getElementById("meet-dialog")
const phoneNumberBubble = document.getElementById("phone-number-bubble")
const whatsappBubble = document.getElementById("whatsapp-bubble")
const emailBubble = document.getElementById("email-bubble")
const meetBubble = document.getElementById("meet-bubble")

phoneNumberBubble.addEventListener("click", () => {
  phoneNumberDialog.showModal()
  })

whatsappBubble.addEventListener("click", () => {
  phoneNumberDialog.showModal()
  })

emailBubble.addEventListener("click", () => {
  emailDialog.showModal()
  })

meetBubble.addEventListener("click", () => {
  meetDialog.showModal()
  })

