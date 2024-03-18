
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
        <p className="max-w-44">
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

function PostActivity() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl">Post Activity</h2>
      <div className="flex flex-col gap-0.5">
        <PostActivityCard
          imgURL="https://s3-alpha-sig.figma.com/img/265e/c6ee/02b971007749f0d098ed9cc982388a71?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PE15xdqTQLbgKp-nRsW64fdnYJ-3uXRRu0KnLX4N5hQXnX9QtdHEAWTrX~w0EdS8cs6ig475uabw4iiXa0LXhJTx8wJvV~ct5xPC-w9CyZtB67tUAK0j4vCOwCroIo0DcJYcpCPwDf9f82Y4ozNR~Hm~c1iNyvUgaY85EdWsJTv1CDN8PtmDChdZ4TxYOeVO6p7aJiXv3v06A9OrrDzCfQrY4AHO~sEGyf6OugvwROdUkBLj46TCs8fpChq7ZKwp5alQtwQpBvreYFmKPh5~UKzPIG2XdWNuAewSdR2CSGHI4xag2HiS8UcxdpLf~HXanAbm~VWdnhTeeNleBU-I1g__"
          content="Knowing what to do can never be okay, you have to"
          date="May 30"
          veiwCountInK={1.2}
        />
        <PostActivityCard
          imgURL="https://s3-alpha-sig.figma.com/img/265e/c6ee/02b971007749f0d098ed9cc982388a71?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PE15xdqTQLbgKp-nRsW64fdnYJ-3uXRRu0KnLX4N5hQXnX9QtdHEAWTrX~w0EdS8cs6ig475uabw4iiXa0LXhJTx8wJvV~ct5xPC-w9CyZtB67tUAK0j4vCOwCroIo0DcJYcpCPwDf9f82Y4ozNR~Hm~c1iNyvUgaY85EdWsJTv1CDN8PtmDChdZ4TxYOeVO6p7aJiXv3v06A9OrrDzCfQrY4AHO~sEGyf6OugvwROdUkBLj46TCs8fpChq7ZKwp5alQtwQpBvreYFmKPh5~UKzPIG2XdWNuAewSdR2CSGHI4xag2HiS8UcxdpLf~HXanAbm~VWdnhTeeNleBU-I1g__"
          content="Success can be achieved by being bold enough"
          date="May 30"
          veiwCountInK={3.1}
        />
      </div>
    </div>
  );
}

export default PostActivity;
