/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-lora min-h-screen flex flex-col m-0 p-0">
      <header className="bg-[#ee9a40] text-black p-4 text-center border-b border-black font-avenir">
        <h1 className="text-3xl font-bold m-0">Lucas Firas Kayssi</h1>
      </header>
      <nav className="bg-[#9ea696] p-2 text-center border-b border-black font-avenir">
        <NavLink to="/about" className={({ isActive }) => `mx-4 no-underline hover:underline ${isActive ? 'text-white' : 'text-black'}`}>About</NavLink>
        <NavLink to="/research" className={({ isActive }) => `mx-4 no-underline hover:underline ${isActive ? 'text-white' : 'text-black'}`}>Research</NavLink>
        <NavLink to="/teaching" className={({ isActive }) => `mx-4 no-underline hover:underline ${isActive ? 'text-white' : 'text-black'}`}>Teaching</NavLink>
        <NavLink to="/cv" className={({ isActive }) => `mx-4 no-underline hover:underline ${isActive ? 'text-white' : 'text-black'}`}>CV</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `mx-4 no-underline hover:underline ${isActive ? 'text-white' : 'text-black'}`}>Contact</NavLink>
      </nav>
      <main className="flex-grow p-8">
        {children}
      </main>
    </div>
  );
}

function About() {
  return (
    <div className="flex justify-between items-start">
      <div className="w-[60%] pr-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="leading-relaxed">
          Welcome to the About page. Here, you will find information about Lucas Firas Kayssi. 
          This section will be updated soon with more details about his background, interests, and work.
        </p>
      </div>
      <div className="w-[35%] text-right self-start">
        <img 
          src="https://raw.githubusercontent.com/phiras01/firaskayssi.com/main/fk-logo.jpg" 
          alt="Lucas Firas Kayssi Logo" 
          className="w-[533px] max-w-full h-auto rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

function Research() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Research</h2>
      <p className="leading-relaxed">
        Welcome to the Research page. Here, you will find details about Lucas Firas Kayssi's research work, 
        publications, and ongoing projects. This section will be updated soon.
      </p>
    </div>
  );
}

function Teaching() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Teaching</h2>
      <p className="leading-relaxed">
        Welcome to the Teaching page. Here, you will find details about Lucas Firas Kayssi's teaching experience, 
        courses taught, and educational philosophy. This section will be updated soon.
      </p>
    </div>
  );
}

function CV() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">CV</h2>
      <p className="leading-relaxed">
        <a 
          href="https://cdn.jsdelivr.net/gh/phiras01/firaskayssi.com@main/Lucas%20CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Here
        </a> is my CV.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="leading-relaxed">
        Email: <a href="mailto:kayssil@mcmaster.ca" className="text-blue-600 hover:underline">kayssil@mcmaster.ca</a>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
