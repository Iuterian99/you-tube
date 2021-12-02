import "./Top-header.css";

import youtubeLogo from "../../Assets/Images/youtube-logo.svg";
import youtubeSentence from "../../Assets/Images/yutube-sentence.svg";
import userImage from "../../Assets/Images/Userpic.svg";
import Search from "../../Assets/Images/search.svg";

function TopHeader() {
  return (
    <div className="row ps-4 pt-3 pb-3 pb-0 pe-0 bg-dark">
      <div className="col-3 d-flex align-items-center justify-content-between pe-0">
        <button className="header-hamburger bg-dark border-0">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="youtube-sentence pe-4">
          <img src={youtubeLogo} alt="youtubeSentence" width="37" height="25" />
          <img
            src={youtubeSentence}
            alt="youtubeSentence"
            width="75"
            height="23"
          />
        </div>
      </div>
      <div className="col-6 ps-0">
        <form className="form ms-0">
          <label className="header-label">
            <input
              className="header-input p-2 border-0"
              type="text"
              placeholder="Search"
            />
            <img
              className="label-search"
              src={Search}
              alt="Search"
              width="19"
              height="19"
            />
          </label>
        </form>
      </div>

      <div className="col-3 d-flex justify-content-between align-items-center pe-0">
        <button className="left-btns border-0 bg-dark">
          <svg
            width="27"
            height="20"
            viewBox="0 0 27 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="left-btns border-0 bg-dark">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="left-btns header-notification border-0 bg-dark">
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="left-btns  border-0 bg-dark">
          <img src={userImage} alt="user" width="40" height="40" />
        </button>
      </div>
    </div>
  );
}

export default TopHeader;
