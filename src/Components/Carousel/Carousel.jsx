import { useState } from "react"
import { RxChevronLeft, RxChevronRight } from "react-icons/rx"

export default function Carousel({ children: slides}) {

    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-in-out duration-200" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-2">
                <button onClick={prev} className="hover:opacity-70 active:opacity-70">
                    <RxChevronLeft size={40} />
                </button>
                <button onClick={next} className="hover:opacity-70 active:opacity-70">
                    <RxChevronRight size={40} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i}className={`
                            transition-all w-3 h-3 bg-white rounded-full
                            ${curr === i ? "p-2" : "bg-opacity-50"}
                        `} />
                    ))}
                </div>
            </div>
        </div>
    )
}