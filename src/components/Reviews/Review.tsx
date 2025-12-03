import Image from "next/image";
import { ReviewData } from "./types";
import ReviewBody from "./ReviewBody";

interface ReviewProps {
  review: ReviewData;
  index: number;
  renderStars: (rating: string) => JSX.Element[];
}

const Review = ({ review, index, renderStars }: ReviewProps) => {
  const { reviewRating, reviewBody, datePublished, author } = review;

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <article className="review">
      <header className="review__header">
        <div className="review__rating">
          {renderStars(reviewRating.ratingValue)}
        </div>
        <time dateTime={datePublished}>{formatDate(datePublished)}</time>
      </header>
      <p className="sr-only">Opinión número {index + 1}</p>
      <p className="sr-only">Valoración: {reviewRating.ratingValue} de 5</p>
      <p className="sr-only">{reviewBody}</p>
      <ReviewBody initialText={reviewBody} cut={300} />
      <footer className="review__author">
        <Image
          src={author.image}
          alt=""
          width={35}
          height={35}
          className="review__author-image"
        />{" "}
        <h4 className="review__author-name">{author.name}</h4>
      </footer>
    </article>
  );
};

export default Review;
