import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "@mui/material";
import Avatar from "react-avatar";
function Rightsidebar() {
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full md:font-size-2px">
        <CiSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-solid px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">You might like</h1>
        <div className="flex itm-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Jaya</h1>
              <p className="text-sm">@jayam01</p>
            </div>
          </div>
          <div>
            <Link to="/">
              <button className="px-4 py-1 bg-black text-white rounded-full text-sm mt-1">
                Profile
              </button>
            </Link>
          </div>
        </div>
        {/* </div>
          );
        })} */}
      </div>
    </div>
  );
}
export default Rightsidebar;
