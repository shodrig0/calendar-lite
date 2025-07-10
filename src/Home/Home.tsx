import { CalendarContextProvider } from "../contexts/CalendarContext"
import Header from "../Components/Header/Header"
import Dashboard from "../Components/Dashboard/Dashboard"

const Home = () => {

    return (
        <CalendarContextProvider>

            <Header />
            <Dashboard />

        </CalendarContextProvider>
    )
}

export default Home