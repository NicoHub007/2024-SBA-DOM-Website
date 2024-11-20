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

        // Create a DocumentFragment to insert the recipe
        const fragment = document.createDocumentFragment();
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = recipe;
        fragment.appendChild(recipeDiv);

        // Insert the fragment into the output area
        output.innerHTML = '';
        output.appendChild(fragment);

        // Apply random theme and change background using BOM
        applyTheme();
    }

    // Apply random theme on each recipe generation
    function applyTheme() {
        const themes = ["#ffe4b5", "#98fb98", "#afeeee", "#dda0dd"];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        document.body.style.backgroundColor = randomTheme;
    }

    // Add event listener to the generate button
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateRecipe);

    // Function to iterate over checkboxes and add a class to the selected ones
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Modify style or classes of elements
            if (checkbox.checked) {
                checkbox.parentNode.style.backgroundColor = "#e0ffe0"; // Highlight selected
            } else {
                checkbox.parentNode.style.backgroundColor = ""; // Reset when unchecked
            }
        });
    });

    // Example of using the parent-child-sibling relationship
    const formSections = document.querySelectorAll('form div');
    formSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.border = "2px solid #ff6347"; // Highlight section on hover
        });
        section.addEventListener('mouseout', () => {
            section.style.border = ""; // Reset border
        });
    });

    window.generateRecipe = generateRecipe; // Expose function globally for the button
});
