test('the opening hour is earlier than the closing hour’, async () => {
    let response;
    try {
        response = await fetch('https://1abf076a-a77f-48b6-9cb1-8f574db07e5b.serverhub.tripleten-services.com[/api/v1/warehouses](https://69790952-97c6-483d-8d28-6b228b1d09f5.serverhub.tripleten-services.com/api/v1/warehouses)');
    } catch (error) {
        console.error(error);
    }
    // Create a variable to store the result of comparison
    const result = []
    const data = await response.json();
    // Iterate through each warehouse
    for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
        // Store result of comparison into the 'result' variable
        result.push(startWorkingHours < endWorkingHours)
    }
    expect(result).not.toContain(false)
})