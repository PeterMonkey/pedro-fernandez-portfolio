
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/pedro.jpg";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={!darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Pedro Fernandez
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FullStack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              "El desarrollo de software es como el arte, pero en lugar de pintar,
              se crea software que puede cambiar el mundo."
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/PedroDevJs" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/pedro-enrique-fern%C3%A1ndez-araujo-539394207/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 relative border overflow-hidden mt-16 md:h-80 md:w-80">
              <img src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl text-teal-600 py-4 pt-28">Acerca de mi</h3>
            <div className="h-1 w-full bg-teal-600"></div>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
            ¡Hola! Soy un desarrollador full-stack altamente motivado y 
            apasionado por el desarrollo de aplicaciones web de 
            alta calidad. Tengo experiencia tanto en el front-end como 
            en el back-end, y tengo habilidades sólidas en lenguajes como 
            JavaScript, HTML, CSS, y frameworks como React, Node.js, Express, 
            entre otros. Me encanta trabajar en proyectos desafiantes y en equipo, y siempre busco aprender y mejorar mis habilidades para brindar soluciones innovadoras a problemas complejos.
            </p>
            <h3 className="text-5xl text-teal-600 py-4 pt-28">Habilidades</h3>
            <div className="h-1 w-full bg-teal-600"></div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h1 className="text-4xl font-bold">Frontend</h1>
                <div className="grid grid-cols-3 gap-6 mt-8">

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          
                </div>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
            <h1 className="text-4xl font-bold">Backend</h1>
              <div className="grid grid-cols-3 gap-6 mt-8">
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />         
              </div>

            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
          <h3 className="text-5xl text-teal-600 py-4 pt-28">Portafolio</h3>
            <div className="h-1 w-full bg-teal-600"></div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-xl">
              <a href="https://image-editor-beta.vercel.app/" target="_blank" rel="noreferrer">
              <img
                className="rounded-lg object-contain w-full h-auto transition duration-500 transform hover:scale-110 hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl">
            <a href="https://shopping-cart-pedro.vercel.app/" target="_blank" rel="noreferrer">
              <img
                className="rounded-lg object-contain w-full h-auto transition duration-500 transform hover:scale-110 hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl">
            <a href="https://rick-and-morty-ifys4qn95-petermonkey.vercel.app/" target="_blank" rel="noreferrer">
              <img
                className="rounded-lg object-contain w-full h-auto transition duration-500 transform hover:scale-110 hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl">
            <a href="https://s5-06-mern-git-dev-itenseno.vercel.app/" target="_blank" rel="noreferrer">
              <img
                className="rounded-lg object-contain w-full h-auto transition duration-500 transform hover:scale-110 hover:cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
           
          </div>
        </section>
      </main>
    </div>
  );
}