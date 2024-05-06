import React from "react";

function R8(){
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
                <div className="titleP">Audi R8 V10</div>
            </div>
        
            <div className="image-panamera">
                <div className="image-box">
                    <img src="/assets/img/car11.png" alt="Image 1" onClick={() => showImage('/assets/img/car11.png')}/>
                </div>
                <div className="image-box">
                    <img src="/assets/img/car12.png" alt="Image 1" onClick={() => showImage('/assets/img/car12.png')}/>
                </div>
                <div className="image-box">
                    <img src="/assets/img/car13.png" alt="Image 1" onClick={() => showImage('/assets/img/car13.png')}/>
                </div>
                <br/>
            </div>
            
            <div className="text-panamera">
                <br/>
                <p>
                    The Audi R8 V10 2020 is the epitome of performance, boasting a formidable 5.2-liter V10 engine with 602 horsepower. Its sleek design and aerodynamic prowess showcase Audi's commitment to style and speed. Inside, a luxurious cockpit combines premium materials with advanced technology, providing a driver-centric experience.
                    
                    This supercar strikes a perfect balance, offering thrilling performance while maintaining practicality for everyday use. The Audi R8 V10 2020 is not just a car; it's a symbol of Audi's dedication to blending luxury, power, and innovation into a remarkable driving experience.</p>
        
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
                <input type="text" id="fname" name="fname" />
            
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" />
            
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
            
                <label for="reason">Enter time and date:</label>
                <textarea id="reason" name="reason" rows="6" required></textarea>
            
                <button type="button" onClick={submitForm}>Submit</button>
                </form>
            </div>
        
        
            <footer>
                <div className="footer-title"><h1>SPAS Dealership</h1></div>
                <div className="phone-number">+387 61 047 220 <br/>  Ive Andrića 6, I. Sarajevo </div>
                <div className="copyright">&copy; 2024 SPAS Dealership. All Rights Reserved.</div>
            </footer>
        
            <div className="image-popup" id="imagePopup"  onClick={hideImage}>
                <div className="popup-content">
                    <span className="close-button" onClick={hideImage}>&times;</span>
                    <img src="" alt="Popup Image" className="popup-image" id="popupImage"/>
                </div>
            </div>
        
            
        </div>


    )
}

export default R8;