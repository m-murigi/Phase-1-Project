
// const baseUrl = "https://api.thedogapi.com/v1";

// const fetchDogsBreeds = async () => {
//   try {
//     const response = await fetch(baseUrl + "/breeds");
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const dogBreeds = await response.json();
//     return populateDogsSelect(dogBreeds); // Return the result of populateDogsSelect
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// function populateDogsSelect(breeds) {
//   const select = document.querySelector(".breeds-select");
//   breeds.forEach(breed => {
//     const option = document.createElement("option")
//     option.innerHTML = breed.name;
//     option.value = breed.id;
//     select.appendChild(option);
    

//   });
//   return breeds; // Return the list of breeds
// }


// const feedDogsImage = (imageUrl, dogName, dogheight, dogweight,dogTemperament,dogLifeSpan, dogOrigin) =>{
  
//   let dogElement = document.querySelector(".dog-details")
//   let dogIMG = document.createElement("img")
//   dogIMG.id = "dogs-img";
//   dogElement.appendChild(dogIMG)

//   let dogElementList = document.createElement("div")
//   dogElementList.classList.add('propertiesOfDog')
  
//   let dogosName = document.createElement("li")
//   dogosName.innerText = dogName
//   dogElementList.appendChild(dogosName)
//   console.log(dogName)

//   // document.querySelector("#dogs-img").setAttribute("src", imageUrl);
//   // document.querySelector("#dogname").innerHTML =dogName;
//   // document.querySelector("#dogheight").innerHTML = dogheight;
//   // document.querySelector("#dogOrigin").innerHTML =dogOrigin ;
//   // document.querySelector("#dogTemperament").innerHTML =dogTemperament;
//   // document.querySelector("#dogLifeSpan").innerHTML = dogLifeSpan;
//   // document.querySelector("#dogWeight").innerHTML = dogweight;


//   console.log(imageUrl);
// }

// const createDescriptionEntry = ({ name, value }) => {
//   const descriptionTerm = document.createElement("dt");
//   descriptionTerm.textContent = name;
//   const descriptionValue = document.createElement("dd");
//   descriptionValue.textContent = value;
//   const parentElement = document.querySelector("#dogs description")
//   parentElement.appendChild(descriptionTerm);
//   parentElement.appendChild(descriptionValue);
// }

// const feedDogsDescription = ({ bred_for: bredFor, bred_group: bredGroup,name, temperament, life_span: lifeSpan, origin, height, weight }) => {

//   createDescriptionEntry({ 
//     name: "Name",
//     value: name
//     });

//   createDescriptionEntry({ 
//     name: "Bred for",
//      value: bredFor
//      });
//   createDescriptionEntry({
//      name: "Bred group", 
//      value: bredGroup 
//     });
 
//   createDescriptionEntry({ 
//     name: "Temperament",
//      value: temperament
//      });
//   createDescriptionEntry({
//      name: "Life span", 
//      value: lifeSpan 
//     });
//   createDescriptionEntry({ 
//     name: "Origin", 
//     value: origin 
//   });
//   createDescriptionEntry({ 
//     name: "Height [cm]", 
//     value: height.metric
//    });
//   createDescriptionEntry({
//      name: "Weight"[kg],
//       value: weight.metric
//     });
// }

// const getDogByBreed = async (breedId) => {

//   const data = await fetch(baseUrl + "/images/search?include_breed=1&breed_id=" +breedId).then((data)=>data.json())

//   console.log(data[0].url);

//   let imageUrl = data[0].url;
 
//   fetchDogsBreeds().then(result => {                                     

//     for(value  of result){
//       if(value.id === result[breedId].id){
//         let allData = result[breedId];
//         let dogName =  allData.name;
//         let dogheight =  allData.height.imperial;
//         let dogweight =  allData.weight.imperial;
//         let dogLifeSpan =  allData.life_span
//         let dogTemperament = allData.temperament
//         let dogOrigin = allData.origin
      
//         console.log(dogName)
//         feedDogsImage(imageUrl, dogName, dogheight, dogweight,dogTemperament,dogLifeSpan, dogOrigin );
//           break;
//       }else {
//         // console.log("no match")
//       }
//     }

//   });

  
//     }
    


// const changeDogs = () => {
//   console.log(event.target.value);
//   getDogByBreed(event.target.value);
// };

// fetchDogsBreeds().then(result => {
//   console.log(result[3]);
// // fetchDogsBreeds().then(result => {
// //   console.log(result);
// });







