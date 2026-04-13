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
      <div className="w-[35%] text-right self-start flex flex-col items-end">
        <img 
          src="https://raw.githubusercontent.com/phiras01/firaskayssi.com/main/fk-logo.jpg" 
          alt="Lucas Firas Kayssi Logo" 
          className="w-[533px] max-w-full h-auto rounded-lg mb-4"
          referrerPolicy="no-referrer"
        />
        <p className="leading-relaxed mb-2 text-lg">
          Email: <a href="mailto:lfkayssi@yorku.ca" className="text-blue-600 hover:underline">lfkayssi@yorku.ca</a>
        </p>
        <p className="leading-relaxed text-lg">
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
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Teaching Experience</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
        <li><strong>2CT3 Critical Thinking</strong> (philosophy department), Fall 2023</li>
        <li><strong>1BB3 Argumentation</strong> (philosophy department), Winter 2024</li>
        <li><strong>1F03 Meaning in Life</strong> (philosophy department), Fall 2024</li>
        <li><strong>1E03 Philosophical Questions</strong> (philosophy department), Winter 2025</li>
        <li><strong>PHIL1000 Intro to Philosophy</strong> (philosophy department), Fall 2025–Winter 2026</li>
      </ul>
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
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
