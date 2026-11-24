import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(15rem,auto)] mt-6">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="" className="absolute opacity-55 scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&rsquo;m Kartikeya Singh</p>
            <p className="subtext">
              As a Senior AI Engineer at InfoEdge (Naukri), I work on model serving with vLLM and NVIDIA Triton, and on the data pipelines and APIs that support them.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="LangChain"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="RAG"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Kafka"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="LLM"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="Golang"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              text="FastAPI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              text="TypeScript"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 max-w-[68%] sm:max-w-[58%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in India and open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <img
              src="assets/logos/nit-patna.png"
              alt="NIT Patna Logo"
              className="h-24 w-24"
            />
            <p className="text-center headtext">
              B.Tech in Computer Science and Engineering from National Institute
              of Technology Patna
            </p>
            <p className="text-center text-white font-semibold text-lg">
              CGPA - 8.83/10
            </p>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 max-w-[68%] sm:max-w-[58%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Python and Go for backend services. Kafka and Debezium for event pipelines. vLLM, Triton, gRPC, and LoRA for model serving and adaptation.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
