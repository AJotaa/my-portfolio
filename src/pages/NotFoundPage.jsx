import React from "react";
import { Link } from "react-router-dom";
import BaseCard from "../components/interface/BaseCard";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-container container">
        <BaseCard>
          <div className="not-found-card-content">
            <div className="not-found-text">
              <div className="not-found-title-container">
                <h1 className="not-found-title title-text">
                  Oh, looks like you're lost!
                </h1>
              </div>
              <div className="not-found-para-container">
                <p className="not-found-para sub-text">
                  Try <Link to="/">here</Link> to see more.
                </p>
              </div>
            </div>
            <div className="not-found-icon">
              <i className="fa-solid fa-compass"></i>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  );
}

export default NotFoundPage;
