import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //Hook
import { getProfile, getRepos } from "../store/index";

//To get a State of profile and repos need both useDispatch FN and useSelector FN to transform data  
export default () => {
  const dispatch = useDispatch();
  const profileData = useSelector((appState) => appState.profile);
  const repoData = useSelector((appState) => appState.repos);

//Then, apply data of profileData and repoData to jsx below
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div className="container">
      <div className="navbar">
        <div>
          <a href="#">
            <i class="fa fa-columns"></i> Overview
          </a>
          <a id="red" href="#">
            <i class="fa fa-tablet"></i> Repositories{" "}
            <button id="num">{profileData.public_repos}</button>
          </a>
          <a href="#">
            <i class="fa fa-bar-chart"></i> Projects
          </a>
          <a href="#">
            <i class="fa fa-cube"></i> Packages
          </a>
        </div>
      </div>

      <div className="sideBar">
        <div className="avatar">
          <img src={profileData.avatar_url} />
        </div>
        <h2 className="profileName">{profileData.name}</h2>
        <div className="log-in">{profileData.login}</div>
        <button className="edit">Edit Profile</button>
        <div className="follow">
          <i class="fa fa-users"> </i> { profileData.followers} followers · 
          {profileData.following} following ·
          <i class="fa fa-star-o"> </i> { profileData.public_gists}
        </div>
        <div className="location">
          <i class="fa fa-map-marker"></i> { profileData.location}
        </div>
        <div className="email">{profileData.email || "Email: N/A"}</div>
        <div className="blog">{profileData.blog || "Blog: N/A"}</div>
      </div>
      
      <div className="repo">
        {repoData.map((item) => (
          <div><a className="eachRepo" href={item.html_url}>{item.name}</a></div>
        ))}
      </div>
    </div>
  );
};
