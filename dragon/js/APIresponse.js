export async function APIresponse(url) {
    try {
        const response=await fetch(url);
        const responseJSON=await response.json();
        console.log(responseJSON);
        return responseJSON;
    } catch (error) {
        throw error;
    }
}