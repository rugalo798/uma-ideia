import { useState } from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

const Contador = () => {

    const [contador, setContador] = useState(1);

    const adicionarContador = () => {
        setContador(contador + 1);
    }

    return (


        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar Contador</button>
        </div>
    )
}

export default Home;