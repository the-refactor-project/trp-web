"use client";
import Image from "next/image";

import { reviewsData } from "./reviewsData";
import Star from "./Star";
import Review from "./Review";
import "./Reviews.scss";

const Reviews = (): React.ReactElement => {
  const { reviews } = reviewsData;
  const MAX_STARS = 5;

  const renderStars = (rating: string) => {
    const stars = [];
    const ratingNum = parseInt(rating);
    for (let index = 0; index < MAX_STARS; index++) {
      stars.push(<Star key={index} index={index} ratingNumber={ratingNum} />);
    }
    return stars;
  };

  return (
    <>
      <h2 className="section__title">Qué opinan nuestro/as exalumno/as</h2>
      <div className="reviews-container">
        <div className="reviews-summary">
          <span className="sr-only">Valoración total</span>
          <div className="reviews-summary__total">
            <div className="reviews-stars">
              {renderStars(reviewsData.aggregateRating.ratingValue)}
            </div>
            5 estrellas ({reviewsData.aggregateRating.reviewCount} opiniones)
          </div>
          <div className="reviews-button">
            <a
              href="https://www.google.com/maps/place/The+Refactor+Project/@41.392808,1.9753823,11z/data=!4m8!3m7!1s0x6613a9245591fc23:0x7cad1d5fd476f369!8m2!3d41.3926679!4d2.1401891!9m1!1b1!16s%2Fg%2F11vpl0z8n_"
              className="button button--solid"
            >
              Ver todas las opiniones
            </a>
          </div>
        </div>
        <div className="reviews-grid">
          <h3 className="sr-only">Opiniones</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <Review
                  review={review}
                  renderStars={renderStars}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reviews;
