import React, {useState, useEffect} from 'react';
import '../styles/ThemeComponent.scss';
import { MdLightMode } from "react-icons/md";
// import { MdNightlightRound } from "react-icons/md";

function ThemeComponent(){


    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    

            // ? document.getElementsByTagName("HTML")[0].setAttribute('data-theme', 'dark')
            // : document.getElementsByTagName("HTML")[0].setAttribute('data-theme', '')
    
    useEffect(() => {
        document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));        
    }, [checked]);
   
    const toggleThemeChange = () => {
        if (checked === false) {
          localStorage.setItem("theme", "dark");
          setChecked(true);
        } else {
          localStorage.setItem("theme", "light");
          setChecked(false);
        }
      };

    return (
        <div className="themeComponent">
            <div className="themeComponent-title">
                <p>DevFinder</p>
            </div>
            <div className="themeComponent-change" >
                <input type="checkbox" defaultChecked={checked} onChange={()=>{
                toggleThemeChange()
            }}  id="switch" /><label htmlFor="switch">Toggle</label>
            </div>
        </div>
    ) 
}

export { ThemeComponent }