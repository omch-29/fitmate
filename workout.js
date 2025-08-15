document.getElementById("workoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    let goal = document.getElementById("goal").value;

    if (!weight || !height || !goal) {
        alert("Please fill all fields correctly.");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    let workoutList = [];

    if (goal === "muscle") {
        workoutList = [
            "Warm-up: 5 minutes light jogging or skipping",
            "Push-ups – 4 sets of 12 reps",
            "Pull-ups – 4 sets of 8 reps",
            "Dumbbell Bench Press – 3 sets of 10 reps",
            "Squats – 4 sets of 12 reps",
            "Deadlifts – 3 sets of 8 reps",
            "Bicep Curls – 3 sets of 12 reps",
            "Plank – 3 sets of 1 min hold"
        ];
    } else if (goal === "lose") {
        workoutList = [
            "Warm-up: 10 minutes brisk walking",
            "Jumping Jacks – 4 sets of 25 reps",
            "Mountain Climbers – 3 sets of 20 reps",
            "Burpees – 3 sets of 12 reps",
            "High Knees – 3 sets of 30 seconds",
            "Lunges – 4 sets of 12 reps per leg",
            "Plank with Shoulder Taps – 3 sets of 20 reps",
            "Cool Down: 5 min stretching"
        ];
    } else if (goal === "maintain") {
        workoutList = [
            "Warm-up: 5 minutes dynamic stretching",
            "Push-ups – 3 sets of 10 reps",
            "Bodyweight Squats – 3 sets of 12 reps",
            "Plank – 3 sets of 1 min hold",
            "Jump Rope – 5 minutes",
            "Lunges – 3 sets of 10 reps per leg",
            "Cool Down: 5 min stretching"
        ];
    }

    document.getElementById("bmiResult").innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
    
    let listEl = document.getElementById("workoutList");
    listEl.innerHTML = "";
    workoutList.forEach(exercise => {
        let li = document.createElement("li");
        li.textContent = exercise;
        listEl.appendChild(li);
    });

    document.getElementById("result").classList.remove("hidden");
});
