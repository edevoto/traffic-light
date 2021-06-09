import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [selectedColor, setColor] = useState("false");

	return (
		<div className="container mt-5 d-flex flex-column text-center">
			<div className="palito container-fluid p-1 text-center"></div>
			<div className="container-fluid cajaLuces text-center d-flex flex-column">
				<div
					onClick={() => setColor("cajaLuces_rojo")}
					className={
						"cajaLuces_rojo bg-danger p-5 my-4 rounded-circle" +
						(selectedColor === "cajaLuces_rojo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("cajaLuces_amarillo")}
					className={
						"cajaLuces_amarillo bg-warning p-5 m-1 rounded-circle" +
						(selectedColor === "cajaLuces_amarillo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("cajaLuces_verde")}
					className={
						"cajaLuces_verde bg-success p-5 mt-4 rounded-circle" +
						(selectedColor === "cajaLuces_verde" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
}