// const baseUrl = "https://api.thedogapi.com/v1";

// const fetchDogsBreeds = async () => {
//   try {
//     const response = await fetch(baseUrl + "/breeds");
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const dogBreeds = await response.json();
//     return populateDogsSelect(dogBreeds); // Return the result of populateDogsSelect
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// function populateDogsSelect(breeds) {
//   const select = document.querySelector(".breeds-select");
//   breeds.forEach(breed => {
//     const option = document.createElement("option");
//     option.innerHTML = breed.name;
//     option.value = breed.id;
//     select.appendChild(option);
//   });
//   return breeds; // Return the list of breeds
// }

// const feedDogsImage = (imageUrl) =>{
//   document.querySelector("#dogs-img").setAttribute("src", imageUrl);
// }

// const feedDogsImage = (imageUrl, dogName, dogheight, dogweight,dogTemperament,dogLifeSpan, dogOrigin) =>{
  
  // let dogElement = document.querySelector(".dog-details")
  // let dogIMG = document.createElement("img")
  // dogIMG.id = "dogs-img";
  // dogElement.appendChild(dogIMG)

  // let dogElementList = document.createElement("div")
  // dogElementList.classList.add('propertiesOfDog')
  
  // let dogosName = document.createElement("li")
  // dogosName.innerText = dogName
  // dogElementList.appendChild(dogosName)

  // console.log(dogName)

// }




// const createDescriptionEntry = ({ name, value }) => {
//   const descriptionTerm = document.createElement("dt");
//   descriptionTerm.textContent = name;
//   const descriptionValue = document.createElement("dd");
//   descriptionValue.textContent = value;
//   const parentElement = document.querySelector("#dogs-description")
//   parentElement.appendChild(descriptionTerm);
//   parentElement.appendChild(descriptionValue);
// }

// const feedDogsDescription = ({ bred_for: bredFor, bred_group: bredGroup,name, temperament, life_span: lifeSpan, origin, height, weight }) => {


 

//   createDescriptionEntry({ 
//     name: "Name",
//     value: name
//     });

//   createDescriptionEntry({ 
//     name: "Bred for",
//      value: bredFor
//      });
  // createDescriptionEntry({
  //    name: "Bred group"
  //    value: bredGroup 
  //   });
 
//   createDescriptionEntry({ 
//     name: "Temperament",
//      value: temperament
//      });
//   createDescriptionEntry({
//      name: "Life span", 
//      value: lifeSpan 
//     });
//   createDescriptionEntry({ 
//     name: "Origin", 
//     value: origin 
//   });
//   createDescriptionEntry({ 
//     name: "Height [cm]", 
//     value: height.metric
//    });
//   createDescriptionEntry({
//      name: "Weight"[kg],
//       value: weight.metric
//     });
// }

// const getDogByBreed = async (breedId) => {
//   try {
//     const data = await fetch(baseUrl + "/images/search?include_breed=1&breed_id=" + breedId).then((data) => data.json());
//     if (!data || !data.breeds || data.breeds.length === 0) {
//       throw new Error("Invalid response format: Missing or incomplete data properties");
//     }
//     const { url: imageUrl, breeds } = data;
//     feedDogsImage(imageUrl);
//     if (breeds && breeds.length > 0) {
//       feedDogsDescription(breeds[0]);
//     }
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// ls
// };

// const changeDogs = () => {
//   console.log(event.target.value);
//   getDogByBreed(event.target.value);
// };

// fetchDogsBreeds().then(result => {
//   console.log(result);
// });














// "https://api.thedogapi.com/v1"

// document.addEventListener("DOMContentLoaded", function() {
// const baseUrl = "https://api.thedogapi.com/v1";

// const fetchDogsBreeds = async () => {
//   try {
//     const response = await fetch(baseUrl + "/breeds");
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const dogBreeds = await response.json();
//     return populateDogsSelect(dogBreeds); // Return the result of populateDogsSelect
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// function populateDogsSelect(breeds) {
//   const select = document.querySelector(".breeds-select");
//   breeds.forEach(breed => {
//     const option = document.createElement("option");
//     option.innerHTML = breed.name;
//     option.value = breed.id;
//     select.appendChild(option);
//   });
//   return breeds; // Return the list of breeds
// }

// const feedDogsImage = (imageUrl) =>{
//   document.querySelector("#dogs-img")
//   .setAttribute("src", imageUrl);

