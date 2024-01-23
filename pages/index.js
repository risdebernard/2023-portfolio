import { useParallax } from "react-scroll-parallax";
import React, { useRef } from 'react';

const intro = [
  "Marissa DeBernard",
  "a full stack developer blending",
  "technical expertise with business objectives"
];

export default function HomePage() {
  const target = useRef(null);
  const words = useParallax({
    speed: 50,
    targetElement: target.current
  })

  return (
    <main>
      {/*<!-- Hero Section -->*/}
      <section className="dark h-screen relative" ref={target}>
        <h1 className="absolute top-1/2 transform -translate-y-1/2 text-6xl ml-24" ref={words.ref}>
          {Object.values(intro).map((value, index) => (
            <span key={index} className="block opacity-90">{value}</span>
          ))}
        </h1>
      </section>

      {/*<!-- About (Timeline) -->*/}
      <section id="about" className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-4 place-content-center">
        <div className="col-auto" style={{
          backgroundColor: 'lightblue'
        }}>
          <img src="https://placehold.co/300x400" />
        </div>
        <div className="col-auto" style={{
          backgroundColor: 'lightblue'
        }}>
          <p>Hi I'm Marissa DeBernard, a versatile full-stack developer and creative technologist with a unique ability to merge technical prowess with strategic business objectives. With a proven track record of not only talking the talk but also walking the walk, I specialize in ensuring that technology solutions not only meet but exceed business needs and marketing goals.</p>
          <p>Having worn many hats throughout my career, I bring a comprehensive skill set to the table. From fostering seamless client communication and building robust relationships to efficiently managing IT operations, maintaining servers, and streamlining DevOps processes, I thrive in navigating the intersection of technology and business.</p>
        </div>
      </section>

      {/*<!-- Work / Experience -->*/}
      <section id="experience">
        
      </section>

      {/*<!-- Contact -->*/}
      <section id="contact">

      </section>
    </main>
  );
}