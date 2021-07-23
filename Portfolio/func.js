const buttonElement = document.querySelector('.show');
const portFolioSection = document.querySelector('.portFolio');
buttonElement.addEventListener('click', (e) => {
    portFolioSection.scrollIntoView({
        behavior: 'smooth',
    })
});

const contactElemet = document.querySelector('.contact');
const thirdSectionElement = document.querySelector('.thirdSection')
contactElemet.addEventListener('click', goto)
function goto() {

    thirdSectionElement.scrollIntoView({
        behavior: "smooth"
    });

}
const secondSectionElement = document.querySelector('.secondSection');
const skillButton = document.querySelector('.SkillTab');
skillButton.addEventListener('click', goToSkill);
function goToSkill() {
    secondSectionElement.scrollIntoView({
        behavior: 'smooth'
    })
}
const homeElement = document.querySelector('.home');
homeElement.addEventListener('click', gohome);
const firstSectionElement = document.querySelector('#box')
function gohome() {

    firstSectionElement.scrollIntoView({
        behavior: 'smooth'
    });

}
const gitHubElemet = document.querySelector('.gitHub')
gitHubElemet.addEventListener('click', (e) => {
    window.open("https://github.com/IvHrIvanov")
})

const linkElement = document.querySelector('.Link');
linkElement.addEventListener('click', (e) => {
    window.open('https://www.linkedin.com/in/ivan-ivanov-4563081ba/');
})

const linkFace = document.querySelector('.Face');
linkFace.addEventListener('click', (e) => {
    window.open('https://www.facebook.com/profile.php?id=100000604817645');
})
const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const emailInput = document.querySelector('.email');
const emailTextElement = document.querySelector('.emailText');
emailInput.addEventListener('change', (e) => {
    let inputEmail = emailInput.value;
    console.log(inputEmail);
    if (reg.test(emailInput.value)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("confirm");
    } else if (emailInput.value == "") {
        emailInput.classList.remove("confirm");
        emailInput.classList.remove("error");
    }
    else {
        emailInput.classList.remove("confirm");

        emailInput.classList.add("error");
    }
})

const sendButton = document.querySelector('.send');
let email = emailInput.value;


