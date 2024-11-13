document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById("app");
    const output = document.getElementById("recipeOutput");

    // Store selected values and dynamically generate recipe
    function generateRecipe() {
        let meat = Array.from(document.querySelectorAll('input[name="meat"]:checked')).map(el => el.value);
        let vegetables = Array.from(document.querySelectorAll('input[name="vegetables"]:checked')).map(el => el.value);
        let spices = Array.from(document.querySelectorAll('input[name="spice"]:checked')).map(el => el.value);
        let method = document.querySelector('input[name="method"]:checked')?.value;

        // Validation
        if (!method) {
            alert("Please select a grilling method.");
            return;
        }

        // Create recipe summary
        let recipe = `
            <h3>Grilling Summary:</h3>
            <p><strong>Meat:</strong> ${meat.join(", ") || 'None selected'}</p>
            <p><strong>Vegetables:</strong> ${vegetables.join(", ") || 'None selected'}</p>
            <p><strong>Spices:</strong> ${spices.join(", ") || 'None selected'}</p>
            <p><strong>Method:</strong> ${method}</p>
        `;

        output.innerHTML = recipe;
        applyTheme();
    }

    // Apply random theme on each recipe generation
    function applyTheme() {
        const themes = ["#ffe4b5", "#98fb98", "#afeeee", "#dda0dd"];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        document.body.style.backgroundColor = randomTheme;
    }

    window.generateRecipe = generateRecipe;
});
