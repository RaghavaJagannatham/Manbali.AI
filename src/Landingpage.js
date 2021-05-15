import React from 'react';
import Image from './Image';
import Image2 from './Image2';
import Image3 from './Image3';
import './Landingpage.css';

function Landingpage() {
    return (
        <div className="Landingpage">
           {/* <div className="Navbar">
                
                <div className="Group">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

                 
                </div>
                
                    
    </div>*/}

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        <butto className="button">Buy Now</butto>
                <div className="logo">LAND</div>
       
      </ul>
    </div>
  </div>
</nav>
            
            <div className="background">
           <Image />
            </div>
            <div className="Text-block">
            <div className="Heading1">
                <h1 id="h1">Light,Fast & Powerful</h1><br />
                <p id="text2">Lorem ipsum dolor sit amet,consectetuer adipiscing elit.Aenean commodo <br />ligula  eget dolor.Aenean massa. Cum soclis natoque
                    penatibus et magnis<br /> dis parturient montes, nascetur ridiculus <br /> <br />
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br />
                    sem. Nulla consequent massa quis enim</p>
                </div>
                
            </div>
            <div className="Elements">
                    <btn className="btn1">Purchase UI Kit</btn>
                    <btn className="btn2">Learn More</btn>
            </div>
            <div className="content2">
                   <div className="image2">
                        <Image2 />
                    </div>
                    <div className="Heading2">
                    <h1>Light,Fast & Powerful</h1><br />
                    <p id="text2">Lorem ipsum dolor sit amet,consectetuer adipiscing elit.Aenean commodo <br />ligula  eget dolor.Aenean massa. Cum soclis natoque
                        penatibus et magnis<br /> dis parturient montes, nascetur ridiculus <br /> <br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br />
                        sem. Nulla consequent massa quis enim</p>
                    </div>
                <div className="sub-elements">
                    
                    
                       <div id="Image3">
                        <Image3 />
                        </div>
                        <div id="Image3b">
                            <Image3 />
                        </div>
                    
                        </div>

                        
 
  


            </div>
            
            



        </div>
    )
}

export default Landingpage
