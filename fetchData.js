export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/nasa');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('✅ Fetched NASA Data:', data); // Debugging log (can be removed)
      return data;
    } catch (error) {
      console.error('❌ Error fetching data:', error);
      return null;
    }
  };
  
  // Call fetchData() when the page loads (optional)
  window.onload = () => {
    fetchData();
  };
  