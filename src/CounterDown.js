import React, { useEffect, useRef, useState } from "react";
import facebook from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";

export default function CounterDown() {
  const initialSeconds = 604800;
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  const days = Math.floor(remainingSeconds / (60 * 60 * 24));
  const daysRef = useRef(days);
  const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
  const hoursRef = useRef(hours);
  const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
  const minutesRef = useRef(minutes);
  const seconds = Math.floor(remainingSeconds % 60);
  const secondsRef = useRef(seconds);

  const [dayAct, setDayAct] = useState(null);
  const [hourAct, setHourAct] = useState(null);
  const [minuteAct, setMinuteAct] = useState(null);
  const [secondAct, setSecondAct] = useState(null);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const timer = setTimeout(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
        checkTimeChange();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [remainingSeconds]);

  function checkTimeChange() {
    if (days !== daysRef.current) {
      setDayAct("daySpan");
      console.log("Päivä muutos");
      daysRef.current = days;
      setTimeout(() => {
        setDayAct(null);
      }, 900);
    }
    if (hours !== hoursRef.current) {
      setHourAct("hourSpan");
      console.log("Tunti muutos");
      hoursRef.current = hours;
      setTimeout(() => {
        setHourAct(null);
      }, 900);
    }
    if (minutes !== minutesRef.current) {
      setMinuteAct("minuteSpan");
      console.log("Minuutti muutos");
      minutesRef.current = minutes;
      setTimeout(() => {
        setMinuteAct(null);
      }, 900);
    }
    if (seconds !== secondsRef.current) {
      setSecondAct("secondSpan");
      console.log("Sekuntti muutos");
      secondsRef.current = seconds;
      setTimeout(() => {
        setSecondAct(null);
      }, 900);
    }
  }

  return (
    <body>
      <div className="main-background">
        <h1>WE'RE LAUNCHING SOON</h1>
        <div className="cards">
          <div className="container-segment">
            <div className="card">
              <div className="card-divider" />
              {days}
              <div className="top day">
                <span className={dayAct} />
              </div>
              <div className="bottom"></div>
            </div>
            <div className="text">DAYS</div>
          </div>
          <div className="container-segment">
            <div className="card">
              <div className="card-divider" />
              {hours}
              <div className="top hour">
                <span className={hourAct} />
              </div>
              <div className="bottom"></div>
            </div>
            <div className="text">HOURS</div>
          </div>
          <div className="container-segment">
            <div className="card">
              <div className="card-divider" />
              {minutes}
              <div className="top minute">
                <span className={minuteAct} />
              </div>
              <div className="bottom"></div>
            </div>
            <div className="text">MINUTES</div>
          </div>
          <div className="container-segment">
            <div className="card">
              <div className="card-divider" />
              {seconds}
              <div className="top">
                <span className={secondAct} />
              </div>

              <div className="bottom"></div>
            </div>
            <div className="text">SECONDS</div>
          </div>
        </div>
      </div>
      <footer>
        <img id="facebook" src={facebook} alt="facebook-logo" />
        <img id="pinterest" src={pinterest} alt="pinterest-logo" />
        <img id="instagram" src={instagram} alt="instagram-logo" />
      </footer>
    </body>
  );
}
