import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Story.styles.scss";
import { useStory } from "../../contexts/StoryContext";

const Story = ({ storyId }) => {
  const [stories, setStories] = useState([]);
  const { getItemById } = useStory();

  useEffect(() => {
    const getStory = async () => {
      const stories = await getItemById(storyId);
      setStories([stories]);
    };
    getStory();
  }, []);

  const mapTime = (timestamp) => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 1) {
      return `${interval} minutes ago`;
    }

    return `${Math.floor(seconds)} seconds ago`;
  };

  return (
    <div className="Story">
      {stories.map(
        (story) =>
          story.url !== "" && (
            <div key={story.id}>
              <div className="title">
                <a href={story.url} target="_blank" rel="noreferrer">
                  {story.title}
                </a>
              </div>
              <div className="details">
                <span>{story.score} points</span>
                <span>By: {story.by}</span>
                <span>{mapTime(story.time)}</span>
                {story.kids ? (
                  <span>{story.kids.length} comments</span>
                ) : (
                  <span>No comments</span>
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};

//Title
//score
//url
//by
//time
//id

export default Story;
