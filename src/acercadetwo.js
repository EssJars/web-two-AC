import React from 'react';
import Title from './titles';
import Yo from './images/imgrelax.svg'
import LinkHover from './linkHover';

const AcercaTwo = () => (
    <div id="about" className="text-white w-full min-h-full text-xl font-sans font-extralight sm:mb-80 mb-28">
        <div className="desktop:mx-32 mx-7 flex flex-col md:flex-row">
            <div className="flex-1 md:w-1/2 w-full flex justify-center items-center mt-2 sm:mt-0">
                <div className="flex justify-center desktop:justify-between mt-10 desktop:mt-0">
                    <img src={Yo} className="desktop:w-8/12 w-3/4" />
                </div>
            </div>
            <div className="md:w-1/2 w-full flex-1 order-first md:order-last text-justify sm:text-left flex justify-center flex-col">
                <Title>MAS SOBRE MI</Title>
                <p className="mt-2">
                    Tengo 22 años, soy alumno de la&nbsp;
                    <LinkHover
                        text={'UAEH'}
                        url={'https://www.uaeh.edu.mx/'}
                    />
                    , aprecio el diseño y el desarrollo web, me gusta mucho aprender nuevas tecnologias,
                    debatir sobre proyectos nuevos de las mejores empresas.     
                </p>
                <p className="mt-4">
                    A mi novia a mi, nos gusta mucho salir a divertirnos cuando se puede, si no, nos encanta
                    ver peliculas en Netflix o Prime Video, comer botanas y jugar COD Mobile.
                </p>
                <p className="mt-4">
                    Algunos de mis hobbies es la inversion en cryptomonedas, ir al gimnasio, jugar videojuegos 
                    (Rocket League, Gears of War, Fornite, Call of Duty)
                </p>
            </div>
        </div>
    </div>
)
 
export default AcercaTwo;