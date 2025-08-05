import { CalendarContextProvider } from "../contexts/CalendarContext"
import Header from "../Components/Header/Header"
import Dashboard from "../Components/Dashboard/Dashboard"

const Home = () => {

    return (
        <CalendarContextProvider>
            
            <Header />
            <Dashboard />
            <h3>Yep, this project is not complete yet</h3>
            <h3>I'm working on it to understand the logic behind libs such as 'date-fns' and 'Material UI'</h3>
            <h3>Also, to learn how to use the “useContext” hook</h3>
            <h4>The next step would be to be able to add tasks with a date and time</h4>
            <h4>So, this is still a work in progress!</h4>
        </CalendarContextProvider>
    )
}

export default Home
