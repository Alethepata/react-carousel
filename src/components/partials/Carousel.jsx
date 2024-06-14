import { store } from '../../db/store';
import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carousel() {
    const [count, countState] = useState(0);

    // setInterval(myTimer, 4000);

    // function myTimer() {
    //     countState(count + 1)
    //     if (count == store.length - 1) countState(0)
    // }

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button onClick={() => countState(count  != 0 ? count - 1 : store.length - 1 )}><IoIosArrowBack /></button>
            {
                store.map((element, index) => (
                    count == index && 
                    <div key={`image_${index}`} className="image_container">
                            <img src={element.image} alt="" />
                            <div className="container_text">
                                <h1>{ element.title }</h1>
                            </div>
                    </div>
                ))
            }
            <button onClick={() => countState(count < store.length - 1 && count + 1)}><IoIosArrowForward /></button>
        </div>
            <div className="bullets">
                {
                    store.map((element, index) => (
                        <div className={`bullet ${count == index ? 'clicked' : 'not-clicked'}`} onClick={() => countState(index)}></div>  
                    ))
                }
        </div>

        </div>
    )
}
export default Carousel