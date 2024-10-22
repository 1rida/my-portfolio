'use client'
import React from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    
      <main>
      <header   className="text-white bg-gray-700 body-font  " >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  " >
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

    <a href="#" className="mr-5 hover:text-yellow-300">home</a>
    <a href="#about " className="mr-5 hover:text-yellow-300">about</a>
    <a href="#contact-us" className="mr-5 hover:text-yellow-300">contact us</a>
    <a href="#skills" className="mr-5 hover:text-yellow-300">skills</a>
    <a id="pro" href="#projects" className="mr-5 hover:text-yellow-300 ">projects</a>

      

      

    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-blue-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

      <span className="ml-3 text-white text-xl font-bold">RIDA RASHEED</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
       
    </div>
  </div>


</header>
      
    


<section className="text-gray-600 bg-slate-400 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1  className=" font-bold sm:text-6xl text-6xl mb-7 pb-20 font-medium text-black" > <i> <b> <Typewriter
  options={{
    strings: ['i am a develapor ', ' i am a website maker '],
    autoStart: true,
    loop: true,
  }}
/>
       
        </b> </i></h1>
      <p className="mb-5 p-1 leading-relaxed text-black" > <i>I’m a passionate web developer specializing in HTML, CSS, JavaScript, TypeScript, and Next.js. With a strong foundation in front-end technologies, I create dynamic and responsive web applications that deliver seamless user experiences.

My journey in web development has been driven by a desire to blend creativity with functionality. I love transforming ideas into beautiful, efficient websites and applications that not only look great but also perform flawlessly.

Explore my projects below to see how I bring code to life! </i> </p>
      <div className="flex justify-center">

     <Link href={"https://vercel.com/1ridas-projects"}>

        <button className="inline-flex text-white  bg-gray-700  border-0 py-2 px-6 focus:outline-none hover:text-red-500 rounded text-lg">Vercel</button>
        </Link>
        <Link href="https://github.com/1rida" passHref>

        
        <button className="ml-4 inline-flex text-white bg-gray-700  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:text-red-500 rounded text-lg">gitHub

        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="/images/bird.jpg  " width={500} height={200} />
    </div>
  </div>
</section>


<section  className=" bg-purple-300 ]">

  <h1 id="projects" className="flex justify-center font-bold text-[20px]  text-white bg-red-700 "><i>projects</i>
  </h1>
  
  
  <div id="pic">
<div id="pic1" className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-2  ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] " src="/images/atm.jpg" alt="atm" width={400} height={100} />

  <h3 className="ml-6 text-center font-bold">ATM MACHINE project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide convenient banking services <br /> to costumers.....
   </p> <br />
<Link href={"https://github.com/1rida/ATM-machine.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>
  
  <div  id="pic2" className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto float-right mt-2   ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] mx-3 w-600" src="/images/numb.jpg" alt="num" width={350} height={400} />

  <h3 className="ml-6 text-center font-bold">CLI num-guessing project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide convenient gaming services <br /> to costumers.....
   </p> <br />
<Link href={"https://github.com/1rida/cli-number-guessing.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>

  <div id="pic3"  className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto float-right mt-2  ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] " src="/images/word.jpg" alt="word" width={400} height={100} />

  <h3 className="ml-6 text-center font-bold">Word counter project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide word counter services <br /> to costumers.....
   </p> <br />

<Link href={"https://github.com/1rida/word-counter.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>

  <div id="pic4" className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto float-right mt-2  ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] " src="/images/todo.jpg" alt="todo" width={400} height={100} />

  <h3 className="ml-6 text-center font-bold ">TODO list project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide a TODO list services <br /> to costumers.....
   </p> <br />
<Link href={"https://github.com/1rida/todos.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>

  <div id="pic5" className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto float-right mt-2  ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] " src="/images/hack.jpg" alt="hack" width={400} height={100} />

  <h3 className="ml-6 text-center font-bold">HACKATHONE project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide HACKATHONE project <br /> to costumers.....
   </p> <br />
<Link href={"https://github.com/1rida/dynamic-resume-builder-with-form.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>

  <div id="pic6" className="border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto float-right mt-2 ">
  <Image className="rounded-[15px] shadow-black-[25px 25px 25px] " src="/images/form.jpg" alt="form" width={400} height={100} />

  <h3 className="ml-6 text-center font-bold">LOGIN form project</h3> <br /><br />
  <p className="ml-6 text-center">an automated taller machine is designed <br /> to provide login form <br /> for costumers.....
   </p> <br />
<Link href={"https://github.com/1rida/my-login-form.git"}>
  <button className="ml-7 px-[110px] bg-blue-500 px-8 rounded-[12px]  hover:text-white font-bold">see project</button>
  </Link>
  </div>

  </div>

</section>



<section className="bg-slate-700 body-font">

<h1 id="about" className="font-medium text-[50px] h-2 text-yellow-300 flex justify-center"> <i>about </i></h1>

  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image src="/images/com.jpg" alt="content" className="object-cover object-center h-full w-full shadow-black-[25px 25px 25px] " width={500} height={20}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-13 text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
            
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold title-font mt-4 text-yellow-300 text-lg">RIDA RASHEED</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4 " >  </div>
            <p className="text-base text-white font-medium">i am a graduated person with skills & i am open to work.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4 text-white "> <i> I’m RIDA RASHEED, a web developer dedicated to building user-friendly, responsive websites. With a background , color combination, images and many more, I have a passion for creating digital experiences that engage and inspire.

I specialize in HTML , CSS & JavaScript. My approach is centered around clean code, intuitive design, collaboration with clients.

Check out my portfolio to see my recent projects, and let’s connect to discuss how I can help bring your vision to life!. </i></p>

            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          
        </div>
      </div>
    </div>
  </div>
</section>

<section>


<section className="text-gray-600 bg-blue-200 body-font relative  ">
  
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center  mb-12">
      <h1 id="contact-us" className="sm:text-3xl text-2xl font-bold title-font mb-4 text-red-700"> <i>Contact Us</i></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">If you’d like to get in touch, I’d love to hear from you! Whether you have questions, feedback, or are interested in collaboration, feel free to reach out using the contact form below or email me directly at ridarasheed58@gmail.com. I aim to respond within 48 hours, and I look forward to connecting with you!

</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-black font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-black font-bold">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <Link href={"ridarasheed58@gmail.com"}>
          <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">GET IN TOUCH</button>
          </Link>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-yellow-700 font-medium text-black">ridarasheed58@gmail.com</a>
          <p className="leading-normal my-5 text-black font-bold">Karachi.
           
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>

</section>

<section className="bg-violet-500 h-[70vh] " >

  <h1 id="skills" className="text-[50px] font-bold h-2  flex justify-center"> <i>skills</i></h1>

  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"> <i>Professional skills </i></h1>
      <p className="text-white font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"> <i>As a professional, I bring a diverse skill set that blends creativity and technical proficiency.</i></p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">Hyper text markup language</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">Cascading styling sheet</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">Javascript & typescript</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">Canva</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">React & Next js</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">MS office</span>
        </div>
      </div>
    </div>
  </div>
</section>


</section>

<section>

<footer className="text-white bg-black body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-blue-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

      <span className="ml-3 text-xl text-white font-bold">RIDA RASHEED</span>
    </a>
    <p className="text-sm text-white sm:ml-4 http://twitter.com sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 ridarasheed 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="http://facebook.com" className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="http://twitter.com" className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="http://instagram.com" className="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/rida-rasheed-8638402b5/" className="ml-3 text-white">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
</section>
</main>
  )
};




