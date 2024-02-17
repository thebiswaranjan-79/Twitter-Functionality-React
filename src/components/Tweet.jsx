import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";
import { useState } from "react";

export function Twit({ twit, like, disLike, edit, deleteTwit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [twitContent, setTwitContent] = useState(twit.content);

  function formateDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    return format(inputDate, "do MMM, yyyy 'at' HH:mm");
  }

  return (
    <div className="twit">
      <div className="twit-content">
        <div className="text">
          {isEditing ? (
            <input
              value={twitContent}
              type="text"
              onChange={(event) => {
                setTwitContent(event.target.value);
              }}
            />
          ) : (
            <p>{twitContent}</p>
          )}
        </div>
        <div className="image">
          {twit.imageUrl ? <img src={twit.imageUrl} alt="tweet-img" /> : ""}
        </div>
      </div>
      <div className="twit-meta-info">
        <div className="time-edited">
          <span className="is-edited">{twit.isEdited ? "(Edited)" : ""}</span>{" "}
          <span className="time-stamp">{formateDate(twit.timeStamp)}</span>
        </div>
      </div>
      <div className="twit-footer">
        <div className="twit-btnS">
          <button
            onClick={() => {
              like(twit.id);
            }}
            className="like"
          >
            <span>
              <BiSolidLike />
            </span>
            <span className="like-count">{twit.likeCount}</span>
          </button>
          <button
            onClick={() => {
              disLike(twit.id);
            }}
            className="dislike"
          >
            <span>
              <BiSolidDislike />
            </span>
            <span className="dislike-count">{twit.disLikeCount}</span>
          </button>
          {isEditing ? (
            <button
              onClick={() => {
                edit(twit.id, twitContent);
                setIsEditing(false);
              }}
              className="save-edit"
            >
              <FaSave />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEditing(true);
              }}
              className="edit"
            >
              <FaEdit />
            </button>
          )}
          <button
            onClick={() => {
              deleteTwit(twit.id);
            }}
            className="delete"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}