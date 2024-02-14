import { useState, useEffect } from 'react';
import HeartImage from '../src/assets/heart.png';
import Formidable from '../src/assets/formidable.mp3';

const LoveLetter = () => {
  const [showLetter, setShowLetter] = useState(false);
  let audio = new Audio(Formidable);

  const handleLetterClick = () => {
    setShowLetter(!showLetter);
    setShowLetter(!showLetter);
    audio.play();
  };

  useEffect(() => {
    return () => {
      audio.pause(); // Pausa la canción cuando el componente se desmonta
    };
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative ">
        {showLetter ? (
          <div className="bg-white border-2 border-red-500 rounded-lg p-4 xs:w-[350px] text-center shadow-md overflow-auto max-h-[90vh]">
            {/* Contenido de la carta */}
            <p className="text-base mb-4">
              Hola hola jeje, el siguiente fragmento de texto lo escribi el 15 de diembre del 2023, saliendo de cierta posada a la que me invitaron, donde porcierto toco la sonora dinamita.
            </p>
            <p className="text-base mb-4">
              Es muy raro el sentimiento que siento. No es un sentimiento nuevo el que siento, pero sí uno que me da miedo en cierto aspecto, uno que puede ser la mejor experiencia de mi vida o no. Me intriga demasiado, pero en cierto aspecto no creo que esto funcione. Esta vez no. Simplemente no creo que pase. No creo que sea la mejor opción seguir sintiendo esto. Creo que esta vez tengo que soltar este sentimiento y continuar.
            </p>
            <p className="text-base mb-4">
              Jajajaja, qué tonto el Esteban. La vida es una cosa rara en muchos aspectos. Esto lo escribí esa noche que fuimos a la posada, pensando que mis sentimientos por ti eran imposibles, que eras algo platónico que nunca sucederá. Y ahora estoy viviendo eso que pensé que no iba a suceder y ¡woooow! ¿Quién diría que esto pasaría? Me siento el chico más afortunado al estar a tu lado. Realmente me siento feliz.
            </p>
            <p className="text-base mb-4">
              Siento que puedo ser yo cuando estoy contigo, siento que puedo expresar lo que sea sin miedo, siento seguridad. Eres paz cuando estoy junto a ti, fak, quiero crecer contigo, quiero experimentar, resolver, salir adelante juntos. Cuando hablamos, me divierto demasiado. Incluso cuando no hacemos nada, me siento increíblemente bien. 
            </p>
            <p className="text-base mb-4">
              Me ganaste, te ganaste mi corazón, mi cuerpo, mi alma. Te quiero, te adoro. Eres esa sonrisa al aire que suelto cuando te recuerdo. Eres mi ikegai, mi Sthendal. Y pues, estaré aquí para ti, para lo que necesites, en lo que yo pueda ayudar aquí estaré, chica del cabello lindo con lentes lindos, que conocí por una canción. Te robaste mi corazón.
            </p>
            <p className="text-base">
              Escribo esto con todo mi mi corazon, mi alma y mi ser TQMMM,
            <p>
              Atte: Teban UwU
            </p>
              
            </p>
            <br />
            <a href="https://open.spotify.com/playlist/7qRa8ldW0Vde3kUkMcGuD6?si=K4qDAi_mQLOd5nJOGKxbOw&pi=u-36b1pPotQGmU" target="_blank" rel="noopener noreferrer">
              Da click a este mensaje para escuchar algo especial :3
            </a>
          </div>
        ) : (
          <div className="relative flex items-center justify-center border-2 border-red-500 rounded-lg w-[400px] h-[220px] xs:w-[350px] xs:h-[220px]">
             <div className="absolute inset-0 before:absolute before:w-0.5 before:h-44 before:bg-red-400  before:rotate-59 before:bottom-20 before:right-20"></div>
            <div className="absolute inset-0 before:absolute before:w-0.5 before:h-44 before:bg-red-400 before:rotate-121 before:bottom-20 before:left-20"></div>
            <button
              onClick={handleLetterClick}
              className="text-white px-4 py-2 rounded-md"
            >
              <img src={HeartImage} alt="Descripción de la imagen" className="animate-pulse text-white px-4 py-2 rounded-md transition duration-300 w-[90px] h-[70px]" />
            </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;