
import { PostActivityData } from "@/data/dashboardData";
import { dummyPostActivity } from "@/data/dummy/dashboardDummyData";
import React, { HTMLAttributes } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import Box from "../Container/Box";

interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
  imgURL: string,
  content: string,
  date: string,
  veiwCountInK?: number
}

/**
 * A functional component that renders a single post activity card.
 * @param {PostCardProps} props - The props to be passed to the component.
 * @returns {JSX.Element} A single post activity card.
 */
const PostActivityCard: React.FC<PostCardProps> = ({
  imgURL,
  content,
  date,
  veiwCountInK
}) => {
  const style = {
    backgroundImage: `url(${imgURL})`
  };
  return <Box className="px-4 py-2">
    <div className="flex justify-between text-xs items-center">
      <div className="flex gap-3">
        <div className="w-9 h-9 bg-center bg-cover" style={style}></div>
        <p className="max-w-44 w-44">
          {content.slice(0, 50) + "..."}
        </p>
      </div>
      <p className="font-medium ">{date}</p>
      <div className="flex gap-1 items-center">
        <IoEyeSharp size="20px" className=" text-white rounded-full bg-secondary p-[2px]" />
        <p className="font-medium">{veiwCountInK || 0}k</p>
      </div>
      <BsThreeDots size="20px" />
    </div>
  </Box>
};

interface PostActivityProps {
  activites?: PostActivityData[]
}

const PostActivity: React.FC<PostActivityProps> = ({ activites }) => {
  // If the activities array is empty or undefined, set it to the dummy data.
  if (!activites || !activites.length) activites = dummyPostActivity;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl">Post Activity</h2>
      <div className="flex flex-col gap-0.5">
        {
          activites.map((act, i) =>
            <PostActivityCard
              key={act.date + "_" + i}
              imgURL={act.imgURL}
              content={act.content}
              date={act.date}
              veiwCountInK={act.veiwCount / 1000}
            />
          )
        }
      </div>
    </div>
  );
}

export default PostActivity;
