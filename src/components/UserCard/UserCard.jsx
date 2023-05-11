import React, { useState, useEffect } from "react";
import { getUserInfo } from "../../api/getUserInfo";

function UserCard() {
  const id = 1148;
  const [info, setInfo] = useState({});

  useEffect(() => {
    getUserInfo(id).then((data) => setInfo(data));
  }, [id]);

  return (
    <div className="about-user">
      <div className="about-user__basic-info">
        <img
          src={info.icon}
          alt=""
          className="about-user__image"
        />
        <div className="about-user__info">
          <p className="about-user__name">{info.name}</p>
          <p>
            <b>Subscriptions: </b>
            {info.subscriptions?.length}
          </p>
          <p>
            <b>Subscribers: </b>
            {info.subscribed?.length}
          </p>
        </div>
      </div>
      <div className="about-user__description">
        <p>
          <b>Bio: </b>
          {info.bio}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
