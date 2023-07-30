import { useRouteError, Link } from "react-router-dom";
const Error = () =>{
    const error = useRouteError();
    return(
        <Link to={"/"} className="w-full">
            {/* <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
            <h3>This site can't be reached</h3> */}
            <img src="https://cdn.dribbble.com/users/899428/screenshots/3849628/media/dd34a680de3d4b19171e92d515fbce50.gif" className="w-full" />
            <h3>{error.status+": "+error.statusText}</h3>
        </Link>
    );
}
export default Error;