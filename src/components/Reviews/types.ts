export type ReviewData = {
  "@type": string;
  reviewBody: string;
  author: {
    "@type": string;
    name: string;
    image: string;
  };
  reviewRating: {
    "@type": string;
    ratingValue: string;
  };
  datePublished: string;
};
