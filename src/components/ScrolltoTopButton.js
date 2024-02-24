import React, { useEffect, useState } from 'react';
import './skillstyle2.scss'


const ScrolltoTopButton = () => {
    const [scrolltoTopButton, setScrolltoTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScrolltoTopButton(true)
            } else {
                setScrolltoTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }


    return (
        <div>
            {scrolltoTopButton && (
                <button style = 
                {{position:"fixed", bottom: "60px", right: "60px", height:"60px", width: "60px", fontSize: "60px", borderRadius: "50%", border: "3px solid black", backgroundColor: 'black', color: "white"}} onClick = {scrollUp}>^</button>
            )}

        </div>
    );
};

export default ScrolltoTopButton;


// <!-- HTML !-->
// <button class="button-53" role="button">Button 53</button>

// /* CSS */
// .button-53 {
//   background-color: #3DD1E7;
//   border: 0 solid #E5E7EB;
//   box-sizing: border-box;
//   color: #000000;
//   display: flex;
//   font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
//   font-size: 1rem;
//   font-weight: 700;
//   justify-content: center;
//   line-height: 1.75rem;
//   padding: .75rem 1.65rem;
//   position: relative;
//   text-align: center;
//   text-decoration: none #000000 solid;
//   text-decoration-thickness: auto;
//   width: 100%;
//   max-width: 460px;
//   position: relative;
//   cursor: pointer;
//   transform: rotate(-2deg);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-53:focus {
//   outline: 0;
// }

// .button-53:after {
//   content: '';
//   position: absolute;
//   border: 1px solid #000000;
//   bottom: 4px;
//   left: 4px;
//   width: calc(100% - 1px);
//   height: calc(100% - 1px);
// }

// .button-53:hover:after {
//   bottom: 2px;
//   left: 2px;
// }

// @media (min-width: 768px) {
//   .button-53 {
//     padding: .75rem 3rem;
//     font-size: 1.25rem;
//   }
// }