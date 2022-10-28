import "./App.css";
import ButtonText from "./components/ButtonText";
import Navbar from "./components/Navbar";
import ComputerIcon from '@mui/icons-material/Computer';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SurfingIcon from '@mui/icons-material/Surfing';
import PanToolIcon from '@mui/icons-material/PanTool';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
function App() {
  return (
    <>
      <div className="w-full h-screen bg-[blue] image">
        <div className="p-2 drop-shadow-xl">
          <Navbar />
        </div>
        <div className="flex justify-center itmes-center w-full  ">
          <div className="mt-[100px]  w-[500px]">
            <div className="flex  justify-between">
              <div className="flex flex-col justify-between w-[100px] ">
                <ButtonText
                  text="UI/UX"
                img={<ComputerIcon/>}
                  classNames="rounded-3xl px-4 py-2 w-fit ml-10"
                />
                <ButtonText
                  text="Illustrations"
                  img={<TrackChangesIcon/>}
                  classNames="rounded-3xl px-4 py-2 w-fit"
                />
                <ButtonText
                  text="UI"
                  img={<SurfingIcon/>}
                  classNames=" text-right rounded-full flex justify-end items-center w-fit px-3 py-2 ml-14"
                />
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                className="w-[250px] h-[250px] rounded-full  overflow-hidden "
                src="https://www.japantimes.co.jp/wp-content/uploads/2022/10/np_file_188231-200x200.jpeg"
                alt="imgae"
              />
              <div className="flex flex-col justify-between w-[100px] text-right">
                <ButtonText
                  text="Hi! There!"
                  img={<PanToolIcon/>}
                  classNames="rounded-3xl px-4 py-2 w-fit "
                />
                <ButtonText
                  text="Photography"
                  img={<CameraAltIcon/>}
                  classNames="rounded-3xl px-4 py-2 w-fit ml-7"
                />
                <div className="text-left bg-white drop-shadow w-max py-2 px-3 rounded-3xl flex">
                  <MarkunreadMailboxIcon/>&nbsp;
                  <div>
                  <p className="text-slate-400">work with me</p>
                  <p className="whitespace-nowrap">Request a Quote</p>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[orange] font-inter text-center mt-4 text-[16px] uppercase">
          Hi there, I'M James
        </p>
        <p className="text-center text-[30px] font-bold mt-2">
          A product designer with <br /> passion to web
        </p>
        <p className="text-center text-slate-400 mt-4 text-white-900 ">
          lorem ispuum dolor sit amet, lorem ispuum dolor sit amet,lorem ispuum
          dolor sit amet,{" "}
        </p>
      </div>
    </>
  );
}

export default App;
