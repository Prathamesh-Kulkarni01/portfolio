import React from 'react'

const Contacts = () => {
  return (
    <div>
         <div class="page_body">
            <div class="image_wrapper">
              <div class="image_holder">
                <img alt="Profile"Width="150px" Height="150px" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" class="profile image"></img>
            </div>
            </div>
                <h1 class="name">Contact Me !</h1>
                <p class="about">
                    Lorem, ipsum dolo sit <span>amet consectetur</span> adipisicing elit. Laborum
                    placeat possimus error accusamus? Ullam magni nesciunt voluptas
                    animi ducimus ea voluptates explicabo autem ipsam mollitia saepe,
                    molestiae quis natus placeat!
                  </p>
                <div class="page_body" >
               <div class="">
                 <div >
                    <div style={{display:"flex",flexDirection:"column",alignItems: "center",padding: "10px"}}>
                     
                        <input style={{borderRadius: "10px",padding: "10px",width: "320px",margin: "10px"}} id="Username" type="text" placeholder="Enter Your Mail" />
                  
                    
                        
                          <input style={{borderRadius: "10px",padding: "10px",width: "320px",height: "100px",margin: "10px"}} id="Username" type="text" placeholder="Leave your message here..."/>
                       
                      <button style={{borderRadius: "10px",padding: "10px",width: "200px"}}> Send</button>
                 </div>
                
            
              
         
          </div>
    
        </div>
      
      </div></div>
    </div>
  )
}

export default Contacts