let imageSlide = 1;
showDivs(imageSlide);

function plusDivs(n) {
  showDivs((imageSlide += n));
}

function showDivs(n) {
  let slide = document.getElementsByClassName("intro-image");
  if (n > slide.length) {
    imageSlide = 1;
  }
  if (n < 1) {
    imageSlide = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[imageSlide - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 2500);

const prevButton = document.getElementById("buttonprev");
prevButton.addEventListener("click", () => {
  plusDivs(-1);
});

const nextButton = document.getElementById("buttonnext");
nextButton.addEventListener("click", () => {
  plusDivs(1);
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value.trim();
  const selectElement = document.getElementById("interest");
  const selectValue = selectElement.value;
  const errorFormElement = document.getElementById("error-form");

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();

  if (nameValue === "") {
    errorFormElement.innerHTML = "Nama tidak boleh kosong.";
    return false;
  }

  if (selectValue === "default") {
    errorFormElement.innerHTML = "Anda belum memilih option";
    return false;
  }

  const stringemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!stringemail.test(emailValue)) {
    errorFormElement.innerHTML = "Masukkan alamat email yang valid.";
    return false;
  }

  if (nameValue.length < 10) {
    errorFormElement.innerHTML =
      "Nama harus terdiri dari minimal 10 karakter.";
    return false;
  }
  errorFormElement.innerHTML = "";
  return true;
}
