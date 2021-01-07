import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StoryContext = createContext();

const useStory = () => {
  return useContext(StoryContext);
};

const BASE_URI = `https://hacker-news.firebaseio.com/v0/`;
const ENDPOINTS = {
  topstories: "topstories.json",
  beststories: "beststories.json",
  newstories: "newstories.json",
  askstories: "askstories.json",
  showstories: "showstories.json",
  jobstories: "jobstories.json",
};

const StoryProvider = ({ children }) => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {}, []);

  const getStoryIds = async (endpoint) => {
    try {
      const response = await axios.get(BASE_URI + ENDPOINTS[endpoint]);
      setStoryIds(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getItemById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URI}item/${id}.json`);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    storyIds,
    getStoryIds,
    getItemById,
  };

  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
};

export { StoryProvider, useStory };
