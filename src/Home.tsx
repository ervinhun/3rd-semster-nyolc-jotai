import {useNavigate} from "react-router";
import {Outlet} from "react-router/internal/react-server-client";

export default function Home() {

    const navigate = useNavigate();

    return <div>

        <div>
            Nav bar:
            <button onClick={() => {
                navigate(-1)
            }}>Go back</button>
            <button onClick={() => {
                navigate('/books')
            }}>Books
            </button>
            <button onClick={() => {
                navigate('/authors')
            }}>Authors
            </button>

            <Outlet></Outlet>

        </div>
        <br/>
        <hr/>
    </div>

}