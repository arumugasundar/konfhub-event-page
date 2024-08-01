import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import About from './components/about';
import Speakers from './components/speakers';
import Sponsors from './components/sponsors';
import Tickets from './components/tickets';
import Workshops from './components/workshops';


const EventDetails = ({ description }: any) => {
  return (
    <section className="w-full flex justify-center m-2 p-2">
        <Tabs defaultValue="about" className="w-full overflow-x-auto">
            <TabsList className="w-full bg-stone-500 text-white h-18 flex flex-wrap md:grid grid-cols-5">
                <TabsTrigger value="about"> <span className="ml-2 text-base"> About </span> </TabsTrigger>
                <TabsTrigger value="tickets"> <span className="ml-2 text-base"> Tickets </span> </TabsTrigger>
                <TabsTrigger value="speakers"> <span className="ml-2 text-base"> Speakers </span> </TabsTrigger>
                <TabsTrigger value="workshops"> <span className="ml-2 text-base"> Workshops </span> </TabsTrigger>
                <TabsTrigger value="sponsors"> <span className="ml-2 text-base"> Sponsors </span> </TabsTrigger>
            </TabsList>

            <TabsContent value="about"> <About description={description} /> </TabsContent>
            <TabsContent value="speakers"> <Speakers /> </TabsContent>
            <TabsContent value="tickets"> <Tickets /> </TabsContent>
            <TabsContent value="workshops"> <Workshops /> </TabsContent>
            <TabsContent value="sponsors"> <Sponsors /> </TabsContent>
            
        </Tabs>
    </section>
  )
}

export default EventDetails