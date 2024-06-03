import React, { useState } from "react";

// create your first component
export function Home() {
    const [selectedColor, setSelectedColor] = useState("yellow");

    return (
        <div className="container">
            <div className="traffic-light">
                <div
                    onClick={() => setSelectedColor("green")}
                    className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
                <div
                    onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
                <div
                    onClick={() => setSelectedColor("red")}
                    className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
            </div>
            <div className="asta">

            </div>
            <div className="base">

            </div>

        </div>

    );
}

export default Home;
