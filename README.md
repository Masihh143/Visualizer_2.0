# Space Visualizer Project

## Purpose of the Project
The purpose of this project is to provide an interactive and visually appealing platform for users to explore celestial bodies in our solar system. Users can search for detailed information about planets, moons, comets, and asteroids by leveraging data fetched dynamically from NASA's API. This project aims to educate and engage users by offering structured, real-time information about space.

---

## Website Workflow

### 1. **Home Page (index.html)**
   - The home page serves as the entry point of the website with a navbar containing links to different sections such as "Home," "Dictionary," "Visualizer," and "Contact Us."
   - The home page provides a brief introduction to the website and its purpose.

### 2. **Dictionary Page (dictionary.html)**
   - **Search Functionality:**
     - Users can search for celestial bodies by name using the search bar.
     - Results are displayed dynamically when the user types and presses enter.
   - **Result Display:**
     - Detailed information about the celestial body is displayed, including its name, type, mass, radius, gravity, orbital period, and other relevant data.
     - The display is well-formatted for better readability.
   - **API Data Fetching:**
     - NASA's Solar System OpenData API is used to fetch information about celestial bodies.
   
### 3. **Event Listeners for Navigation**
   - Dynamic navigation is implemented where specific elements redirect the user to different pages using JavaScript event listeners.

---

## APIs Used

### 1. **NASA Solar System OpenData API**
   - **Endpoint Used:**
     - `https://api.le-systeme-solaire.net/rest/bodies/`
   - **Purpose:**
     - Provides information about all known celestial bodies in the solar system.
     - Data includes details like mass, radius, gravity, orbital period, rotation period, escape velocity, moons, and more.
   - **Implementation:**
     - The API is fetched using JavaScript's `fetch` function, and the data is dynamically processed and displayed in the dictionary page.

---

## Modules and Libraries Used

### 1. **HTML/CSS/JavaScript**
   - **HTML:** For the structure of the web pages.
   - **CSS:** For styling the pages and improving the overall user interface and experience.
   - **JavaScript:** For dynamic content rendering, event handling, and API fetching.

### 2. **Fetch API**
   - Used to retrieve data from the NASA API.

### 3. **iFrame**
  -  iFrame used is obtained from "https://science.nasa.gov/solar-system/" website

## Use of Server and Fetching API

### Use of Server
   - Although this project primarily runs on the client side, it can be served using a local or remote web server (e.g., VS Code Live Server, Apache, or Nginx) to enable seamless navigation between HTML files and ensure correct handling of assets.

### Fetching API
   - **Process:**
     - When a user enters a query in the search bar, the `fetch` function is used to send a request to the NASA Solar System OpenData API.
     - The API returns a JSON object containing data about all celestial bodies.
   - **Data Filtering:**
     - The data is filtered in JavaScript to find and display results that match the user query.
   - **Dynamic Rendering:**
     - The filtered results are dynamically injected into the DOM to display structured information for each matching celestial body.

---

## Features
- Real-time search functionality.
- Dynamic and interactive UI.
- Well-structured and formatted data display.
- Lightweight and fast-loading web pages.

---

## How to Run
1. Clone the repository.
2. Open the project in any code editor.
3. Serve the project using a local web server (e.g., VS Code Live Server).
4. Navigate to `index.html` or `dictionary.html` to use the website.
