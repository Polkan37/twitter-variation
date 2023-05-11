import React, { useRef, useState, useContext } from "react";
import { createTweet } from "../../api/createTweet";
import { getUserInfo } from "../../api/getUserInfo";
import { getTweets } from "../../api/getTweets";
import { Context } from "../../context";
import getCaption from "./getCaption";

function CreateMessageForm(props) {
  const [context, setContext] = useContext(Context);
  const title = useRef(null);
  const message = useRef(null);
  const [disable, setDisable] = useState(true);
  const defaultBorderStyle = "1px solid #EAEAEA";
  const mistakeBorderStyle = "1px solid #FF868E";

  async function handleClick() {
    const currentUserId = 1148;
    const user = await getUserInfo(currentUserId);
    const caption = await getCaption(user.name);
    
    const newPost = { user_id: currentUserId, user_icon: user.icon, user_name: user.name, title: title.current.value, text: message.current.value, caption: caption}

    await createTweet(newPost);
 
    title.current.value = '';
    message.current.value = '';
    setDisable(true);
    setContext(getTweets())
  }

  function handleChange(event) {

    switch (event.target.id) {
      case "title":
        title.current.style.border = validateTitle(title.current.value)
          ? defaultBorderStyle
          : mistakeBorderStyle;
        break;
      case "message":
        message.current.style.border = validateMessage(message.current.value)
          ? defaultBorderStyle
          : mistakeBorderStyle;
        break;
      default:
      // do nothing
    }

    validateTitle(title.current.value) && validateMessage(message.current.value)
      ? setDisable(false)
      : setDisable(true);
  }
  return (
    <div className="new-message-form card" id="new-tweet">
      <p className="card__title">new tweet</p>
      <input
        id="title"
        type="text"
        onChange={(event) => handleChange(event)}
        ref={title}
        placeholder="Title of the post pls type here..."
        pattern="\w{2,152}"
        required
      />
      <textarea
        id="message"
        onChange={handleChange}
        ref={message}
        cols="30"
        rows="7"
        placeholder="Message here.."
        pattern="\w{1,3000}"
        required
      ></textarea>
      <button
        onClick={() => {
          handleClick();
        }}
        type="submit"
        className="new-message-form__button post__button button"
        disabled={disable}
      >
        send
      </button>
    </div>
  )
}

function validateTitle(field) {
  return /^(.{2,152})$/.test(field);
}
function validateMessage(field) {
  return /^([0-9\n\w\W]{3,3000})$/.test(field);
}

export default CreateMessageForm;
