import React, { useState } from "react";
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ICalendar } from "../calendar.interface";
import style from "./Calendar.module.sass";

const Caledar: FC<ICalendar> = ({ onChange, value }) => {
    return (
        <DatePicker
            selected={value}
            onChange={(date: Date) => onChange(date)}
            placeholderText="Укажите дату и время мероприятия"
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
