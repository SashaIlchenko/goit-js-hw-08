import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const dataForm = {};
const USER_FDBC = "feedback-form-state";
console.dir(form)
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputType, 500));

function onInputType(e) {
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem(USER_FDBC, JSON.stringify(dataForm));
};
populateForm();

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(USER_FDBC);
    console.log(dataForm);
    e.target.reset();
};
function populateForm() {
    const savedData = JSON.parse(localStorage.getItem(USER_FDBC));
    if (savedData) {
        form[0].value = savedData.email;
        form[1].textContent = savedData.message;
    };
};