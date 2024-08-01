const darkCyan = "hsl(185, 75%, 39%)";
const veryDarkDesaturatedBlue = "hsl(229, 23%, 23%)";
const darkGrayishBlue = "hsl(227, 10%, 46%)";
const darkGray = "hsl(0, 0%, 59%)";

import bgpPatternTop from "./images/bg-pattern-top.svg";
import bgPatternBottom from "./images/bg-pattern-bottom.svg";
import bgPatternCard from "./images/bg-pattern-card.svg";
import userImage from "./images/image-victor.jpg";
function App() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-5 relative overflow-hidden"
      style={{ backgroundColor: darkCyan }}
    >
      <img
        className="absolute top-[-200px] left-[-200px] sm:top-[-450px] sm:left-[-450px]"
        src={bgpPatternTop}
        alt="bg pattern top"
      />
      <img
        className="absolute bottom-[-200px] right-[-200px] sm:bottom-[-450px] sm:right-[-450px]"
        src={bgPatternBottom}
        alt="bg pattern top"
      />

      <div className="z-50 rounded-xl bg-white overflow-hidden">
        <img src={bgPatternCard} alt="bgPatternCard" />
        <img
          className="rounded-full w-[100px] h-[100px] mx-auto mt-[-50px] mb-[12px]"
          src={userImage}
          alt="user-image"
        />

        <div className="flex flex-row items-center justify-center pb-[6px] ">
          <span
            className="font-bold"
            style={{ color: veryDarkDesaturatedBlue }}
          >
            Victor Crest
          </span>
          <span className="ml-1" style={{ color: darkGray }}>
            26
          </span>
        </div>
        <div className="mb-6">
          <p className="text-sm text-center" style={{ color: darkGrayishBlue }}>
            New Jersey
          </p>
        </div>
        <hr style={{ color: darkGray }} />
        <div className="flex flex-row justify-between px-12 py-6">
          <div className="flex flex-col items-center ">
            <h3
              className="text-lg font-bold"
              style={{ color: veryDarkDesaturatedBlue }}
            >
              80K
            </h3>
            <h3 className="text-xs" style={{ color: darkGray }}>
              Followers
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <h3
              className="text-lg font-bold"
              style={{ color: veryDarkDesaturatedBlue }}
            >
              803K
            </h3>
            <h3 className="text-xs" style={{ color: darkGray }}>
              Likes
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <h3
              className="text-lg font-bold"
              style={{ color: veryDarkDesaturatedBlue }}
            >
              1.4K
            </h3>
            <h3 className="text-xs" style={{ color: darkGray }}>
              Photos
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
