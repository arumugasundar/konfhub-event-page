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
            <div className="w-full flex flex-wrap justify-center">

              <div className="w-full lg:w-[68%] flex justify-center m-1"> <ImageBanner event_poster_url={mock_data?.event_poster_url ?? ''} /> </div>
              <div className="w-full lg:w-[30%] flex justify-center m-1"> 
                <EventHighlights 
                  name={mock_data?.name ?? ''} 
                  event_live_link={mock_data?.event_live_link ?? ''} 
                  event_website={mock_data?.event_website ?? ''} 
                  start_date={mock_data?.start_date ?? ''}
                  start_time={mock_data?.start_time ?? ''}
                  end_date={mock_data?.end_date ?? ''}
                  end_time={mock_data?.end_time ?? ''}
                  time_zone={mock_data?.time_zone ?? ''}
                /> 
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-between">
              <div className="w-full lg:w-[68%] flex justify-center m-1"> 
                <EventDetails 
                  description={mock_data?.description ?? ''}
                /> 
              </div>
              <div className="w-full lg:w-[30%] flex justify-center m-1"> 
                <HostDetails 
                  organiser_name={mock_data?.organiser_name ?? ''}
                  organiser_dial_code={mock_data?.organiser_dial_code ?? ''}
                  organiser_country_code={mock_data?.organiser_country_code ?? ''}
                  organiser_phone={mock_data?.organiser_phone ?? ''}
                  organiser_email={mock_data?.organiser_email ?? ''}
                  organiser_website={mock_data?.organiser_website ?? ''}
                  organiser_image_url={mock_data?.organiser_image_url ?? ''}
                  organizer_twitter_url={mock_data?.organizer_twitter_url ?? ''} 
                  organizer_linkedin_url={mock_data?.organizer_linkedin_url ?? ''}
                  organizer_facebook_url={mock_data?.organizer_facebook_url ?? ''}
                  organiser_info={mock_data?.organiser_info ?? ''}
                /> 
              </div>
            </div>
            
          </div>
        </>
        : <div> Error in fetching page data </div>}
      </div>
    </main>
  );
}
