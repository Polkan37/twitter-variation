import React from 'react'
import { ReactComponent as ArrowIcon } from "../../resourses/arrow.svg";

function Notification(data) {
    const {id, caption, icon, title, text, lable } = data.data;

  return (
    <div className="notification__post post">
        <div className="post__top">
            <img src={icon} alt="" className="post__user-icon"/>

            <div className="notification__header">
                <div className="post__caption">
                    {caption}
                </div>
                <h2 className="post__header">{title}</h2> 
            </div>
            <button className="post__button button"
              id={'notification-button-' + id} onClick={() => handleClick(id)}>
              <ArrowIcon />
            </button>
            {lable ? <div className="notification__label">new</div> : ''}
        </div>
            <div className="notification__content post__text">
            <div className="post__text hide" id={'notification-text-' + id}>
                {text}
            </div> 
            </div> 
    </div>
  )
}

export default Notification


function handleClick(id) {
    const button = document.getElementById('notification-button-' + id);
    const content = document.getElementById('notification-text-' + id);
    console.log('content', content)
    button?.classList.toggle("active");
    content.classList.toggle("hide");
}