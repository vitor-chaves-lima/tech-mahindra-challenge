let selectedGender = "male";

const hairLeftBtn = document.querySelector("#hair-left-btn");
const hairRightBtn = document.querySelector("#hair-right-btn");
const hairCount = 6;
let selectedHairIndex = 0;

const skinLeftBtn = document.querySelector("#skin-left-btn");
const skinRightBtn = document.querySelector("#skin-right-btn");
const skinCount = 4;
let selectedSkinIndex = 0;

const clothesLeftBtn = document.querySelector("#clothes-left-btn");
const clothesRightBtn = document.querySelector("#clothes-right-btn");
const clothesCount = 3;
let selectedClothesIndex = 0;

const maleBtn = document.querySelector("#gender-male-btn");
const femaleBtn = document.querySelector("#gender-female-btn");

const handleClothesUpdate = () => {
  console.log("Selected Clothes Index:", selectedClothesIndex);
};

const handleClothesDecrease = () => {
  if (selectedClothesIndex == 0) {
    selectedClothesIndex = clothesCount - 1;
  } else {
    selectedClothesIndex--;
  }

  handleClothesUpdate();
};

const handleClothesIncrease = () => {
  if (selectedClothesIndex == clothesCount - 1) {
    selectedClothesIndex = 0;
  } else {
    selectedClothesIndex++;
  }

  handleClothesUpdate();
};

clothesLeftBtn.addEventListener("click", handleClothesDecrease);
clothesRightBtn.addEventListener("click", handleClothesIncrease);

const handleSkinUpdate = () => {
  console.log("Selected Skin Index:", selectedSkinIndex);
};

const handleSkinDecrease = () => {
  if (selectedSkinIndex == 0) {
    selectedSkinIndex = skinCount - 1;
  } else {
    selectedSkinIndex--;
  }

  handleSkinUpdate();
};

const handleSkinIncrease = () => {
  if (selectedSkinIndex == skinCount - 1) {
    selectedSkinIndex = 0;
  } else {
    selectedSkinIndex++;
  }

  handleSkinUpdate();
};

skinLeftBtn.addEventListener("click", handleSkinDecrease);
skinRightBtn.addEventListener("click", handleSkinIncrease);

const handleHairUpdate = () => {
  console.log("Selected Hair Index:", selectedHairIndex);
};

const handleHairDecrease = () => {
  if (selectedHairIndex == 0) {
    selectedHairIndex = hairCount - 1;
  } else {
    selectedHairIndex--;
  }

  handleHairUpdate();
};

const handleHairIncrease = () => {
  if (selectedHairIndex == hairCount - 1) {
    selectedHairIndex = 0;
  } else {
    selectedHairIndex++;
  }

  handleHairUpdate();
};

hairLeftBtn.addEventListener("click", handleHairDecrease);
hairRightBtn.addEventListener("click", handleHairIncrease);

const handleGenderUpdate = () => {
  selectedHairIndex = 0;
  handleHairUpdate();

  selectedSkinIndex = 0;
  handleSkinUpdate();

  selectedClothesIndex = 0;
  handleClothesUpdate();

  if (selectedGender == "male") {
    if (femaleBtn.classList.contains("selected")) {
      femaleBtn.classList.remove("selected");
    }
    maleBtn.classList.add("selected");
  } else {
    if (maleBtn.classList.contains("selected")) {
      maleBtn.classList.remove("selected");
    }
    femaleBtn.classList.add("selected");
  }
};

const handleMaleGenderSelection = () => {
  if (selectedGender != "male") {
    selectedGender = "male";
    handleGenderUpdate();
  }
};

const handleFemaleGenderSelection = () => {
  if (selectedGender != "female") {
    selectedGender = "female";
    handleGenderUpdate();
  }
};

maleBtn.addEventListener("click", handleMaleGenderSelection);
femaleBtn.addEventListener("click", handleFemaleGenderSelection);
