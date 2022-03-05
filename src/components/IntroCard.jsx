import React from "react";
import avatar from "./../assets/avatar.png";

export default function IntroCard({ changeTheme, theme }) {
  return (
    <div className={theme === "light" ? "intro-card" : "intro-card-dark"}>
      <div className={theme === "light" ? "card-wrapper" : "card-wrapper-dark"}>
        <div className="three-dots">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="dot-3"></div>
        </div>

        <div
          className={theme === "light" ? "email-wrapper" : "email-wrapper-dark"}
        >
          doanviettu2k@gmail.com
        </div>
      </div>

      <div className="main-section">
        <div className="image-wrapper">
          <img className="user-image" src={avatar} alt="avatar" />
          <p
            className={theme === "light" ? "theme-header" : "theme-header-dark"}
          >
            Change Theme
          </p>
          <div className="theme-buttons">
            <div
              onClick={() => changeTheme("light")}
              className="light-theme"
            ></div>
            <div
              onClick={() => changeTheme("dark")}
              className="dark-theme"
            ></div>
          </div>
        </div>

        <div
          className={
            theme === "light" ? "whoamI-wrapper" : "whoamI-wrapper-dark"
          }
        >
          <div className="small-dot-1"></div>
          <div className="small-dot-2"></div>
          <div className="small-dot-3"></div>
          <div className="small-dot-4"></div>

          <div className={theme === "light" ? "blue-card" : "blue-card-dark"}>
            <div
              className={
                theme === "light"
                  ? "blue-cart-content"
                  : "blue-cart-content-dark"
              }
            >
              <h3>Who am I</h3>

              <p>
                An enthusiastic student with a passion for building websites and
                desire to become a full-stack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
