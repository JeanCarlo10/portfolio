const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactIconSuccess = "<img src='./src/assets/img/icon-success.svg' style='margin-right: 0.5rem; '/>",
    contactIconError = "<img src='./src/assets/img/icon-error.svg' style='margin-right: 0.5rem;' />"

const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ujn45fb", "template_vmupfli", "#contact-form", "Zgwmz9ZYBZRBvmhPC")
        .then(() => {
            //Show sent message
            contactMessage.innerHTML = `
                <div style="
                    display: flex;
                    align-items: center;
                    color: #3AAC3B;
                    font-size: 1rem;
                    font-weight: 600
                ">
                    ${contactIconSuccess} 
                    <span>Email enviado com sucesso!</span> 
                </div>
            `;

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.innerHTML = ""
            }, 5000);

            //Clear input fields
            contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.innerHTML = `
                <div style="
                    display: flex;
                    align-items: center;
                    color: #EB4454;
                    font-size: 1rem;
                    font-weight: 600
                ">
                    ${contactIconError} 
                    <span>Mensagem não enviada! (Erro no servidor)</span> 
                </div>
            `;
        });
};

contactForm.addEventListener('submit', sendMail);