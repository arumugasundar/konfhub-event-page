import React from 'react'
import parse from 'html-react-parser';

const About = ({ description }: any) => {
  return (
    <section className="h-96 overflow-auto m-1 p-1 border-4 rounded-xl border-stone-500">
        <div className="m-1 p-1"> {parse(description)} </div>
    </section>
  )
}

export default About