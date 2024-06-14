import { store } from '../../db/store';
import { useState } from 'react';

function Caurosel() {
    const [count, countState] = useState(0)
    return (
        <div className="caurosel">
            <button onClick={() => countState(count  != 0 ? count - 1 : store.length - 1 )}>-</button>
            {
                store.map((element, index) => (
                    count == index && 
                    <div key={`image_${index}`} className="image_container">
                        <img src={element.image} alt="" />
                    </div>
                ))
            }
            <button onClick={() => countState(count < store.length - 1 && count + 1)}>+</button>
        </div>
    )
}
export default Caurosel