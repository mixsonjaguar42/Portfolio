const sidebar = document.getElementById("mySidebar")



export const Nav = (props) => {
   
    const closeNav=()=>{
        sidebar.style.display = "none"
    }
    return (
        <nav className="nav" id="mySidebar" style={{display:"none",paddingTop:'150px',right:'0',zIndex:"2"}}><br/>
            <a href="./" className="close-menu"
            onClick={(e)=>closeNav()}>Close Menu</a>
            <div className="">
                <h3 className=""><b>Jaguar<br/>Mixson</b></h3>
            </div>
            <div className="">
                <a href="./" className="" onClick={(e)=>closeNav()}>Home</a>
                <a href="./" className="">Showcase</a>
                <a href="./" className="">Projects</a>
                <a href="./" className="">Designers</a>
                <a href="./" className="">Packages</a>
                <a href="./" className="">Contact</a>
            </div>
        </nav>
    )
}