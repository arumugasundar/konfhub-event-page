## Project Description
   This next.js Application is an attempt to mimic konfhub's event page with few improvemnts in UI. As per this current state of repository, components to show image banner, event highlights & host details were build. Also some initial works were done on the tab view for event details component within the stipulated time.

## Technologies Used
- Next.js, Tailwind CSS, Shadcn/ui

## To run this project locally
- To install all the dependencies - `npm install`.
- To run the project - `npm run dev`.

## Project Setup
- To instantiate a next project with tailwind css - `npx create-next-app@latest`
- Navigate into the project folder & run the project with `npx run dev`
- To configure shadcn/ui with the project - `npx shadcn-ui@latest init`
- Follow the steps mentioned in [`shadcn docs`](https://ui.shadcn.com/docs/installation/next) .
- To add a button component - `npx shadcn-ui@latest add button`
- To enable dark/light themes - `npm install next-themes`
- Follow the steps mentioned in [`shadcn dark mode`](https://ui.shadcn.com/docs/dark-mode/next) .

## Mock API Setup
- Create a `data` folder in the root directory.
- Create a `mock.ts` file inside `data` folder.
- Place the following code snippet inside that file, to define a function to fetch data from the public API provided
```
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
```
- Similarly, create an `api` folder inside `app` directory. 
- Create a `mock` folder inside the `api` with a file named `route.ts` and place the following code snippet to expose an API route to fetch data.
```
import { getMockData } from "@/data/mock";

const GET = async () => {
    const response = await getMockData();
    return Response.json(response)
}

export { GET };
```
- Now, we can able to send a GET request through `{domain}/api/mock` to fetch data via Postman.
