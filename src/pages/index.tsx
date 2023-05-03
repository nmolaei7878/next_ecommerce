import FloatBadges from "@/components/home/FloatBadges";
import LeftSide from "@/components/home/LeftSide";
import MiddleSide from "@/components/home/MiddleSide";
import RightSide from "@/components/home/RightSide";

const HomePage: React.FC = () => {
  return (
    <div className="w-screen h-[80rem] sm:h-screen dark:bg-slate-200 bg-background dark:text-slate-900 text-white px-10 pt-4 flex flex-col gap-6">
      <div className=" flex-1 overflow-hidden relative">
        <div className="flex sm:items-center z-40 absolute w-full h-full flex-col sm:flex-row items-start gap-10">
          <LeftSide />
          <MiddleSide />
          <RightSide />
          <FloatBadges />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
