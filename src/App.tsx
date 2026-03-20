import { MessagesContainer } from "./components/MassagesContainer"
import { TaskContextProvider } from "./contexts/TaskContext/taskContextProvider"
import { MainRouter } from "./routers/MainRouter"

import "./styles/global.css"
import "./styles/theme.css"

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <MainRouter />
            </MessagesContainer>
        </TaskContextProvider>
    )

}
