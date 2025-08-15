document.getElementById("getMealsBtn").addEventListener("click", function () {
    let diet = document.getElementById("diet").value;
    let mealsPerDay = document.getElementById("mealsPerDay").value;
    let output = document.getElementById("mealSuggestions");

    if (!diet || !mealsPerDay) {
        output.innerHTML = "<p>Please fill all fields.</p>";
        return;
    }

    let meals = getMealPlan(diet, mealsPerDay);
    output.innerHTML = `<h3>Your Meal Plan:</h3><ul>${meals.map(m => `<li>${m}</li>`).join('')}</ul>`;
});

function getMealPlan(diet, mealsPerDay) {
    let mealOptions = {
        veg: ["Oats with fruits", "Paneer salad", "Vegetable soup", "Dal & rice", "Mixed veg curry"],
        nonveg: ["Boiled eggs", "Grilled chicken", "Fish curry", "Chicken salad", "Egg curry"],
        vegan: ["Smoothie bowl", "Tofu stir fry", "Quinoa salad", "Vegan curry", "Nut butter toast"],
        keto: ["Avocado omelette", "Grilled salmon", "Cheese salad", "Keto chicken curry", "Zucchini noodles"]
    };

    return mealOptions[diet].slice(0, mealsPerDay);
}

