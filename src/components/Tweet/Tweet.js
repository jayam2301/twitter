import React from "react";
import { Avatar } from "@mui/material";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { GiHistogram } from "react-icons/gi";
function Tweet() {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="40"
            round={true}
          />
          <div className=" ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">jaya mishra</h1>
              <p className="text-gray-500 text-sm ml-1">@jayam01, 2m</p>
            </div>
            <div>
              <p>Hey, let's connect</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                  <FaRegComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRetweet size="24px" />
                </div>
                <p>3</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                  <CiHeart size="24px" />
                </div>
                <p>3</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                  <GiHistogram size="24px" />
                </div>
                <p>3</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                  <CiBookmark size="24px" />
                </div>
                <p>0</p>
              </div>
              {/* {user?._id === tweet?.userId && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                    <MdOutlineDeleteOutline size="24px" />
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
