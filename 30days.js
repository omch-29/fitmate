// List of workouts for 30 days
const challengeData = [
    { day: 1, workout: ["10 push-ups", "15 squats", "20 jumping jacks", "30-sec plank"] },
    { day: 2, workout: ["12 push-ups", "20 squats", "25 jumping jacks", "35-sec plank"] },
    { day: 3, workout: ["15 push-ups", "25 squats", "30 jumping jacks", "40-sec plank"] },
    { day: 4, workout: ["Rest day — light stretching or yoga"] },
    { day: 5, workout: ["15 push-ups", "30 squats", "20 mountain climbers", "45-sec plank"] },
    { day: 6, workout: ["18 push-ups", "35 squats", "25 mountain climbers", "50-sec plank"] },
    { day: 7, workout: ["Rest day — go for a walk or light jog"] },
    { day: 8, workout: ["20 push-ups", "40 squats", "30 mountain climbers", "1-min plank"] },
    { day: 9, workout: ["22 push-ups", "45 squats", "35 mountain climbers", "1-min 5-sec plank"] },
    { day: 10, workout: ["Rest day — stretching & mobility exercises"] },
    { day: 11, workout: ["25 push-ups", "50 squats", "40 jumping jacks", "1-min 10-sec plank"] },
    { day: 12, workout: ["28 push-ups", "55 squats", "45 jumping jacks", "1-min 15-sec plank"] },
    { day: 13, workout: ["Rest day — yoga or deep stretching"] },
    { day: 14, workout: ["30 push-ups", "60 squats", "50 jumping jacks", "1-min 20-sec plank"] },
    { day: 15, workout: ["32 push-ups", "65 squats", "55 jumping jacks", "1-min 25-sec plank"] },
    { day: 16, workout: ["Rest day — go for a 20-min walk"] },
    { day: 17, workout: ["35 push-ups", "70 squats", "60 jumping jacks", "1-min 30-sec plank"] },
    { day: 18, workout: ["38 push-ups", "75 squats", "65 jumping jacks", "1-min 35-sec plank"] },
    { day: 19, workout: ["Rest day — meditation & breathing exercises"] },
    { day: 20, workout: ["40 push-ups", "80 squats", "70 jumping jacks", "1-min 40-sec plank"] },
    { day: 21, workout: ["42 push-ups", "85 squats", "75 jumping jacks", "1-min 45-sec plank"] },
    { day: 22, workout: ["Rest day — slow yoga flow"] },
    { day: 23, workout: ["45 push-ups", "90 squats", "80 jumping jacks", "1-min 50-sec plank"] },
    { day: 24, workout: ["48 push-ups", "95 squats", "85 jumping jacks", "1-min 55-sec plank"] },
    { day: 25, workout: ["Rest day — active recovery walk"] },
    { day: 26, workout: ["50 push-ups", "100 squats", "90 jumping jacks", "2-min plank"] },
    { day: 27, workout: ["52 push-ups", "105 squats", "95 jumping jacks", "2-min 5-sec plank"] },
    { day: 28, workout: ["Rest day — full body stretch"] },
    { day: 29, workout: ["55 push-ups", "110 squats", "100 jumping jacks", "2-min 10-sec plank"] },
    { day: 30, workout: ["60 push-ups", "120 squats", "110 jumping jacks", "2-min 15-sec plank"] }
];

// Get container
const grid = document.getElementById("challenge-grid");

// Create cards
challengeData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("day-card");

    let workoutList = "";
    if (Array.isArray(item.workout)) {
        workoutList = "<ul>" + item.workout.map(ex => `<li>${ex}</li>`).join("") + "</ul>";
    } else {
        workoutList = `<p>${item.workout}</p>`;
    }

    card.innerHTML = `
        <h3>Day ${item.day}</h3>
        ${workoutList}
    `;

    grid.appendChild(card);
});
