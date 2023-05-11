import React, { useState } from "react";
import { getThread } from "../../api/getThread";
import Thread from "../Thread/Thread";
import { ReactComponent as ArrowIcon } from "../../resourses/arrow.svg";

function Post({ post }) {
  const [thread, setThread] = useState([]);
  const [isReply, setIsReply] = useState(false);
  const [threadPoint, setThreadPoint] = useState(false);

  async function showTred(id) {
    const button = document.getElementById('thread-button-' + post.id);
    if (threadPoint) {
        button?.classList.remove("active");

      setThread();
      setThreadPoint(false);
      return false
    } else {
      button?.classList.add("active");
      const thread = id ? await getThread(id) : "";

      setThread(thread);
      setThreadPoint(true);
      return true
    }
  }
  async function handleReplyClick(id) {
    setIsReply(true);
    await showTred(id);
    
    const container = document.getElementById(post.id);
    setTimeout(() => {
        container.scrollIntoView({ block: "end", behavior: "smooth" })
    }, 500)
  }

  return (
    <div className="container" id={post.id}>
      <div className="post">
        <div className="post__top">
          <div className="post__user-info">
            <img src={post.user_icon} alt="" className="post__user-icon" />
            <p className="post__user-name">{post.user_name}</p>

          </div>
          <div className="post__reactions">
            <button className="post__button button reply-button" onClick={() => handleReplyClick(post.id)}>Reply</button>
          </div>
        </div>
        <div className="post__content">
          <h2 className="post__header">{post.title}</h2>
          <div className="post__text">{post.text.split(/\r?\n/).map((el,index) => <p key={index}>{el}</p>)}</div>
        </div>
        <div className="post__bottom">
          <div className="post__caption">{post.caption}</div>
          {post.thread ? (
            <button
              className="post__button thread-button button"
              id={'thread-button-' + post.id}
              onClick={() => showTred(post.id)}
            >
              <ArrowIcon />
            </button>
          ) : (
            ""
          )}
        </div>
        {post.thread && threadPoint ? (
          <div className="post__point point"></div>
        ) : (
          ""
        )}
      </div>

      {thread ? <Thread data={thread} id={post.id} isReply={isReply} /> : ""}
    </div>
  );
}

export default Post;
