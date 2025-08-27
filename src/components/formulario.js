function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrar o usuário')
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastarr" />
                </div>
            </form>
        </div>
    )
}

export default Formulario
