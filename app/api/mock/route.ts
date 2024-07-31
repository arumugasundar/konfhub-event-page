import { getMockData } from "@/data/mock";

const GET = async () => {
    const response = await getMockData();
    return Response.json(response)
}

export { GET };