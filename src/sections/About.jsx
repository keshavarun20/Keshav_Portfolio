import React, { useState } from "react";
import Globe from "react-globe.gl";
import { color } from "three/webgpu";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("keshavarun1220@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Keshav</p>
              <p className="grid-subtext">
                An undergraduate with hands-on experience in both front-end and
                back-end development. I have a strong background in creating
                full-stack applications and a passion for building efficient,
                user-friendly solutions, continuously expanding my knowledge in
                web development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid6.png"
              alt="grid-6"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have experience working with a range of technologies for both
                front-end and back-end development. My toolkit includes
                frameworks like React, Laravel, Spring Boot and Tailwind CSS.
                Currently, I’m expanding my expertise by learning Three.js for
                3D graphics and Spring JWT for secure backend development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                labelsData={[
                  {
                    lat: 6.8972222,
                    lng: 80.5958333,
                    text: "I'm Here",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm based in Sri Lanka</p>
              <p className="grid-subtext">
                I'm open to working remotely, onsite, or in a hybrid setup,
                offering flexibility to collaborate effectively in any
                environment
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Codding</p>
              <p className="grid-subtext">
                I'm passionate about coding and solving problems, constantly
                exploring new technologies to create impactful and innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2" id="#C">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-headtext">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-grey_gradient text-white">
                  keshavarun1220@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
