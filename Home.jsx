import React from "react";

function Home(){
    return(
        <div>
            <br/><br/>
            {/*Navbar*/}
            <header>
                {/*Nav Container*/}
                <div className="nav container">
                    
                    <i className='bx bx-menu' id="menu-icon"></i>
                    
                    <a href="#" className="logo">SPAS <span>Dealership</span></a>
                    
                    <ul className="navbar">
                        <li> <a href="#home" className="active">Home</a></li>
                        <li> <a href="#cars">Cars</a></li>
                        <li> <a href="about">About</a></li>
                        <li> <a href="#blog">Our Blog</a></li>
                        <li><a href="/about">Contact Us</a></li>
                    </ul>
                
                </div>
            </header>
            {/*Home section*/}
            <section className="home" id="home">
                <div className="home-text">
                    <h1>SPAS Cars <br/> Elevate Your Drive! </h1>
                    <p>Discover a world of <br/> automotive excellence at SPAS<br/>Our curated selection of  vehicles promises<br/> not just a drive, but an elevated experience</p>
                    <br/>
                    
                    <li><a href="#cars" className="btn">Discover Now</a></li>
                </div>
                <div className="home-img">
                    <img src="./assets/img/bmwBackground.png"/>
                </div>

            </section>
            {/*cars section*/}
            <section className="cars" id="cars">
                <div className="heading">
                    <h2><span>Our Cars</span></h2>
                    
                    <p>Explore the SPAS Cars Collection – Where Every Ride Tells a Story of Elegance, Performance, and Unrivaled Craftsmanship.</p>
                </div>
                {/*Cars container*/}
                <div className="cars-container container">
                    
                    <div className="box">
                        <img src="./assets/img/car1.png" alt=""/>
                        <a href="panamera"><h2>View</h2></a>
                    </div>
                    
                    <div className="box">
                        <img src="/assets/img/car11.png" alt=""/>
                        <a href="R8"><h2>View</h2></a>
                    </div>

                    <div className="box">
                        <img src="/assets/img/car4.png" alt=""/>
                        <a href="A8"><h2>View</h2></a>
                    </div>

                   
                    <div className="box">
                        <img src="/assets/img/car2.png" alt=""/>
                        <h2>View</h2>
                    </div>

                    
                    <div className="box">
                        <img src="/assets/img/car5.png" alt=""/>
                        <h2>View</h2>
                    </div>

                   
                    <div className="box">
                        <img src="/assets/img/car6.png" alt=""/>
                        <h2>View</h2>
                    </div>

                    
                </div>

            </section>

            {/*About*/}
            <section>
                <section className="about container" id="about">
                    <div className="about-img">
                        <img src="/assets/img/car7.png" alt=""/>
                    </div>
                    <div className="about-text">
                        <h2><span>About Us</span></h2>
                        <p>At SPAS Cars, we're not just selling cars; we're crafting automotive experiences. Our curated selection of premium vehicles reflects our commitment to style, performance, and innovation. Backed by a customer-centric approach, we redefine your journey on the road.

                            Immerse yourself in the luxury of choice as you explore our meticulously curated lineup. Each vehicle at SPAS Cars is a testament to craftsmanship, delivering not just transportation but an expression of individuality.
                            
                            Choose SPAS Cars for a driving experience that goes beyond expectations – where your satisfaction is our top priority. From personalized service to a seamless purchasing process, we are dedicated to making your automotive dreams a reality.
                            
                            Welcome to SPAS Cars, where the road meets refinement, and every drive is an embodiment of unparalleled excellence.</p>
                        
                        <a href="/about" className="btn">Learn More</a>
                    </div>
                </section>
            </section>
            
            {/*Blog Container*/}
            <section className="blog" id="blog">
                <div className="heading">
                    <span>Blog & News</span>
                    <h2>Our Blog Content</h2>
                    
                    <p>Dive into the latest updates, insights, and stories in our Blog and News section.</p>
                </div>
                
                <div className="blog-container container">
                   
                    <div className="box">
                        <img src="/assets/img/car1.png" alt=""/>
                        <span>January 6 2024</span>
                        <h3>Porsche Panamera 2024</h3>
                        <p>The 2024 Porsche Panamera embodies the perfect fusion of luxury and performance, showcasing a sleek design coupled with cutting-edge technology. With its powerful engine options and refined interior, the Panamera continues to define the essence of a sophisticated and exhilarating driving experience.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i> </a>
                    </div>
                    
                    <div className="box">
                        <img src="/assets/img/car4.png" alt=""/>
                        <span>January 6 2024</span>
                        <h3>Audi A8 2015</h3>
                        <p>The 2015 Audi A8 combines elegant design with advanced technology, offering a luxurious driving experience. Known for its spacious and finely crafted interior, the A8 delivers both comfort and performance, making it a standout choice in the luxury sedan segment.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i> </a>
                    </div>
                    
                    <div className="box">
                        <img src="/assets/img/car3.png" alt=""/>
                        <span>January 6 2024</span>
                        <h3>Audi R8 2020</h3>
                        <p>The 2020 Audi R8 represents the pinnacle of Audi's performance lineup, featuring a striking design and a powerful V10 engine. With its exceptional handling and advanced technology, the R8 delivers an exhilarating driving experience, showcasing Audi's commitment to both luxury and high-performance engineering.</p>
                        <a href="#" className="blog-btn">Read More<i className='bx bx-right-arrow-alt'></i> </a>
                    </div>
                </div>
            </section>
            {/*footer*/}
            <footer>
                <div className="footer-title"><h1>SPAS Dealership</h1></div>
                <div className="phone-number">+387 61 047 220 <br/>  Ive Andrića 6, I. Sarajevo </div>
                <div className="copyright">&copy; 2024 SPAS Dealership. All Rights Reserved.</div>
            </footer>

            
        </div>
    )
}

export default Home;