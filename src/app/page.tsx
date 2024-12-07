import Utility from "./Utility";
import { FaRecycle } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="mt-32 flex items-center flex-col p-8 ">
        <div className="bg-sky-950/90 p-10 backdrop-blur-sm rounded-2xl border-[0.5px]">
          <Utility name="Wallet" value="416" />
          <Utility name="Evaluation points" value="24" 
          icon={
            <button className="hover:scale-110">
              <FaRecycle className="" />
            </button>
          } />
          <Utility name="Cursus" value="42 Cursus" 
          icon = {
            <button>
              <RiArrowDropDownLine className="size-4"/>
            </button>
          }
          />
          <Utility name="Grade" value="Learner" />
        </div>
      </div>
    </>
  );
}

// bg-gradient-to-r