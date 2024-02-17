import { useState, useCallback, memo } from "react";
import { NewTwit } from "./AddTweet";
import { TwitList } from "./TweetList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialTwits = [
  {
    id: 0,
    content:
      "Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM- NEOM, Saudi Arabia",
    likeCount: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disLikeCount: 10,
    timeStamp: "2021-08-01T12:00:00.000Z",

    isEdited: true,
  },
  {
    id: 1,
    content: "One single red rose in a rose bush.",
    imageUrl:
      "https://images.unsplash.com/photo-1496857239036-1fb137683000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 15,
    disLikeCount: 10,
    timeStamp: "2021-09-01T12:00:00.000Z",
    isEdited: false,
  },
  {
    id: 2,
    content:
      "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    imageUrl:
      "https://images.unsplash.com/photo-1682685797886-79020b7462a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 20,
    disLikeCount: 10,
    timeStamp: "2021-09-01T12:00:00.000Z",
    isEdited: false,
  },
];

const MemoizedNewTwit = memo(NewTwit);
const MemoizedTwitList = memo(TwitList);

export function Twitter() {
  const [twits, setTwits] = useState(initialTwits);

  const handelAddNewTwits = useCallback(
    (content, imageUrl) => {
      if (content === "") {
        toast.warn("Empty tweet!", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
        return;
      }
      if (imageUrl !== "" && !imageUrl.startsWith("https://")) {
        toast.warn("Invalid URL!", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
        return;
      }

      const newTwit = {
        id: getNewTwitId(twits),
        content: content,
        imageUrl: imageUrl,
        likeCount: 0,
        disLikeCount: 0,
        timeStamp: new Date().toISOString(),
        isEdited: false,
      };
      setTwits([newTwit, ...twits]);
      toast.success("Tweeted!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
    },
    [twits]
  );

  const handleLike = useCallback(
    (id) => {
      const newTwits = twits.map((twit) => {
        if (twit.id === id) {
          return { ...twit, likeCount: twit.likeCount + 1 };
        }
        return twit;
      });

      setTwits(newTwits);
    },
    [twits]
  );

  const handleDisLike = useCallback(
    (id) => {
      const newTwits = twits.map((twit) => {
        if (twit.id === id) {
          return { ...twit, disLikeCount: twit.disLikeCount + 1 };
        }
        return twit;
      });

      setTwits(newTwits);
    },
    [twits]
  );

  const handelEditing = useCallback(
    (id, content) => {
      const newTwits = twits.map((twit) => {
        if (twit.id === id) {
          return {
            ...twit,
            content: content,
            isEdited: true,
            timeStamp: new Date().toISOString(),
          };
        }
        return twit;
      });

      setTwits(newTwits);
      toast.success("Tweet Edited!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
    },
    [twits]
  );

  const handelDelete = useCallback(
    (id) => {
      const newTwits = twits.filter((twit) => twit.id !== id);
      setTwits(newTwits);

      toast.error("Deleted!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
    },
    [twits]
  );

  const handelShowRecent = useCallback(() => {
    twits.sort((a, b) => {
      let aDate = new Date(a.timeStamp).getTime();
      let bDate = new Date(b.timeStamp).getTime();
      return bDate - aDate;
    });
    setTwits([...twits]);
    toast.success("Showing recent tweets!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  }, [twits]);

  const handleShowOld = useCallback(() => {
    twits.sort((a, b) => {
      let aDate = new Date(a.timeStamp).getTime();
      let bDate = new Date(b.timeStamp).getTime();
      return aDate - bDate;
    });
    setTwits([...twits]);
    toast.success("Showing old tweets!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  }, [twits]);

  const getNewTwitId = useCallback(
    (twits) => {
      if (twits.length === 0) return 0;
      let id = 0;

      twits.forEach((twit) => {
        if (twit.id > id) {
          id = twit.id;
        }
      });
      return id + 1;
    },
    [twits]
  );

  return (
    <div className="main">
      <div className="twit-functionality">
        <MemoizedNewTwit
          addTwit={handelAddNewTwits}
          showRecent={handelShowRecent}
          showOld={handleShowOld}
        />
      </div>
      <div className="twits-box">
        <MemoizedTwitList
          twits={twits}
          like={handleLike}
          disLike={handleDisLike}
          edit={handelEditing}
          deleteTwit={handelDelete}
        />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}