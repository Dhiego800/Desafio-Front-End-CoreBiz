const myAccount = document.getElementById('my-account');
const modalUser = document.querySelector('.modal-user-field');
const btnClose = document.querySelector('.modal-user-field .close')

myAccount.addEventListener("click", ()=> {
    modalUser.classList.toggle("active--js");    
})

btnClose.addEventListener("click", ()=> {
    modalUser.classList.remove("active--js");    
}); 