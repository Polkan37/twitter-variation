import React, { useEffect } from "react";
import Reply from "./Reply";
import ReplyForm from "./ReplyForm";

function Thread({ data , id, isReply}) {
  
  useEffect(() => {
    const container = document?.getElementById(id);
    const replies = container?.querySelectorAll(".reply-post");

    replies[replies.length -1]?.classList.add('last-reply');
  }, [data, id]);

  return (
    <div className="post__replies">
      {data.length > 0
        ? data.map((element, index) => <Reply key={index} data={element} />)
        : ""}
      {data.length > 0 || isReply
        ? <ReplyForm postId={id}/> : ''}
    </div>
  );
}

export default Thread;
