
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

const feedDogsImage = (imageUrl) =>{
  document.querySelector("#dogs-img").setAttribute("src", imageUrl);
}

const createDescriptionEntry = ({ name, value }) => {
  const descriptionTerm = document.createElement("dt");
  descriptionTerm.textContent = name;
  const descriptionValue = document.createElement("dd");
  descriptionValue.textContent = value;
  const parentElement = document.querySelector("#dogs description")
  parentElement.appendChild(descriptionTerm);
  parentElement.appendChild(descriptionValue);
}

const feedDogsDescription = ({ bred_for: bredFor, bred_group: bredGroup,name, temperament, life_span: lifeSpan, origin, height, weight }) => {

  createDescriptionEntry({ 
    name: "Name",
    value: name
    });

  createDescriptionEntry({ 
    name: "Bred for",
     value: bredFor
     });
  createDescriptionEntry({
     name: "Bred group", 
     value: bredGroup 
    });
 
  createDescriptionEntry({ 
    name: "Temperament",
     value: temperament
     });
  createDescriptionEntry({
     name: "Life span", 
     value: lifeSpan 
    });
  createDescriptionEntry({ 
    name: "Origin", 
    value: origin 
  });
  createDescriptionEntry({ 
    name: "Height [cm]", 
    value: height.metric
   });
  createDescriptionEntry({
     name: "Weight"[kg],
      value: weight.metric
    });
}

const getDogByBreed = async (breedId) => {

 
  const[data] = await fetch(baseUrl + "/images/search?include_breed=1&breed_id=" +breedId).then((data)=>data.json())


    const { url: imageUrl, breeds} = data;
    feedDogsImage(imageUrl);
   //if (breeds && breeds.length > 0) {
    feedDogsDescription(breeds[1]);
   //}else { throw new Error("No breed information found for the given dog")}
   console.log(data);
    }
    


const changeDogs = () => {
  console.log(event.target.value);
  getDogByBreed(event.target.value);
};

fetchDogsBreeds().then(result => {
  console.log(result);
});