const favColor = document.querySelector("#color");
const favPlace = document.querySelector("#place");
const favRitual = document.querySelector("#ritual");

const alertColor = (evt) => {
  evt.preventDefault();
  alert("Did you know my favorite color is actually gray!");
};

const alertPlace = (evt) => {
  evt.preventDefault();
  alert(
    "Favorite place is hard, it would probably be home with my fiance and our dog Meatloaf!"
  );
};

const alertRitual = (evt) => {
  evt.preventDefault();
  alert(
    "This would probably have to be winding down and gaming with the boys, just disconnecting and having a good time. Sadly doesnt happen as often as i would like!"
  );
};

favColor.addEventListener("click", alertColor);

favPlace.addEventListener("click", alertPlace);

favRitual.addEventListener("click", alertRitual);
