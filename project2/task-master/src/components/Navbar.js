import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
function Navbar() {
  return (
    <>
      <div className="bg-white text-[black] flex justify-between items-center rounded-xl p-2 font-inter font-semibold">
        <div className="flex justify-start">
          <p className=""><AcUnitIcon/></p>
          <p className="ml-3">J. Carter</p>
        </div>
        <div className="flex flex-between">
          <p className="px-1">Works</p>&nbsp;
          <p className="px-1">Testimonials</p>&nbsp;
          <p className="px-1">FAQ</p>&nbsp;
          <p className="px-1">Contact</p>&nbsp;
          <p className="px-1">More</p>&nbsp;
        </div>
        <div>
          <p className="bg-[orange] text-[white] px-2 p-1 rounded-2xl">
            Buy Template
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
