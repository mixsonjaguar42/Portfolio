



export const Contact = (props) => {
    return (
        <div className="" id="contact" style={{ marginTop:'75px'
}}>
    <h1 className=""><b>Contact.</b></h1>
    <hr style={{width:'50px',border:'5px solid red'}} className=""/>
    <p>Do you want us to style your home? Fill out the form and fill me in with the details. We love meeting new people!</p>
    <form action="/action_page.php" target="_blank">
      <div className="">
        <label>Name</label>
        <input className="" type="text" name="Name" required/>
      </div>
      <div className="">
        <label>Email</label>
        <input className="" type="text" name="Email" required/>
      </div>
      <div className="">
        <label>Message</label>
        <input className="" type="text" name="Message" required/>
      </div>
      <button type="submit" className="">Send Message</button>
    </form>  
  </div >
    )
}