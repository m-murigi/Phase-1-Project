
const baseUrl = "https://api.thedogapi.com/v1";

const fetchDogsBreeds = async () => {
  try {
    const response = await fetch(baseUrl + "/breeds");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const dogBreeds = await response.json();
    return populateDogsSelect(dogBreeds); // Return the result of populateDogsSelect
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

function populateDogsSelect(breeds) {
  const select = document.querySelector(".breeds-select");
  breeds.forEach(breed => {
    const option = document.createElement("option");
    option.innerHTML = breed.name;
    option.value = breed.id;
    select.appendChild(option);
  });
  return breeds; // Return the list of breeds
}

const feedDogsImage = (imageUrl) => {
  const dogsImg = document.querySelector("#dogs-img");
  dogsImg.setAttribute("src", imageUrl);

  // Remove existing buttons before adding new ones
  removeButtons();

  // Like button
  const likeButton = document.createElement("button");
  likeButton.innerText = "Like";
  likeButton.classList.add("like-button");

  // Dislike button
  const dislikeButton = document.createElement("button");
  dislikeButton.textContent = "Dislike";
  dislikeButton.classList.add("dislike-button");

  // Like count
  const likeCount = document.createElement("span");
  likeCount.innerText = "0 Likes";
  likeCount.classList.add("like-count");

  // Dislike count
  const dislikeCount = document.createElement("span");
  dislikeCount.innerText = "0 Dislikes";
  dislikeCount.classList.add("dislike-count");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");
  buttonsContainer.appendChild(likeButton);
  buttonsContainer.appendChild(dislikeButton);
  buttonsContainer.appendChild(likeCount);
  buttonsContainer.appendChild(dislikeCount);

  const parentElement = dogsImg.parentNode;
  parentElement.appendChild(buttonsContainer);

  likeButton.addEventListener("click", () => {
    // Increment like count
    const currentLikes = parseInt(likeCount.innerText);
    likeCount.innerText = `${currentLikes + 1} Likes`;
  });

  dislikeButton.addEventListener("click", () => {
    // Increment dislike count
    const currentDislikes = parseInt(dislikeCount.innerText);
    dislikeCount.innerText = `${currentDislikes + 1} Dislikes`;
  });
}

const removeButtons = () => {
  const buttonsContainer = document.querySelector(".buttons-container");
  if (buttonsContainer) {
    buttonsContainer.remove();
  }
}

document.querySelector("#dogs-img").addEventListener("click", () => {
  removeButtons();
});

const getDogByBreed = async (breedId) => {
  const [data] = await fetch(baseUrl + "/images/search?include_breed=1&breed_id=" + breedId).then((data) => data.json());
  const { url: imageUrl, breeds } = data;
  feedDogsImage(imageUrl);
  // Assuming feedDogsDescription is defined elsewhere
  // feedDogsDescription(breeds[0]);
  console.log(data);
}

const changeDogs = () => {
  console.log(event.target.value);
  getDogByBreed(event.target.value);
};

fetchDogsBreeds().then(result => {
  console.log(result);
});