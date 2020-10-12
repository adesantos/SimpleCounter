import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [time, setTime] = useState(0);
	const timeString = time.toString();

	useEffect(() => {
		setInterval(() => setTime(new Date().getSeconds()), 1000);
	}, []);

	return (
		<div id="clock">
			<div>
				<i className={"fas fa-clock"} />
			</div>
			<div>
				<p>0</p>
			</div>
			<div>
				<p>0</p>
			</div>
			<div>
				<p>0</p>
			</div>
			<div>
				<p>0</p>
			</div>
			<div>
				<p>{timeString.length > 1 ? timeString[0] : "0"}</p>
			</div>
			<div>
				<p>{timeString.length > 1 ? timeString[1] : timeString}</p>
			</div>
		</div>
	);
}
