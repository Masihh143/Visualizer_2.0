// Fetch celestial body data
const fetchBodies = async () => {
    try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const data = await response.json();
        return data.bodies; // Returns an array of celestial bodies
    } catch (error) {
        console.error("Error fetching space data:", error);
        return [];
    }
};

// Search function (called when user presses Enter)
const searchBodies = async () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results
    resultsDiv.style.display = "none"; // Hide results by default

    if (query.trim() === "") return; // Exit if input is empty

    const bodies = await fetchBodies();

    // Filter bodies based on the search query
    const filteredBodies = bodies.filter(body => body.englishName.toLowerCase().includes(query));

    // Handle no results
    if (filteredBodies.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        resultsDiv.style.display = "block"; // Show "No results" message
        return;
    }

    resultsDiv.style.display = "block"; // Show results section

    // Render filtered results
    filteredBodies.forEach(body => {
        const div = document.createElement("div");
        div.classList.add("result-item");

        div.innerHTML = `
            <h3>${body.englishName}</h3>
            <p><strong>Scientific Name:</strong> ${body.id}</p>
            <p><strong>Type:</strong> ${body.bodyType}</p>
            <p><strong>Mass:</strong> ${body.mass ? body.mass.massValue + " x10^" + body.mass.massExponent + " kg" : "N/A"}</p>
            <p><strong>Radius:</strong> ${body.meanRadius} km</p>
            <p><strong>Gravity:</strong> ${body.gravity ? body.gravity + " m/s²" : "N/A"}</p>
            <p><strong>Orbital Period:</strong> ${body.sideralOrbit ? body.sideralOrbit + " days" : "N/A"}</p>
            <p><strong>Rotation Period:</strong> ${body.sideralRotation ? body.sideralRotation + " hours" : "N/A"}</p>
            <p><strong>Escape Velocity:</strong> ${body.escape ? body.escape + " m/s" : "N/A"}</p>
            <p><strong>Is a Planet:</strong> ${body.isPlanet ? "Yes" : "No"}</p>
            <p><strong>Moons:</strong> ${body.moons ? body.moons.length + " moons" : "None"}</p>
            <p><strong>Density:</strong> ${body.density ? body.density + " g/cm³" : "N/A"}</p>
            <p><strong>Aphelion:</strong> ${body.aphelion ? body.aphelion + " km" : "N/A"}</p>
            <p><strong>Perihelion:</strong> ${body.perihelion ? body.perihelion + " km" : "N/A"}</p>
        `;

        resultsDiv.appendChild(div);
    });
};

// Add event listener for Enter key
document.getElementById('searchInput').addEventListener('keypress', (event) => {
    if (event.key === "Enter") { // Check if Enter key is pressed
        searchBodies();
    }
});



let contact = document.querySelector("#contact")

contact.addEventListener("click" , function(e){
    window.location.href = "index.html"
    e.preventDefault()
    window.scrollBy( 0 , document.querySelector("html").getBoundingClientRect().height)
})
