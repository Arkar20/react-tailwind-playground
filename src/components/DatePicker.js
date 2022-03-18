import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export default function DatePicker() {
	const [value, onChange] = useState(new Date());
	// console.log(value.toString());

	return (
		<div>
			<DateTimePicker
				onChange={onChange}
				value={value}
				className="p-10"
				calendarClassName="p-2"
				clearIcon={null}
				disableClock={false}
				format="y-MM-dd h:mm:ss a"
			/>
			{value.toDateString()}
		</div>
	);
}
