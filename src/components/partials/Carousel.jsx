import { store } from '../../db/store';
import { useState } from 'react';

function Carousel() {
    const [count, countState] = useState(0)
    return (
        <div className="carousel">
            <button onClick={() => countState(count  != 0 ? count - 1 : store.length - 1 )}>-</button>
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
            <button onClick={() => countState(count < store.length - 1 && count + 1)}>+</button>
        </div>
    )
}
export default Carousel