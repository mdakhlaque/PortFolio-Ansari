// / ============ from validation cod ===================

function nameValidate () {
  let name = document.querySelector('#name').value;
  if (name.trim() == "") {
    document.querySelector('#error-name').innerHTML = `can't take space`;
    document.querySelector('#icon-name').innerHTML = ' <i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i> ';
    return false;
  } else if (name.length < 4) {
    document.querySelector('#icon-name').innerHTML = ' <i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i> ';
    document.querySelector('#error-name').innerHTML = 'Min 3 Character';
    return false;
  } else if (name.length == '') {
    document.querySelector('#error-name').innerHTML = `can't blank`;
    return false;
  } 
  else {
    document.querySelector('#icon-name').innerHTML = ' <i class="fa-solid fa-circle-check icon" id="success-icon"></i>'
    document.querySelector('#error-name').innerHTML = '';
    return true
  }
}

function lastValidate () {
  let last = document.querySelector('#last').value;

  if (last.trim() == "") {
    document.querySelector('#error-last').innerHTML = `can't take space`;
    document.querySelector('#icon-last').innerHTML = ' <i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i> ';
    return false;
  } else if (last.length < 4) {
    document.querySelector('#icon-last').innerHTML = ' <i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i> ';
    document.querySelector('#error-last').innerHTML = 'Min 3 Character';
    return false;
  }  else if (last.length == '') {
    document.querySelector('#error-last').innerHTML = `can't blank`;
    return false
  } 
  else {
    document.querySelector('#icon-last').innerHTML = ' <i class="fa-solid fa-circle-check icon" id="success-icon"></i>'
    document.querySelector('#error-last').innerHTML = '';
    return true
  }
}

function emailValidate () {
  let email = document.querySelector('#email').value;

  if (!email.match('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
    document.querySelector('#error-email').innerHTML = 'Invalid Email'
    document.querySelector('#icon-email').innerHTML = '<i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i>'
    return false;
  } else {
     document.querySelector('#error-email').innerHTML = ''
    document.querySelector('#icon-email').innerHTML = '<i class="fa-solid fa-circle-check icon" id="success-icon"></i>'
    return true
  }
}

function phoneValidate () {
  let phone = document.querySelector('#phone').value;

  if (phone.length !== 10 ) {
    document.querySelector('#error-phone').innerHTML = '10 Digit only'
    document.querySelector('#icon-phone').innerHTML = '<i class="fa-solid fa-circle-exclamation icon" id="error-icon"></i>'
    return false;
  } else {
     document.querySelector('#error-phone').innerHTML = ''
    document.querySelector('#icon-phone').innerHTML = '<i class="fa-solid fa-circle-check icon" id="success-icon"></i>'
    return true
  }
}

function  messageValidate() {
  let message = document.querySelector('#my-text').value;
  let textError = document.querySelector('#texterror');
  let required = 20;
  let left = required - message.length;

  if(left > 0) {
    textError.innerHTML = `At least ${left} Character`
     textError.style.color = "#ce0026"
     return false;
  }  else {
     textError.innerHTML = `<i class="fa-solid fa-circle-check icon" id="success-icon"></i>`
     textError.style.color = "#076e00"
     return true

  }

}

function validateForm() {
  if(!nameValidate () || !lastValidate () || !emailValidate () || !phoneValidate () || !messageValidate()) {
    return false;
  }  else {
  }
}

const personalDate = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  },false);
}
personalDate();


// ========== responsive nab-bar =================

let navBar = document.querySelector("#nav-bar");
let cancel = document.querySelector("#cancel");
let leftContainer = document.querySelector("#profile-container");

function profileShow() {
  navBar.addEventListener("click", function () {
    leftContainer.classList.add("show-profile");
  });
}
profileShow();

function profileCancel() {
  cancel.addEventListener("click", function () {
    leftContainer.classList.remove("show-profile");
  });
}

profileCancel();

// =========  profile container auto hide code ===================

let autoHideButton = document.querySelectorAll(".auto-hide");
autoHideButton.forEach(function (item) {
  item.addEventListener("click", function () {
    leftContainer.classList.remove("show-profile");
  });
});


// ============= project section start ==========================

let container = document.querySelectorAll(".project-card");

container.forEach((item) => {
  let displayButton1 = item.querySelector(".d-img1");
  let displayButton2 = item.querySelector(".d-img2");
  let displayButton3 = item.querySelector(".d-img3");

  let imgButton1 = item.querySelector(".img-btn1");
  let imgButton2 = item.querySelector(".img-btn2");
  let imgButton3 = item.querySelector(".img-btn3");

  imgButton1.addEventListener("click", () => {
    displayButton1.style.display = "block";
    displayButton2.style.display = "none";
    displayButton3.style.display = "none";
  });
  imgButton2.addEventListener("click", () => {
    displayButton1.style.display = "none";
    displayButton2.style.display = "block";
    displayButton3.style.display = "none";
  });
  imgButton3.addEventListener("click", () => {
    displayButton1.style.display = "none";
    displayButton2.style.display = "none";
    displayButton3.style.display = "block";
  });
});

// ============= responsive nab-bar close ========================



// =========== theme section below all code =======================

let pink = document.querySelector("#js-pink");
let blue = document.querySelector("#js-blue");
let purple = document.querySelector("#js-purple");
let orange = document.querySelector("#js-orange");

pink.addEventListener("click", () => {
  document.body.classList.add("js-pink");
  document.body.classList.remove("js-blue");
  document.body.classList.remove("js-purple");
  document.body.classList.remove("js-orange-color");
});

blue.addEventListener("click", () => {
  document.body.classList.remove("js-pink");
  document.body.classList.add("js-blue");
  document.body.classList.remove("js-purple");
  document.body.classList.remove("js-orange-color");
});
purple.addEventListener("click", () => {
  document.body.classList.remove("js-pink");
  document.body.classList.remove("js-blue");
  document.body.classList.add("js-purple");
  document.body.classList.remove("js-orange-color");
});
orange.addEventListener("click", () => {
  document.body.classList.add("js-orange-color");
  document.body.classList.remove("js-pink");
  document.body.classList.remove("js-blue");
  document.body.classList.remove("js-purple");
});



