import { useState } from "react";

interface ReviewBodyProps {
  initialText: string;
  cut: number;
}

const ReviewBody = ({ initialText, cut }: ReviewBodyProps) => {
  const [text, setText] = useState(
    initialText.length > cut ? initialText.slice(0, cut).trim() : initialText,
  );

  const isLong = initialText.length > cut;
  const isShowingFull = text.length > cut;

  const handleToggle = () => {
    if (isShowingFull) {
      setText(initialText.slice(0, cut).trim());
    } else {
      setText(initialText);
    }
  };

  return (
    <>
      <p className="review__body" aria-hidden={true}>
        {text}
        {isLong && !isShowingFull && "..."}
      </p>
      {isLong && (
        <button
          style={{
            fontWeight: 500,
            textDecoration: "underline",
            marginTop: 15,
            textAlign: "left",
          }}
          onClick={handleToggle}
        >
          Mostrar {isShowingFull ? "menos" : "más"}
        </button>
      )}
    </>
  );
};

export default ReviewBody;
