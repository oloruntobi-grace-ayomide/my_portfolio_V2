import { Link } from "react-router-dom"
function  NotFound(){
    return(
        <div className="error-page bg-[#F8F8F8] h-[100vh] w-full text-center  flex flex-col items-center justify-center px-[10px]">
            <h1>Oops! This page took a wrong turn. 🤔 404</h1>
            <p>It seems the page you're looking for isn't here. Maybe it's off on a coffee break? ☕</p>
            <p>Don't worry, let's get you back on track:</p>
            <Link to="/">👉 Take me home!</Link>
        </div>
    )
}
export default NotFound