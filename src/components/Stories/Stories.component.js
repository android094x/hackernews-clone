import React, { useEffect } from "react";
import "./Stories.styles.scss";

import { useStory } from "../../contexts/StoryContext";
import Story from "../Story/Story.component";

const Stories = ({ endpoint }) => {
  const { getStoryIds, storyIds } = useStory();

  useEffect(() => {
    getStoryIds(endpoint);
    console.log(endpoint);
  }, [endpoint]);

  //To make this more simple just 15 stories will be rendered
  const storiesToRender = storyIds.slice(1, 16);
  return (
    <div className="Stories-container">
      {storiesToRender.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
};

export default Stories;
