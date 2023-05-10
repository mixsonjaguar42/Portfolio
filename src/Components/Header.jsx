const sidebar = document.getElementById("mySidebar")


export const Header = (props) => {
    const openNav=()=>{
        sidebar.style.width = "60%"
        sidebar.style.display = "block"
    }
    return (
        <header className="header">
            <a href="./" className="hamburger"
            onClick={()=>openNav()}>☰</a>
            <img src={require('./IMG_0024.JPG')} alt=' Jaguar Mixson to introduce his portfolio.' className='header-img' />
            <div className='col'>
                <span className='name-span'>Jaguar Mixson</span>
                <span className='occu-span'>Software Developer</span>
                <button className='resume-btn btn'>Download Resume</button>
            </div>

        </header>
    )
}