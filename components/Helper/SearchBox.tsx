import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";

const SeacrhBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent>
        <form>
          <input
            type="text"
            placeholder="Search Books"
            className="block w-full bg-gray-200 rounded-xl px-6 outline-none mt-2 py-2"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SeacrhBox;
