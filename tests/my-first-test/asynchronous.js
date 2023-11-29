// Define an async function named fetchData
async function fetchData() {
    // Use the fetch method to send a GET request to the specified URL and wait for the response
      const response = await fetch('https://15d7eb2b-8dc4-4177-b6e6-227cde1fee08.serverhub.tripleten-services.com/api/v1/warehouses');
      // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
      const data = await response.json();    
      console.log(data);
  }
  
  // Call the fetchData function to execute it
  fetchData();