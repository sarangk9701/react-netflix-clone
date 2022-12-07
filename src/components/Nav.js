import React, { useState, useEffect } from 'react';
import "./Nav.css";

export default function Nav() {

    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log('window.scrollY',window.scrollY);
            if(window.scrollY > 50){
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    },[]);


  return (
    <nav className = {`nav ${show && "nav__black"} `}>
        <img
            alt = "Netflix logo"
            src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABfCAMAAADlGKjjAAAAt1BMVEX////AEBrkHhv6+vrs09Hoz8u3AAD77eywAACsAADeAADgqafAERi8ERnqqKeuDxe2EBieCxSmDhbW1NPYAADk4+Kfm5j+9/bQAADlGBWnAACeAADhIB6QAACYCBLXHR3v7+7Bv725trTWOjf14+HgkY/QJyXfhIPrx8XddHLotrXWY2LYWljloJ7ZS0nUEAzfLSrAAA68IyO7MTG8PT28SEi7W1m/ZmTPSknbNDLOkY2VkI2uq6mnCZh1AAADEUlEQVRoge3Za1PiMBQG4PQiEUhMm5hWVKCtiOAN3Zu68P9/157CIjldxg+uOXzpGYYyZcaHvGly6pRFhykWsUNU67Zu67Zu636Vyx9OdvXA38/nfbf4B3/hc2581nPqZPd7zju7Oj7y4Ia7Glzt3K4ItiU6HtyO44anEzL3eOy4vWs6V7hBT8ncTuIG3YvpXBT0DZkrcdARlRuoS3fAMypXKBT0nMoNEvfKGoxzKldqFPQtkSuERkHfEblBoJS7hC85lZukKOg+lSs1WsL3VK5Q2g163ZR4N/DuBskIBf1A5coUBf1I5AqpcdBxfZ9DMV6VNrs/uML7eGElSTfot4hmvLCS0F4JQfMLSeGqUaP707gQNGpKC3ATElfjvXLGh4kkcCHoqTvgeT5UBK6AlYTuK8/4UCUE44UJbjQlcCWF2wj6caQVhQtBo+4fpmkdtPDuJhot4TAZ1UGTuG5TCscjvZ1gjy5s0SpFTSnUqfLv1hPcCDoYbVeSXxeCDvYH7dX9IGi/bh30k+uKbdCe3UQPr3uNoAlcCHoYn7oDVn+D9uxKNczvBzhoEje5yG9R0OkmaP8uz89w0BRuIC84u3ODnm6C9u6ec4aCvkwJXGg94OYLd8BwuwfnPbuidtkNvrII3CDogjtz3RCC9u2CfAxu/uYGLbX0f12t3X+DJnLxXqmVfzdYu/ljM2galzWaEpk7wUHDBNO47BU1JU01XnaC9ko6d+L+pxSqhMplqPtPFZmLm5Kiuq4YX7hBS0nl4u4/TshcHDSdy9BtlvDxPHS/O0d7JZ17hIL25gqo5+fn7u659qI3qGsDe5nf9QPtb99//Pz18pK/n+/P53evV29PYf0Y/PTr3cnL79tZPOH53m9zPoln/et5vPfb/3G/tlq3dT9dhbXF5s2aorARK4xl61N+XbMsM2OXxprMwLGAQxlVWWQrv67N4GUzw4BnxRI+w8kyq4qSwDVZGQG2qn+BZStb2qzy7hblCvKF+TQZHFcVW9oygvg9u1VZRvWbrSpjq6IoKxhvwYw55Do6TP0B/2RSSIJVenUAAAAASUVORK5CYII="
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            alt = "User logged"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky3LHE9vjN8FqTSPHUF_anAgWRTMM8spCvTkGggx=s32-c-mo"
            className='nav__avatar'
        />
    </nav>
  )
}
