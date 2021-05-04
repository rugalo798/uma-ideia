import Link from 'next'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Acessar a página Sobre!</a>
            </Link>
        </div>   
    )
}

export default Home;