import React, { useRef, useState } from "react";

function ReplyForm({postId}) {
  const message = useRef(null);
  const [disable, setDisable] = useState(true);
  const defaultBorderStyle = "1px solid #EAEAEA";
  const mistakeBorderStyle = "1px solid #FF868E";

  function handleClick() {
    console.log(`New reply to tweet ${postId} is:\n `, message.current.value);

    message.current.value = null;
    setDisable(true);
  }

  function handleChange(event) {
    switch (event.target.id) {
      case "message":
        message.current.style.border = validateMessage(message.current.value)
          ? defaultBorderStyle
          : mistakeBorderStyle;
        break;
      default:
      // do nothing
    }

    validateMessage(message.current.value)
      ? setDisable(false)
      : setDisable(true);
  }

  return (
    <div className="post__reply-form post">
      <textarea
        id="message"
        onChange={handleChange}
        ref={message}
        cols="30"
        rows="3"
        placeholder="Type here.."
        pattern="\w{1,300}"
        required
      ></textarea>
      <button
        onClick={() => {
          handleClick();
        }}
        className="post__button button reply-thread-button"
        id={'reply-button-'+ postId}
        disabled={disable}
      >
        Reply
      </button>
    </div>
  );
}

export default ReplyForm;

function validateMessage(field) {
  return /^([0-9\n\w\W]{3,300})$/.test(field);
}
