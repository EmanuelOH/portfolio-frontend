import Link from "next/link";


export function Hero(){
    return(
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden px-6">
            {/**Efecto de luz de fondo (Glow Effect con blur-3xl) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[550px] h-[550px] md:h-[550px] bg-purple-600/15 rounden-full blur-3xl pointer-events-none -z-10"/>
            <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-cyan-500/10 rounden-full blur-3xl pointer-events-none -z-10"/>

            <div className="max-2-4xl mx-auto text-center z-10">
                
                {/**Etiqueta de disponibilidad opcional */}
                <div className="inline-flex items-center space-x-2 bg-[#131927] border border-slate-800 px-3 py-1 rounded-full test-xs text-purple-400 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                    <span>Disponible para nuevos retos y proyectos</span>
                </div>
                
                
                    {/**Titular grande con gradiente */}
                    <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Contruyendo el futuro con <br />
                        <span className="bg-gradient-to-r from-purple-500 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                            Software, Videojuegos e IA
                        </span>
                    </h1>

                    {/**Subtítulo claro */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Ingeniería de sistemas, desarrollo fullstack robusto, arquitectura de agentes de inteligencia artificial y experiencias interactivas.
                    </p>

                    {/**Botones de Acción (CTA)*/}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                        href={"#proyects"}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-purple-600 hover:bg-purple-500 text-white shadow-lg 
                        shadow-purple-600/25 transition-all transform hover:-translate-y-0.5">
                            Ver Proyectos 
                        </Link>

                        <Link 
                        href={"#ia-chat"}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-[#131927] hover:bg-[#1a2333] border border-slate-700/80 
                        text-slate-200 transition-all transform hover:-translate-y-0.5">
                            Hablar con la IA
                        </Link>
                    </div>
            </div>
        </section>
    );
}