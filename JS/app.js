console.log("run 1st");

const dogImageDiv = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");

// Calling API funtion
const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`;
    });
};
getNewDog();

dogButton.onclick = () => {
  getNewDog();
};
