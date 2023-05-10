import Header from "./Header";
import { Services } from "./Services";
import { Designer } from "./Designers";
import { Team } from "./Team";
import { Packages } from "./Packages";
import { Contact } from "./Contact";
export const Page = (props)=>{
    return(
        <div className="" style={{marginLeft:'340px', marginRight:'40px'}}>
            <Header/>

            <Services/>
            <Designer/>
            <Team/>
            <Packages/>
            <Contact/>
        </div>
    )
}