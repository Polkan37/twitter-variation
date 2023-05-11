import React from 'react'

function Reply({data}) {
    const {icon, text, caption} = data;


  return (
    <div className="post__reply-post reply-post">
        <div className="reply-post__path">
          <div className="reply-post__path-line"></div>
          <div className="reply-post__point point"></div>
        </div>
        <div className="reply-post__post">
          <div className="post">
            <div className="post__top">
              <img src={icon}
                alt="" className="post__user-icon"
              />
            </div>
            <div className="post__content">
              <div className="post__text">
                  {text.split(/\r?\n/).map((el,index) => <p key={'reply-' + index} >{el}</p>)}
              </div>
            </div>
            <div className="post__bottom">
              <div className="post__caption">
                {caption}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Reply