const cookieConsent = localStorage.getItem('cookieConsent')
if (!cookieConsent) {
    const message = document.getElementById('cookie-message')
    const closeButton = document.getElementById('cookie-close')
    closeButton.onclick = () => {
        localStorage.setItem('cookieConsent', true)
        message.classList.toggle('is-hidden')    
    }
    message.classList.toggle('is-hidden')
}