// Toggle Ingredients
document.getElementById("toggleIngredients").addEventListener("click", () => {
    const ingredients = document.getElementById("ingredients");
    ingredients.classList.toggle("hidden");
});

// Toggle Steps
document.getElementById("toggleSteps").addEventListener("click", () => {
    const steps = document.getElementById("steps");
    steps.classList.toggle("hidden");
});

let currentStep = 0;
const stepsList = document.querySelectorAll("#stepsList li");
const progressBar = document.getElementById("progressBar");

// Start Cooking
document.getElementById("startCooking").addEventListener("click", () => {
    currentStep = 0;
    stepsList.forEach(step => step.style.background = ""); // reset
    stepsList[currentStep].style.background = "#ffeaa7";
    document.getElementById("nextStep").disabled = false;
    progressBar.style.width = "10%";
});

// Next Step
document.getElementById("nextStep").addEventListener("click", () => {
    if (currentStep < stepsList.length - 1) {
        stepsList[currentStep].style.background = "#c7ecee"; // mark as done
        currentStep++;
        stepsList[currentStep].style.background = "#ffeaa7"; // highlight current
        progressBar.style.width = ((currentStep+1) / stepsList.length) * 100 + "%";
    } else {
        alert("🎉 Cake is ready!");
        document.getElementById("nextStep").disabled = true;
    }
});

