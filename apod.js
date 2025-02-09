const apiKey = 'jYPR10mwZleUfORGBCb2cCDM7EhhCiInxO7AhKid'; // Your NASA API Key
const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchAPOD() {
    try {
        const response = await fetch(apodUrl);
        const data = await response.json();

        // Log the full API response (check if it's an array)
        console.log("Fetched APOD Data:", data);

        // Check if data contains an array (it normally doesn't for APOD)
        if (Array.isArray(data)) {
            console.log("Data is an array with length:", data.length);
        } else {
            console.log("Data is a single object.");
        }

        // Set the image as the background of the fullscreen div
        document.getElementById('apodImage').style.backgroundImage = `url(${data.url})`;

        // Optional: Show title & description
        document.getElementById('apodImage').innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
        `;

    } catch (error) {
        console.error("Error fetching APOD:", error);
    }
}

// Call the function
fetchAPOD();


let contact = document.querySelector("#contact")

contact.addEventListener("click" , function(e){
    e.preventDefault()
    window.scrollBy( 0 , document.querySelector("html").getBoundingClientRect().height)
})