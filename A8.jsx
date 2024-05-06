import React from "react";

function A8(){
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
            <div class="headerp">
                <a href="/#home" class="go-back-button">Go Back</a>
                <div class="titleP">Audi A8 3.0 TDI</div>
            </div>
        
            <div class="image-panamera">
                <div class="image-box">
                    <img src="/assets/img/car14.png" alt="Image 1" onClick={() => showImage('/assets/img/car14.png')}/>
                </div>
                <div class="image-box">
                    <img src="/assets/img/car15.png" alt="Image 1" onClick={() => showImage('/assets/img/car15.png')}/>
                </div>
                <div class="image-box">
                    <img src="/assets/img/car16.png" alt="Image 1" onClick={() => showImage('/assets/img/car16.png')}/>
                </div>
                <br/>
            </div>
            
            <div class="text-panamera">
                <br/>
                <p>The Audi A8 3.0 TDI 2015 seamlessly combines luxury and performance with its turbocharged diesel engine and quattro all-wheel drive. Its elegant exterior, featuring a signature Singleframe grille and LED headlights, complements the opulent interior equipped with advanced technology. The A8 ensures a smooth and efficient ride, making it an ideal choice for both dynamic driving and extended journeys.</p>
        
                <br/>
                <a href="#" class="btn" onClick={toggleContactForm}>Book a test drive</a>
                <br/><br/><br/><br/>
            </div>
        
            <div class="contact-container" id="contactForm">
                <div class="close-button" onClick={toggleContactForm}>x</div>
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
                <textarea id="reason" name="reason" rows="6" ></textarea>
            
                <button type="button" onClick={submitForm}>Submit</button>
                </form>
            </div>
        
            <footer>
                <div class="footer-title"><h1>SPAS Dealership</h1></div>
                <div class="phone-number">+387 61 047 220 <br/>  Ive Andrića 6, I. Sarajevo </div>
                <div class="copyright">&copy; 2024 SPAS Dealership. All Rights Reserved.</div>
            </footer>
        
            <div class="image-popup" id="imagePopup" onClick={hideImage}>
                <div class="popup-content">
                    <span class="close-button" onClick={hideImage}>&times;</span>
                    <img src="" alt="Popup Image" class="popup-image" id="popupImage"/>
                </div>
            </div>
        
            
        </div>
    )
}

export default A8;