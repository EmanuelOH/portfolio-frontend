"use client"

import { useState } from "react";
import Link from "next/link";

export function Navbar(){
    const [selectedRole, setSelectedRole] = useState("Fullstack & AI");
    
    return (
        <header className="ml-5 fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800/50 transition-all">
            <div className="max-w-7xl mx-auto px-2 h-16 flex items-center justify-between">
                {/*Logo / Iniciales*/}
                <Link href="/" className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    &lt; Dev EmanuelOH /&gt;
                </Link>
            </div>
    
            {/**Links de navegacion (Centro) */}
            <nav className="hidden md:flex items-center justify-center space-x-7 text-xm font-medium text-slate-300">
                <Link href="#proyects" className="hover:text-purple-400 transition duration-300 hover:-translate-y-0.5">
                    Proyectos
                </Link>
                <Link href="#about-me" className="hover:text-purple-400 transition duration-300 hover:-translate-y-0.5">
                    Sobre mi
                </Link>
                <Link href="#contact" className="hover:text-purple-400 transition duration-300 hover:-translate-y-0.5">
                    Contacto
                </Link>
            </nav>
    
            {/**Selector de rol (Derecha) */}
            <div className="flex items-center space-x-3">
                <span className="text-xs text-slate-400 hidden sm:inline">Perfil:</span>
                <select value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="bg-[#131927] border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 
                    focus:outline-none focus:border-purple-500 transition-colors cursor-pointer">
                    <option value="Fullstack & AI">Fullstack & AI</option>
                    <option value="Game Dev">Game Developer (Unity)</option>
                    <option value="Machine Learning">ML & Data Science</option>
                </select>
            </div>
    
        </header>
    );
}

