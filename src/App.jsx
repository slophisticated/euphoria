import React, { useState, useEffect } from "react";
import eupk from "./assets/eupk.png";
import "./App.css";

function App() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [probability, setProbability] = useState(0);

  const START_DATE = new Date("2025-07-18T22:54:00+07:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffInMs = now - START_DATE;

      const totalSeconds = Math.floor(diffInMs / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = totalSeconds % 60;

      const maxHours = 60 * 24;
      const totalHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const prob = Math.min(
        100,
        parseFloat(((totalHours / maxHours) * 100).toFixed(2))
      );

      console.log("⏱ Hours since down:", totalHours);
      console.log("📈 Exit scam probability:", prob, "%");

      setTimer({ days, hours, minutes, seconds });
      setProbability(prob);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          flexWrap: "wrap",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <img
          src={eupk}
          alt="AWP Logo"
          width={80}
          height={80}
          style={{ width: 50, height: 50, borderRadius: 15 }}
        />
        <span style={{ margin: "0 10px", fontSize: 14 }}>
          Downtime Detector
        </span>
      </div>

      {/* Main */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          padding: 20,
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 10, textAlign: "center" }}>
          Euphoria has been down since
        </h1>

        {/* Status Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 15px",
            borderRadius: 10,
            backgroundColor: "#2C2C2C",
            boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
            marginTop: 15,
            width: "100%",
            maxWidth: 380,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={eupk}
              alt="AWP Logo"
              width={40}
              height={40}
              style={{ flexShrink: 0, borderRadius: 15 }}
            />
            <div
              style={{
                marginLeft: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "#3B3B3B",
                  color: "white",
                  fontSize: "0.75em",
                  padding: "3px 8px",
                  borderRadius: 12,
                  marginBottom: 4,
                  maxWidth: 150,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Version: 5.2 [Customer]
              </div>
              <div
                style={{
                  color: "#A0A0A0",
                  fontSize: "0.7em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Last Updated: 07/21/2025 at 23:12 PM GMT+7
              </div>
            </div>
          </div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#FF6961",
              animation: "pulseDot 2s infinite",
              marginLeft: 10,
            }}
          />
        </div>

        {/* Timer */}
        <div
          style={{
            marginTop: 20,
            width: "100%",
            maxWidth: 420,
            minWidth: 220,
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.18)",
            padding: "28px 18px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  margin: "0 5px",
                  minWidth: 60,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "2.2em",
                    fontWeight: 500,
                    height: "1.2em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "1.5em",
                    overflow: "hidden",
                  }}
                >
                  <span>
                    {String(
                      [timer.days, timer.hours, timer.minutes, timer.seconds][i]
                    ).padStart(2, "0")}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.7em",
                    marginTop: 5,
                    color: "rgb(160, 160, 160)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Exit Scam */}
          <div
            style={{
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "rgb(161, 161, 170)", fontWeight: 500 }}>
              Exit Scam Probability: {probability}%
            </span>
          </div>

          {/* Copy Button */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <button
              style={{
                background: "rgb(44, 44, 44)",
                color: "white",
                borderRadius: 8,
                padding: "7px 18px",
                fontSize: "1em",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={() => {
                navigator.clipboard.writeText(
                  `EUPHORIA has been down for: ${timer.days}d ${timer.hours}h ${timer.minutes}m ${timer.seconds}s`
                );
              }}
            >
              Copy Downtime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Pulse Dot animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulseDot {
  0% { box-shadow: 0 0 0 0 #ff696180; }
  70% { box-shadow: 0 0 0 10px #ff696100; }
  100% { box-shadow: 0 0 0 0 #ff696180; }
}`;
document.head.appendChild(style);

export default App;
