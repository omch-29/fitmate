/*document.getElementById("getMealsBtn").addEventListener("click", function () {
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

*/document.getElementById("getMealsBtn").addEventListener("click", function () {
    const diet = document.getElementById("diet").value;
    const mealsPerDay = parseInt(document.getElementById("mealsPerDay").value);
    const output = document.getElementById("mealSuggestions");

    if (!diet) {
        output.innerHTML = `<div class="empty-state"><p>Please select a diet preference.</p></div>`;
        return;
    }

    // Show a loading message
    output.innerHTML = `<div class="empty-state"><p>Loading your meal plan...</p><i class="fas fa-spinner fa-spin"></i></div>`;

    // Simulate an API call with a delay
    setTimeout(() => {
        const meals = getMealPlan(diet, mealsPerDay);

        if (meals.length === 0) {
            output.innerHTML = `<div class="empty-state"><p>No meals found for this preference. Try another!</p></div>`;
            return;
        }

        const mealsHtml = meals.map(meal => `
            <div class="meal-card">
                <img src="${meal.img}" alt="${meal.name}">
                <h4>${meal.name}</h4>
                <p>${meal.description}</p>
                <div class="nutrition">
                    <span>Calories: ${meal.calories}kcal</span>
                    <span>Protein: ${meal.protein}g</span>
                    <span>Carbs: ${meal.carbs}g</span>
                    <span>Fat: ${meal.fat}g</span>
                </div>
            </div>
        `).join('');

        output.innerHTML = mealsHtml;

    }, 1500); // 1.5 second delay to mimic network latency
});

function getMealPlan(diet, mealsPerDay) {
    const allMeals = {
        veg: [
            { name: "Oats with Fruits & Nuts", description: "A quick and healthy breakfast option packed with fiber and protein.", calories: 350, protein: 12, carbs: 55, fat: 10, img: "oatmeal.jpg" },
            { name: "Paneer Salad", description: "A refreshing salad with grilled paneer, mixed greens, and a light dressing.", calories: 420, protein: 25, carbs: 15, fat: 28, img: "paneersalad.jpg" },
            { name: "Vegetable Soup", description: "A warm and comforting soup filled with a variety of seasonal vegetables.", calories: 250, protein: 8, carbs: 30, fat: 10, img: "vege.jpg" },
            { name: "Dal & Brown Rice", description: "A classic Indian comfort food that's both nutritious and easy to digest.", calories: 500, protein: 18, carbs: 70, fat: 15, img: "dalrice.jpg" },
            { name: "Mixed Veg Curry", description: "A delicious and nutrient-rich curry with a mix of fresh vegetables.", calories: 450, protein: 15, carbs: 45, fat: 25, img: "mixvegcury.jpg" }
        ],
        nonveg: [
            { name: "Boiled Eggs", description: "Simple, high-protein snack or breakfast to start your day strong.", calories: 150, protein: 13, carbs: 1, fat: 11, img: "Boilegg.jpg" },
            { name: "Chicken and Vegetable Skewers", description: "Tender chicken and colorful vegetables, grilled to perfection.", calories: 250, protein: 30, carbs: 15, fat: 8, img: "chi.jpg"  },
            { name: "Fish Curry with Rice", description: "A flavorful and protein-rich dish that's a staple in many cuisines.", calories: 550, protein: 30, carbs: 60, fat: 20, img: "ficu.jpg" },
            { name: "Chicken Salad", description: "A quick and easy salad with shredded chicken, greens, and a creamy dressing.", calories: 380, protein: 30, carbs: 10, fat: 25, img: "cs.jpg" },
            { name: "Egg Curry", description: "Hard-boiled eggs simmered in a rich, spicy tomato-based gravy.", calories: 480, protein: 22, carbs: 20, fat: 35, img: "eggcu.jpg" }
        ],
        vegan: [
            { name: "Smoothie Bowl", description: "A vibrant and nutritious bowl made with blended fruits and topped with seeds and nuts.", calories: 320, protein: 8, carbs: 60, fat: 5, img: "sb.jpg" },
            { name: "Tofu Stir Fry", description: "Firm tofu and mixed vegetables stir-fried in a savory soy-ginger sauce.", calories: 400, protein: 20, carbs: 40, fat: 15, img: "tsf.jpg" },
            { name: "Quinoa Salad", description: "A protein-rich salad with quinoa, chickpeas, cucumbers, and tomatoes.", calories: 380, protein: 15, carbs: 50, fat: 12, img: "qs.jpg" },
            { name: "Vegan Curry", description: "A hearty and flavorful curry made with plant-based ingredients and coconut milk.", calories: 450, protein: 10, carbs: 55, fat: 20, img: "vc.jpg" },
            { name: "Nut Butter Toast", description: "Whole-grain toast topped with your favorite nut butter and banana slices.", calories: 300, protein: 10, carbs: 35, fat: 15, img: "nbt.jpg" }
        ],
        keto: [
            { name: "Avocado Omelette", description: "A high-fat, high-protein breakfast with creamy avocado and eggs.", calories: 400, protein: 18, carbs: 5, fat: 35, img: "ao.jpg" },
            { name: "Grilled Salmon", description: "Rich in healthy fats and protein, perfect for a filling and keto-friendly meal.", calories: 500, protein: 35, carbs: 0, fat: 40, img: "gs.jpg" },
            { name: "Cheese Salad", description: "A simple yet delicious salad with various cheeses, olives, and leafy greens.", calories: 450, protein: 25, carbs: 10, fat: 35, img: "chs.jpg" },
            { name: "Keto Chicken Curry", description: "A creamy and flavorful chicken curry made without high-carb ingredients.", calories: 600, protein: 40, carbs: 10, fat: 45, img: "kcc.jpg" },
            { name: "Zucchini Noodles", description: "A pasta alternative with a low-carb sauce, perfect for a keto dinner.", calories: 350, protein: 15, carbs: 15, fat: 25, img: "zn.jpg" }
        ]
    };

    const selectedMeals = allMeals[diet] || [];
    return selectedMeals.slice(0, mealsPerDay);
}