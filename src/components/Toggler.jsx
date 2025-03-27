// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode,  faPalette} from "@fortawesome/free-solid-svg-icons";

// function Toggler(){

//     const [theme, setTheme] = useState('developer-mode')

//     const handleThemeChange = (event) => {
//         setTheme(event.target.value);
//     };

//     return(
//         <>
//             <div className="toggler-box sticky top-[35%] left-[98%] right-[0px] py-[15px] px-[3px] w-fit z-[10000]">

//                 <div>
//                     <label htmlFor="developer-mode" className="cursor-pointer p-[5px]">
//                         <input 
//                             type="radio" 
//                             name='theme' 
//                             value='developer-mode' 
//                             className="hidden"
//                             id="developer-mode"
//                             checked={theme === 'developer-mode'}
//                             onChange={handleThemeChange}
//                             />
//                         <span className="toggle-label" data-tit="Developer Mode"><FontAwesomeIcon icon={faCode} /></span>
                     
//                     </label>
//                 </div>

//                 <div>
//                     <label htmlFor="creative-mode" className="cursor-pointer p-[5px]">
//                         <input 
//                             type="radio" 
//                             name='theme' 
//                             value='creative-mode' 
//                             className="hidden"
//                             id='creative-mode'
//                             checked={theme === 'creative-mode'}
//                             onChange={handleThemeChange}/>
//                         <span className="toggle-label" data-tit='Creative Mode'><FontAwesomeIcon icon={faPalette} /></span>
                        
//                     </label>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Toggler