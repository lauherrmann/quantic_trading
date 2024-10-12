import './home.css';
import Button from '../../components/Button.jsx';

function Home() {

    return (
        <div className="container-home"> 
            <section className="principal-section"> 
                <div className="principal-content">
                    <div className="principal-section-header">
                        Impulsione seus investimentos <br></br>
                        com o poder da tecnologia!
                    </div>
                    <div className="principal-section-description">
                        Temos o que você precisa para assumir o controle <br></br>
                        da sua vida financeira. 
                    </div>
                    <Button secondary className="classes" to=''>Você está pronto para começar</Button>
                </div>
            </section> 
            <section className='secondary-section'>
                <div className='secondary-section-header'>
                    <h1>Estratégias para investir </h1>
                </div>
            </section>
        </div>
    )
}

export default Home;