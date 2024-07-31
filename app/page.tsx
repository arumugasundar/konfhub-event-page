import EventDetails from "@/components/event-details";
import EventHighlights from "@/components/event-highlights";
import Header from "@/components/header"
import HostDetails from "@/components/host-details";
import ImageBanner from "@/components/image-banner";
import { getMockData } from "@/data/mock";

export default async function Home() {

  const mock_data: any = await getMockData();

  return (
      <main className="w-full flex justify-center">
      <div className="w-full xl:w-[1440px] flex flex-wrap justify-center">
        {mock_data ? 
        <>
          <div className="w-full flex justify-center m-1"> <Header navbar_icon={mock_data?.navbar_icon ?? ''} /> </div>
          <div className="w-[98%]">
            <div className="w-full flex flex-wrap justify-between">
              <div className="w-full md:w[68%] flex justify-center m-1"> <ImageBanner /> </div>
              <div className="w-full md:w[28%] flex justify-center m-1"> <EventHighlights /> </div>
            </div>

            <div className="w-full flex flex-wrap justify-between">
              <div className="w-full md:w[68%] flex justify-center m-1"> <EventDetails /> </div>
              <div className="w-full md:w[28%] flex justify-center m-1"> <HostDetails /> </div>
            </div>
            
          </div>
        </>
        : <div> Error in fetching page data </div>}
      </div>
    </main>
  );
}
