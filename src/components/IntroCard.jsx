import React from "react";

export default function IntroCard() {
    return (
        <div className="intro-card">
            <div className="card-wrapper">
                <div className="three-dots">
                    <div className="dot-1"></div>
                    <div className="dot-2"></div>
                    <div className="dot-3"></div>
                </div>

                <div className="email-wrapper">doanviettu2k@gmail.com</div>
            </div>

            <div className="main-section">
                <div className="image-wrapper">
                    <img
                        className="user-image"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                        alt="avatar"
                    />
                </div>

                <div className="whoamI-wrapper">
                    <div className="small-dot-1"></div>
                    <div className="small-dot-2"></div>
                    <div className="small-dot-3"></div>
                    <div className="small-dot-4"></div>

                    <div className="blue-card">
                        <div className="blue-cart-content">
                            <h3>Who am I</h3>

                            <p>
                                An enthusiastic student with a passion for
                                building websites and desire to become a
                                full-stack developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
