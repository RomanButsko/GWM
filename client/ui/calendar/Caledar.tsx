import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.sass";

const Caledar = () => {
    const [valueDate, setDate] = useState<Date>(new Date());
    return (
        <DatePicker
            selected={valueDate}
            onChange={(date: Date) => setDate(date)}
            placeholderText="Укажите дату мероприятия"
            minDate={new Date()}
            showDisabledMonthNavigation
            showTimeInput
            timeInputLabel="Время:"
            withPortal
            dateFormat="MMMM d, yyyy h:mm aa"
            className={style.calendar}
        />
    );
};

export default Caledar;
