console.log("This is a Random DOG Image popup!");

const loadingMsg = document.getElementById("loadingMsg");
const dogImage = document.getElementById("dogImage");

loadingMsg.style.display = "block";
dogImage.style.display = "none";

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    const IMAGE_URL = data?.message;
    if (IMAGE_URL) {
      dogImage.src = IMAGE_URL;

      //   Hide loading message once image arrives
      loadingMsg.style.display = "none";

      //   Showing the intended image in place of the the loading message
      dogImage.style.display = "block";
    } else {
      // Updating loadig message with a retry message
      loadingMsg.innerText = "Try clicking again. Unable to fetch a dog image";
      throw new Error("No image URL found in the response");
    }
  })
  .catch((error) => console.error("Response Error: ", error.message));
