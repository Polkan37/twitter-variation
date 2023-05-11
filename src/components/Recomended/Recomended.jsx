import React, { useState, useEffect } from "react";
import { getRecommendedUsers } from "../../api/getRecommendedUsers";

function Recomended() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getRecommendedUsers()
      .then((data) => setRecommendations(data))
      .then(() => {
        if (recommendations) {
          recommendations.forEach((user) => {
            document.querySelector(".recommendations").innerHTML += (`
              <div class="recommendations__user user-card card">
            <img src=${user.icon} alt="" class="user-card__image"/>
            <div class="user-card__description">
                <div class="user-card__name">${user.name}</div>
                <button class="user-card__button button">Subscribe</button>
            </div>
        </div>
            `);
          });
        }
      });
  }, [recommendations.length]);

  return (
    <div className="sidebar__recommendations recommendations">
        <div className="recommendations__header-card card">
            <h3>Hi there!</h3>
            <p>That could be interesting for you:</p>
        </div>
        {/* <div className="recommendations__promo-card card">
            <img src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=2000" alt=""/>
        </div> */}
    </div>
  );
}

export default Recomended;
