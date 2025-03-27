import Navbar from './Navbar'
import VersionToggler from "./VersionToggler"

function Layout( { children } ){

    return(
          
        <div className="parent-container flex flex-col">
            <Navbar/>
            <VersionToggler/>
            <main className="content-body flex-grow">
                { children }
            </main>
            <div className="footer text-center p-[10px] md:mt-[40px]">
                <p>© Oloruntobi Grace Ayomide {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Layout