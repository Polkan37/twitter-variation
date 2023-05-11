import React, { useState, useEffect, useRef } from "react";
import AccessibleList from "../components/AccessibleList/AccessibleList";
import CreateMessageForm from "../components/CreateMessageForm/CreateMessageForm";
import { getTweets } from "../api/getTweets";
import { Context } from "../context.js";


export const Home = (props) => {
  const [context, setContext] = useState(getTweets());
  const ref = useRef();
  const [messageForm, setMessageForm] = useState();

  useEffect(() => {
    const target = document.getElementById('new-mesasge-form');

    if (props.messageForm) {
      setMessageForm(<CreateMessageForm />)
      target.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    else {
      setMessageForm('')
      // const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);

    }

  }, [props.messageForm]);

  return (
    <Context.Provider value={[context, setContext]}>
      <section className="main">
        <div id='new-mesasge-form' ref={ref}>
          {messageForm ? messageForm : ''}
        </div>
        <AccessibleList/>
      </section>
    </Context.Provider>
  );
};
