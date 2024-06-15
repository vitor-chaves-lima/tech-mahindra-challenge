let currentStep = 0;
const backBtn = document.querySelector("#back-btn");
const continueBtn = document.querySelector("#continue-btn");
const sections = document.querySelectorAll(".container>section");

const handleBack = () => {
  sections.forEach(
    (s) => s.classList.contains("active") && s.classList.remove("active")
  );

  currentStep -= 1;

  if (currentStep < 3 && backBtn.classList.contains("visible")) {
    backBtn.classList.remove("visible");
    continueBtn.textContent = "Continuar";
  } else {
    backBtn.classList.add("visible");
  }

  sections[currentStep].classList.add("active");
};

const handleContinue = () => {
  sections.forEach(
    (s) => s.classList.contains("active") && s.classList.remove("active")
  );

  currentStep += 1;

  if (currentStep == 3) {
    continueBtn.textContent = "Finalizar cadastro";
    backBtn.classList.add("visible");
  } else {
    continueBtn.textContent = "Continuar";
  }

  sections[currentStep].classList.add("active");
};

backBtn.addEventListener("click", handleBack);
continueBtn.addEventListener("click", handleContinue);

let selectedGender = "male";

const characterHair = document.querySelector("#character-hair");
const characterSkin = document.querySelector("#character-skin");
const characterClothes = document.querySelector("#character-clothes");

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
  characterClothes.src = `../../public/images/character-creator/other/uniform-${selectedClothesIndex}.png`;
};

const handleClothesDecrease = () => {
  if (selectedClothesIndex === 0) {
    selectedClothesIndex = clothesCount - 1;
  } else {
    selectedClothesIndex--;
  }

  handleClothesUpdate();
};

const handleClothesIncrease = () => {
  if (selectedClothesIndex === clothesCount - 1) {
    selectedClothesIndex = 0;
  } else {
    selectedClothesIndex++;
  }

  handleClothesUpdate();
};

clothesLeftBtn.addEventListener("click", handleClothesDecrease);
clothesRightBtn.addEventListener("click", handleClothesIncrease);

const handleSkinUpdate = () => {
  characterSkin.src = `../../public/images/character-creator/${selectedGender}/skin/${selectedGender}-${selectedSkinIndex}.png`;
};

const handleSkinDecrease = () => {
  if (selectedSkinIndex === 0) {
    selectedSkinIndex = skinCount - 1;
  } else {
    selectedSkinIndex--;
  }

  handleSkinUpdate();
};

const handleSkinIncrease = () => {
  if (selectedSkinIndex === skinCount - 1) {
    selectedSkinIndex = 0;
  } else {
    selectedSkinIndex++;
  }

  handleSkinUpdate();
};

skinLeftBtn.addEventListener("click", handleSkinDecrease);
skinRightBtn.addEventListener("click", handleSkinIncrease);

const handleHairUpdate = () => {
  characterHair.src = `../../public/images/character-creator/${selectedGender}/hair/${selectedGender}-${selectedHairIndex}.png`;
};

const handleHairDecrease = () => {
  if (selectedHairIndex === 0) {
    selectedHairIndex = hairCount - 1;
  } else {
    selectedHairIndex--;
  }

  handleHairUpdate();
};

const handleHairIncrease = () => {
  if (selectedHairIndex === hairCount - 1) {
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

  if (selectedGender === "male") {
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
  if (selectedGender !== "male") {
    selectedGender = "male";
    handleGenderUpdate();
  }
};

const handleFemaleGenderSelection = () => {
  if (selectedGender !== "female") {
    selectedGender = "female";
    handleGenderUpdate();
  }
};

maleBtn.addEventListener("click", handleMaleGenderSelection);
femaleBtn.addEventListener("click", handleFemaleGenderSelection);
