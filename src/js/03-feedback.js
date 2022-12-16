import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const USER_FDBC = "feedback-form-state";
const dataForm = JSON.parse(localStorage.getItem(USER_FDBC)) || {};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputType, 500));

function onInputType(e) {
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem(USER_FDBC, JSON.stringify(dataForm));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(dataForm);
    form.reset();
    localStorage.removeItem(USER_FDBC);

};

(function () {
    try {
        const savedData = localStorage.getItem(USER_FDBC);
        const parseData = JSON.parse(savedData);

        if (parseData) {
            form[0].value = parseData.email;
            form[1].value = parseData.message;
        };
    } catch (error) {
        console.error("Get state error: ", error.message);
    };
})();