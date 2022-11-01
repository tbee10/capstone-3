import React from 'react'

const Contact = () => {


  
  return (
    <div>
        <h3>Contact Us</h3>
      <p>Feel free to contact us via phone or send us a message</p>

      <p>Tel. 555-555-5555</p>
      <p>8AM-6PM EST</p>

      <div class="column">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <br></br>
          <input type="text" id="fname" name="firstname" placeholder="First name.."></input>
          <br></br>
          <label for="lname">Last Name</label>
          <br></br>
          <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
          <br></br>
          <label for="subject">Subject</label>
          <br></br>
          <textarea id="subject" name="subject" placeholder="Type your message.."></textarea>
          <br></br>
          <button className='submit-btn' id="submit-btn">Submit</button>
        </form>
      </div>



    </div>
  )
}

export default Contact