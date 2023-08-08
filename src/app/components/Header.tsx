import { useContext } from "react"
import { LoggedUser } from "../contexts/LoggedUser"



export const Header = () => {
    const LoggedUserCtx = useContext(LoggedUser)  //5º chame e Use o contexto criado 

    const handleLogout = () => {
        LoggedUserCtx?.setName('')
    }

    return (
        <header>
             <h1 className="text-3xl">Titulo da Página</h1>
            {LoggedUserCtx?.name &&
            <>
             <p>Usuário Logado: {LoggedUserCtx?.name}</p>   
            <button onClick={handleLogout}>Sair</button>
            </>
            
            }
            {!LoggedUserCtx || LoggedUserCtx?.name === '' && 
                <p>Usuário Desligado</p>
            }
           
           
        </header>
    )
}