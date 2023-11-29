async function postRequest(){
    // Prepare POST body
    const requestBody = {
        "products": [
            {
                "id": 5,
                "quantity": 1
            },
            {
                "id": 4,
                "quantity": 5
            }
        ]
    }
    try {
        // Use the fetch method to send a POST request to the specified URL and wait for the response
        const response = await fetch('https://9e288bdd-9e18-4723-ac42-06c429442254.serverhub.tripleten-services.com/api/v1/warehouses/check', {
            method: 'POST',
            // Set headers
            headers: {
            'Content-Type': 'application/json'
            },
            // Set request body and convert the data object into a JSON string
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

postRequest()