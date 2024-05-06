import React from "react";

function Panamera(){
    function showImage(imageSrc) {
        document.getElementById('popupImage').src = imageSrc;
        document.getElementById('imagePopup').style.display = 'flex';
    }
    
    function hideImage() {
        document.getElementById('imagePopup').style.display = 'none';
    }

    function toggleContactForm() {
        var contactForm = document.getElementById('contactForm');
        contactForm.style.display = (contactForm.style.display === 'none' || contactForm.style.display === '') ? 'block' : 'none';
      }
    
    function submitForm() {
        
        alert('Form submitted successfully!');
        toggleContactForm(); 
      }
    return(
        <div>
            <div className="headerp">
                <a href="/#home" className="go-back-button">Go Back</a>
                <div className="titleP">Porsche Panamera 4s</div>
            </div>
        
            <div className="image-panamera">
            <div className="image-box">
                <img src="/assets/img/car8.png" alt="Image 1" onClick={() => showImage('/assets/img/car8.png')}/>
            </div>
            <div className="image-box">
                <img src="/assets/img/car9.png" alt="Image 1" onClick={() => showImage('/assets/img/car9.png')}/>
            </div>
            <div className="image-box">
                <img src="/assets/img/car10.png" alt="Image 1" onClick={() => showImage('/assets/img/car10.png')}/>
            </div>
            </div>
            
            <div className="text-panamera">
                <br/>
                <p>The Porsche Panamera 4S 2020 is a high-performance sports sedan with a 2.9-liter twin-turbocharged V6 engine, producing 440 horsepower. With only 50,000 kilometers, it strikes a balance between power and practicality. The sleek exterior, coupled with adaptive suspension, showcases Porsche's commitment to both style and performance. Inside, the luxurious cabin features premium materials and advanced technology, creating a driver-focused environment. The Panamera 4S 2020 offers an exhilarating driving experience while maintaining a respectable mileage. It stands as a symbol of Porsche's dedication to delivering luxury, performance, and efficiency in one remarkable package.</p>
        
                <br/>
                <a href="#" className="btn" onClick={toggleContactForm}>Book a test drive</a>
                <br/><br/><br/><br/>
            </div>

            
            <div className="contact-container" id="contactForm">
                    <div className="close-button" onClick={toggleContactForm}>x</div>
                    <h2>Book a test drive</h2>
                    <br/>
                    <form>
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" name="fname"/>
                
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" />
                
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                
                    <label for="reason">Enter time and date:</label>
                    <textarea id="reason" name="reason" rows="6" ></textarea>
                
                    <button type="button" onClick={submitForm}>Submit</button>
                    </form>
            </div>
            
        
            <footer>
            <div className="footer-title"><h1>SPAS Dealership</h1></div>
            <div className="phone-number">+387 61 047 220 <br/>  Ive Andrića 6, I. Sarajevo </div>
            <div className="copyright">&copy; 2024 SPAS Dealership. All Rights Reserved.</div>
            </footer>
        
            <div className="image-popup" id="imagePopup" onClick={hideImage}>
                <div className="popup-content">
                    <span className="close-button" onClick={hideImage}>&times;</span>
                    <img src="" alt="Popup Image" className="popup-image" id="popupImage"/>
                </div>
            </div>
        
            
            
        </div>
    )
}

export default Panamera;