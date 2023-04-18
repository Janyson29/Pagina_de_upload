import Img from '../cloud.svg'
import React, { useState } from 'react';
import '../App.css';


const Drag = () => {

    const [dragover, setDragover] = useState('');
    function handleDragEnter() {
        setDragover('dragover');
    }
    function handleDragLeave() {
        setDragover('');
    }

    return (
        <div>
            <section className={`drag-files ${dragover}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}>
                <img src={Img} alt="cloud uploud" />
                <h3>Importe seus arquivos</h3>
                <p>Arraste ou clique para fazer o upload</p>
                <input type="file" />
            </section>
        </div>
    )
}


export default Drag

