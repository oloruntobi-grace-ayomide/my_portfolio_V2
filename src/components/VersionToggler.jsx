function VersionToggler(){

    return(

        <div className="toggler-box">

           
                <span 
                    className="toggle-label" 
                    data-tit="Visit the previous version (Version 1)">
                    <a href="https://my-portfolio-uy10.onrender.com/" target='_blank' rel="noopener noreferrer">V1</a>
                </span>
            
      
                <span 
                   className="toggle-label" 
                    data-tit='You are currently on Version 2'><a href="/">V2</a>
                </span>
         
        
        </div>
    )
}


export default VersionToggler