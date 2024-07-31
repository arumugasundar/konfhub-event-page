export const getMockData = async () => {
    try{

        let response = await fetch("https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task", { method: "GET", redirect: "follow" });
        response = await response.json();
        return response;
    } catch(err) {
        console.log('error :', err?.toString());
        return null;
    }
}