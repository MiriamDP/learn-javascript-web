export async function APIresponse(url) {
    try {
        console.log("respuesta");
        const response=await fetch(url);
        const responseJSON=await response.json();
        console.log(responseJSON);
        return response;
    } catch (error) {
        throw error;
    }
}