//   document.querySelector("#dogs-img").setAttribute("src", imageUrl);

//   // const dogsImg = document.querySelector("#dogs-img");
//   //       dogsImg.setAttribute("src", imageUrl);
      


// //like button
//   const likeButton = document.createElement("button");
//   likeButton.innerText = "Like";
//   likeButton.classList.add("like-button");

// //dislike button
//   const dislikeButton = document.createElement("button");
//   dislikeButton.textContent = "Dislike";
//   dislikeButton.classList.add("dislike-button");

//   const buttonsContainer = document.createElement("div");
//   buttonsContainer.classList.add("buttons-container");
//   buttonsContainer.appendChild(likeButton);
//   buttonsContainer.appendChild(dislikeButton);

  

//   const parentElement = document.querySelector("#dogs-img").parentNode;
//   parentElement.appendChild(buttonsContainer);
  
//   // const parentElement = dogsImg.parentNode;
//   //       parentElement.appendChild(buttonsContainer);


//   likeButton.addEventListener("click", () => {
//     // like functionality
//     console.log("Liked!");
//   });

//   dislikeButton.addEventListener("click", () => {
//     console.log("Disliked!");
//   });
// }

// const removeButtons = () => {
//   const existingButtonsContainer = document.querySelector(".buttons-container");
//   if (existingButtonsContainer) {
//     existingButtonsContainer.remove();
 
//   }

// }
// document.querySelector("#dogs-img").addEventListener("click", removeButtons);

// // const createDescriptionEntry = ({ name, value }) => {
// //   const descriptionTerm = document.createElement("dt");
// //   descriptionTerm.textContent = name;
// //   const descriptionValue = document.createElement("dd");
// //   descriptionValue.textContent = value;
// //   const parentElement = document.querySelector("#dogs-description")
// //   parentElement.appendChild(descriptionTerm);
// //   parentElement.appendChild(descriptionValue);
// // }

// // const feedDogsDescription = ({ bred_for: bredFor, bred_group: bredGroup,name, temperament, life_span: lifeSpan, origin, height, weight }) => {

// //   createDescriptionEntry({ 
// //     name: "Name",
// //     value: name
// //     });

// //   createDescriptionEntry({ 
// //     name: "Bred for",
// //      value: bredFor
// //      });
// //   createDescriptionEntry({
// //      name: "Bred group", 
// //      value: bredGroup 
// //     });

// //   createDescriptionEntry({ 
// //     name: "Temperament",
// //      value: temperament
// //      });
// //   createDescriptionEntry({
// //      name: "Life span", 
// //      value: lifeSpan 
// //     });
// //   createDescriptionEntry({ 
// //     name: "Origin", 
// //     value: origin 
// //   });
// //   createDescriptionEntry({ 
// //     name: "Height [cm]", 
// //     value: height.metric
// //    });
// //   createDescriptionEntry({
// //      name: "Weight"[kg],
// //       value: weight.metric
// //     });
// // }

// const getDogByBreed = async (breedId) => {

//   const[data] = await fetch(baseUrl + "/images/search?include_breed=1&breed_id=" +breedId).then((data)=>data.json())

//     const { url: imageUrl, breeds } = data;
//     feedDogsImage(imageUrl);

//     feedDogsDescription(breeds[0]);

//    console.log(data);
//     }



// const changeDogs = () => {
//   console.log(event.target.value);
//   getDogByBreed(event.target.value);
// };

// fetchDogsBreeds().then(result => {
//   console.log(result);
// });

// // });









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

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");
  buttonsContainer.appendChild(likeButton);
  buttonsContainer.appendChild(dislikeButton);

  const parentElement = dogsImg.parentNode;
  parentElement.appendChild(buttonsContainer);

  likeButton.addEventListener("click", () => {
    // Like functionality
    console.log("Liked!");
  });

  dislikeButton.addEventListener("click", () => {
    console.log("Disliked!");
  });
}

const removeButtons = () => {
  const likeButton = document.querySelector(".like-button");
  const dislikeButton = document.querySelector(".dislike-button");

  if (likeButton) {
    likeButton.remove();
  }

  if (dislikeButton) {
    dislikeButton.remove();
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
  feedDogsDescription(breeds[0]);
  console.log(data);
}

const changeDogs = () => {
  console.log(event.target.value);
  getDogByBreed(event.target.value);
};

fetchDogsBreeds().then(result => {
  console.log(result);
});



















