function Evento({ numero }){

    function meuEvento(){
        console.log(`Opa, fui ativado! ==> ${numero}`)
    }

    return(
        <div>
            <p>Clique aqui para dispara um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
