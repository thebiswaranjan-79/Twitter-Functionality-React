import { useState } from "react";

export function NewTwit({ addTwit, showRecent, showOld }) {
  const [twitText, setTwitText] = useState("");
  const [twitImage, setTwitImage] = useState("");
  const [sortState, setSortState] = useState(true);

  return (
    <div className="new-twit">
      <div className="title">
        <h1>Twitter</h1>
      </div>
      <div className="twit-form">
        <input
          onChange={(event) => {
            setTwitText(event.target.value);
          }}
          type="text"
          placeholder="What's cooking in your mind?"
          value={twitText}
        />
        <input
          onChange={(event) => {
            setTwitImage(event.target.value);
          }}
          type="url"
          placeholder="Image Url - Optional"
          value={twitImage}
        />
      </div>
      <div className="twit-buttons">
        <button
          onClick={(e) => {
            addTwit(twitText, twitImage);
            setTwitText("");
            setTwitImage("");
          }}
        >
          Tweet
        </button>
        {sortState ? (
          <button
            onClick={() => {
              showRecent();
              setSortState(false);
            }}
          >
            Show recent
          </button>
        ) : (
          <button
            onClick={() => {
              showOld();
              setSortState(true);
            }}
          >
            Show Old
          </button>
        )}
      </div>
    </div>
  );
}