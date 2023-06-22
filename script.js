//your JS code here. If required.
const userName = document.getElementById('name');
const password = document.getElementById('password');
const checkbox = document.getElememtById('checkbox');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
	if(checkbox.checked){
		localStorage.setItem("username", userName.value);
		localStorage.setItem("password", password.value);
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
});

