const contactform = document.getElementById('contactform');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const subject = document.getElementById('subject');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullnameValue = fullname.value.trim();
	const emaillValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	const subject2Value = subject.value.trim();

	if (fullnameValue === '') {
		setErrorFor(fullname, 'fullname cannot be blank');
	} else {
		setSuccessFor(fullname);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (phonenumberValue === '') {
		setErrorFor(phonenumber, 'phonenumber cannot be blank');
	} else {
		setSuccessFor(phonenumber);
	}

	if (subjectValue === '') {
		setErrorFor(subject, 'subject cannot be blank');
	} else {
		setSuccessFor(subject);
	}

	// if (subjectValue === '') {
	// 	setErrorFor(subject, 'subject cannot be blank');
	// } else if (subjectValue !== subjectValue) {
	// 	setErrorFor(subject, 'subject does not match');
	// } else {
	// 	setSuccessFor(subject);
	// }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});