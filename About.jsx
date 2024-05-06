import React, { useEffect } from "react";

function About(){
    function toggleContactForm() {
        var contactForm = document.getElementById('contactForm');
        contactForm.style.display = (contactForm.style.display === 'none' || contactForm.style.display === '') ? 'block' : 'none';
      }
    
    function submitForm() {
        
        alert('Form submitted successfully!');
        toggleContactForm(); 
      }

    

      useEffect(() => {
        const initMap = () => {
          const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 43.828375, lng: 18.210745 }, 
            zoom: 14,
          });
    
          // marker
          new window.google.maps.Marker({
            position: { lat: 43.828375, lng: 18.210745 }, 
            map: map,
          });
        };
    
        // load 
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAw0W0smQX--NLVEaX63kYLBl6HeLwc0q4&callback=initMap`;
        script.defer = true;
        document.head.appendChild(script);
    
        // initialize the map 
        window.initMap = initMap;
      }, []);


    return(
        <div>
            <div className="headerp">
                <a href="/#home" className="go-back-button">Go Back</a>
                <div className="titleP">About Us</div>
            </div>
        
            <div className="containerAbout">
                <div className="textAbout">
                    <h1>SPAS <span>Dealership</span></h1>
                    <br/>
                    <p>Welcome to SPAS Dealership, where luxury meets performance in the automotive realm. In 2024, we proudly showcase an exclusive collection of exotic cars that redefine driving experiences. Immerse yourself in a world of unparalleled elegance and power as our fleet embodies the pinnacle of automotive engineering. At SPAS, we curate a selection that transcends boundaries, featuring cutting-edge designs and top-tier performance. Elevate your journey with us and explore the epitome of automotive excellence at SPAS Dealership, where the future of driving is now.</p>
                </div>
        
                
        
                <div className="imageAbout">
                    <img src="/assets/img/dealers2.png" alt="SPAS Dealership Image"/>
                </div>
                
        
            </div>
        
            <div className="text-panamera">
                <a href="#" className="btn" onClick={toggleContactForm}>Contact Us</a>
            </div>
            <br></br><br></br><br></br>
        
            <div className="contact-container" id="contactForm">
                <div className="close-button" onClick={toggleContactForm}>x</div>
                <h2>Contact Us</h2>
                <br/>
                <form>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname" />
            
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" />
            
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
            
                <label for="reason">Reason for contacting:</label>
                <textarea id="reason" name="reason" rows="6" ></textarea>
            
                <button type="button" onClick={submitForm}>Submit</button>

                </form>
                
            </div>
            
            <div className="directions-container">
                <h1>Get Directions</h1>        
                <br/>
                <div id="map" style={{ width: "100%", height: "800px" }}></div>
            </div>

            
            
        
        </div>
    )
}

export default About;