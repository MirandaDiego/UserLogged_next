
import { ReactNode, createContext, useState } from "react";

type LoggedUserContextType = {     // 1º Primeiro crie um type
    name: string;
    setName: (n:string) =>void
}

export const LoggedUser  = createContext<LoggedUserContextType | null >(null);  // 2º jogue o type no context

export const LoggedUserProvider = ({children}: {children: ReactNode})=>{    //3º crie o provider
   const [name, setName] = useState('Diego')  // 4º Crie um useState para manipular os valores

    return(
   
        <LoggedUser.Provider value={{name, setName}}>
        {children}
        </LoggedUser.Provider>
    )
}
