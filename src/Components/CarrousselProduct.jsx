import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function CarrousselProduct({ children: slides }) {

    const [curr, setCurr] = useState(0);

    const prev = () => 
        setCurr((curr => curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => 
        setCurr((curr => curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative w-screen md:h-[65vh]">
            <div 
                className="flex transition-transform ease-in-out duration-300" 
                style={{transform: `translateX(-${curr * 100}%)`}}>{slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-1">
                <button
                    onClick={prev}
                    className="p-0.5 rounded-full bg-lightgray hover:bg-white"
                >
                    <MdChevronLeft size={35}/>
                </button>
                <button 
                    onClick={next}
                    className="p-0.5 rounded-full bg-lightgray hover:bg-white"
                >
                    <MdChevronRight size={35}/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, index) => (
                        <div 
                            key={index}
                            className={`
                                transition-all w-3 h-3 bg-white rounded-full
                                ${curr === index ? "p-2" : "bg-opacity-50"}
                            `} />
                    ))}
                </div>

            </div>

        </div>
    )
}