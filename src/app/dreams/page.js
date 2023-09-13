import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function Page(){
    return (
        <>
        <Navbar currentPage="dreams"/>
        <main className="flex min-h-screen flex-col mt-10 md:px-24 px-5">
            <article>
                <h1 className="font-bold text-3xl mb-4">Mis sueños en Auco</h1>
                <p>Me gustaría dedicar esta página a compartir mis sueños y proyecciones en el contexto de nuestra empresa. Aquí están mis aspiraciones y metas profesionales, así como mi visión de cómo puedo aportar al éxito continuo de Auco.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
                        <p className="font-bold text-xl mt-2">Aspiraciones Profesionales</p>
                    
                        <p className="font-semibold text-lg mt-2">🧑‍💻 Desarrollo Continuo:</p>
                        <p>Uno de mis sueños más profundos es convertirme en un profesional altamente competente y en constante evolución. Deseo seguir aprendiendo y adquiriendo nuevas habilidades para ser un recurso valioso para el equipo y para la empresa en su conjunto.</p>

                        <p className="font-semibold text-lg mt-2">💡 Innovación:</p>
                        <p>Sueño con ser parte de un equipo que constantemente busca nuevas formas de abordar desafíos y mejorar procesos. Deseo contribuir activamente a la cultura de la innovación en Auco y ser un impulsor de soluciones creativas.</p>
                    </div>
                    
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
                        <p className="font-bold text-xl mt-2">Metas a Corto y Largo Plazo</p>
                    
                        <p className="font-semibold text-lg mt-2">🕑 Corto Plazo:</p>
                        <p>En los próximos 1-2 años, me enfocaré en consolidar mi experiencia en mi rol actual y contribuir de manera efectiva a los proyectos en los que estoy involucrado. También planeo participar en programas de capacitación y desarrollo para fortalecer mis habilidades.</p>

                        <p className="font-semibold text-lg mt-2">⏳ Largo Plazo:</p>
                        <p>A medida que mire hacia el futuro a largo plazo, mi objetivo es asumir roles de mayor responsabilidad y liderazgo dentro de Auco. Esto podría incluir la gestión de equipos, la supervisión de proyectos estratégicos y la toma de decisiones clave para el crecimiento de la empresa.</p>
                    </div>
                </div>
                
                
                <p className="font-bold text-xl mt-2">Contribución a la Empresa</p>

                <p><strong>Excelencia en el Trabajo: </strong>Me comprometo a entregar un trabajo de alta calidad en todo momento. Busco la mejora continua en mis tareas diarias para garantizar que Auco continúe siendo un referente en nuestro sector.<br/>
                <strong>Colaboración: </strong>Trabajaré en estrecha colaboración con mis colegas, compartiendo conocimientos y brindando apoyo cuando sea necesario. Creo que un equipo fuerte es la base del éxito de cualquier empresa.<br/>
                <strong>Innovación: </strong>Estoy dispuesto a aportar ideas innovadoras y a colaborar en proyectos que impulsen la eficiencia y la innovación en Auco. Creo que la adaptación constante a las cambiantes demandas del mercado es esencial.<br/>
                </p><br/>
                <p>En resumen, mi sueño es ser un miembro valioso y comprometido de Auco, contribuyendo al crecimiento y éxito continuo de la empresa. Estoy emocionado por las oportunidades que el futuro nos depara y ansioso por trabajar junto a todos ustedes para hacer realidad estos sueños y metas.</p>
            </article>
        </main>
        <Footer/>
        </>
    )
}