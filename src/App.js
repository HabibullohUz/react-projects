import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import './components/axios/sass/user.scss'
import Main from './components/axios/Main';
import UserCard from './components/axios/UserCard';
import User from './components/axios/User';

function App() {

    return (
        <>
            <User />
            <Main />
            {/* <UserCard /> */}

        </>
    )
}

export default App
