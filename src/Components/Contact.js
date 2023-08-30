import imageContact from '../contact.png';
import '../App.css'

function Contact(){
    return(
        <div>
            <div className='iconContact'>
            <img src={imageContact} alt='icon' width='70px'/>
            </div>
            <h1 className='headerContact'>CONTACT</h1>
            <p className="conttext">If you need a personal website for you or your business I am ready to help.<br/> If you have job offers I am always in touch,ready to learn new,modern and interesting in the world of web development.</p>
            <p className="conttext">Please contact me for any questions,comments or inquiries.</p>
            
            <form action="https://formspree.io/f/xlezvkky"method="POST">
        <input type="hidden" name="_language" value="en"/>
      <div className='formContact'>
          <label>
          <input className="text-input form-control" name="message" id="textName" cols="30" rows="10" placeholder="Enter your name..." />
          </label>
    </div>
    <div className='formContact'>
          <label>
          <input className="text-input form-control" name="message" id="textMail" cols="30" rows="10" placeholder="Enter your mail..."/>
          </label>
    </div>
   
    <div className='formContact'>
          <label>
        <textarea className="text-input form-control" name="message" id="message" cols="30" rows="10" placeholder="Enter your message..." ></textarea>
          </label>
    </div>
    <div className='formContact'>
        <button className="brt" type="submit">Send</button>
    </div>
       
        </form>
      </div>
    )
}

export default Contact;