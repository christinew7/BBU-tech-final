import { fetchPosts, fetchUsers } from '../api.js';
import React, { useState, useEffect } from "react";

import "./Community.css";

const Community = () => {
  const [postInfo, setPostInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const fetchedPostInfo = await fetchPosts();
      const fetchedUserInfo = await fetchUsers();

      fetchedPostInfo.sort((a, b) => new Date(b.date) - new Date(a.date));

      const usersMap = fetchedUserInfo.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      setPostInfo(fetchedPostInfo);
      setUserInfo(usersMap);
      setLoading(false);
    }

    getData();
  }, []);

  if (loading) {
    return (
      <p>Loading posts...</p>
    );
  }

  return (
    <section className="Community-container">
      <div className="Community-title">Community</div>
      <div className="Community-description">Connection is the heartbeat of our lives; we are stronger together!</div>

      <div className="Community-posts-container">
        {postInfo.map((post, index) => {
          const user = userInfo[post.id];
          return (
            <div key={`${post.id}-${index}`} className="Community-posts-post">
              <section className="Community-profile-info">
                <img
                  src={`/photos/${user.profile_photo}`}
                  alt="Profile"
                  className="Community-profile-photo"
                />
                <div className="Community-user-info">
                  <h3>@{user.username}</h3>
                  <time>{new Date(post.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</time>
                </div>
              </section>
              <div className="Community-post-content">
                <p>{post.content}</p>
              </div>

            </div>
          );
        })}
      </div>
      <section className = "Community-copyright">
        <h1>2022 Birth By Us, Inc. All rights reserved.</h1>
        <p>Disclaimer: Birth By Us does not provide medical advice. Our services are not a form of healthcare or medical advice. Any information presented to you through our services are meant for informational purposes only. If you have any questions or concerns related to your physical or mental health, contact your healthcare provider. By using our services, you understand and agree that Birth By Us is not a licensed practitioner of medicine.
        </p>
      </section>
    </section>
  )

};

export default Community;
