import { Search } from "lucide-react";
import React from "react";

function SearchSection({onSearchInput}:any) {
  return (
    <div className="py-10 px-4 sm:p-10 bg-gradient-to-br from-teal-600 via-teal-500 to-blue-600 flex-col flex justify-center items-center text-white text-center">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p className="mt-2 text-sm sm:text-base">What would you like to create today?</p>

      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-full max-w-xl mx-4 md:w-[50%]" >
          <Search className="text-primary shrink-0" />
          <input type="text" placeholder="Search Templates"
           onChange={(event)=>onSearchInput(event.target.value)}
          className="bg-transparent w-full outline-none text-black text-sm sm:text-base" />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
