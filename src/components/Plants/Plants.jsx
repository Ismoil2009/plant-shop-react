import React from "react";

export default function Plants() {
  return (
    <div className="plants">
      <div className="container">
        <div className="plants-text">
          <h2>Featured Plants</h2>
          <select name="plants-select" id="">
            <option value="">Cheaper First</option>
          </select>
        </div>
        <hr />
        <div className="plants-row">
          <div className="plants-card">
            <img
              src="https://img.freepik.com/premium-photo/real-cactus-white-background-patricia-piccinini-style-uhd-image_899449-30000.jpg?w=360"
              alt=""
            />
            <p>Kaktus Plants</p>
            <h4>IDR 85.000</h4>
          </div>
          <div className="plants-card">
            <img
              src="https://img.freepik.com/premium-photo/cute-cactus-plants-pot-image-white-background-ai-generated-art_210643-3607.jpg?w=360"
              alt=""
            />
            <p>Landak Plants</p>
            <h4>IDR 105.000</h4>
          </div>
          <div className="plants-card">
            <img
              src="https://img.freepik.com/premium-photo/there-is-small-cactus-white-pot-white-surface-generative-ai_561855-17968.jpg?w=360"
              alt=""
            />
            <p>Kecubung Plants</p>
            <h4>IDR 85.000</h4>
          </div>
          <div className="plants-card">
            <img
              src="https://img.freepik.com/premium-photo/cute-cactus-plants-pot-image-white-background-ai-generated-art_210643-3618.jpg?w=360"
              alt=""
            />
            <p>Kecubung Plants</p>
            <h4>IDR 85.000</h4>
          </div>
          <div className="plants-card">
            <img
              src="https://img.freepik.com/premium-photo/set-cactus-plants-succulents-3d-rendering-digital-composition-illustration-graphics_930198-1110.jpg?w=360"
              alt=""
            />
            <p>Kecubung Plants</p>
            <h4>IDR 85.000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
