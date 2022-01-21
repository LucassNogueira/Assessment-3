function handleSubmit(evt) {
  evt.preventDefault();

  alert("form was submitted");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let picture = document.querySelector("#pic");

const picAlert = () => {
  alert("Howdy partner!");
};

picture.addEventListener("mouseover", function () {
  picAlert();
});

