class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

	validateonSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = 0;
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}
			});
			if (error == 0) {
				//do login api here
				localStorage.setItem("auth", 1);
				this.form.submit();
			}
		});
	}

	validateFields(field) {
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be blank`,
				"error"
			);
			return false;
		} else {
			if (field.type == "password") {
				if (field.value.length < 8) {
					this.setStatus(
						field,
						`${field.previousElementSibling.innerText} must be at least 8 characters`,
						"error"
					);
					return false;
				} else {
					this.setStatus(field, null, "success");
					return true;
				}
			} else {
				this.setStatus(field, null, "success");
				return true;
			}
		}
	}

	setStatus(field, message, status) {
		const errorMessage = field.parentElement.querySelector(".error-message");

		if (status == "success") {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("input-error");
		}

		if (status == "error") {
			errorMessage.innerText = message;
			field.classList.add("input-error");
		}
	}
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validator = new Login(form, fields);
}

/* form swap and error handling */
// function setForMessage(formElement,type,message){
//     const messageElement = formElement.querySelector('.form-message');

//     messageElement.textContent = message;
//     messageElement.classList.remove('form-message-success','form-message-error');
//     messageElement.classList.add(`form-message-${type}`);
// }

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = "";
}

function setInputError(inputElement, message){
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

//setForMessage(loginForm,'success',"You're logged in!");



document.addEventListener("DOMContentLoaded",() => {
    const loginForm=document.querySelector('#login-form');
    const createAccountForm=document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click', e =>{
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', e =>{
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        createAccountForm.classList.add('form--hidden');
    });
    // loginForm.addEventListener('submit',e =>{
    //     e.preventDefault();
    
    //     setForMessage(loginForm,'error','Invalid username/password combination');
    // });

    document.querySelectorAll('.form-input').forEach(inputElement => {
        inputElement.addEventListener('blur', e =>{
            if(e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length <10){
                setInputError(inputElement, "Username must be at least 10 character in length")
            }
        });
        inputElement.addEventListener('input', e =>{
            clearInputError(inputElement);
        });
    });
});


const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}