import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.sass";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { FC } from "react";
import { ICalendar } from "../calendar.interface";

const RegisterCalendar: FC<ICalendar> = ({ value, onChange }) => {
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <DatePicker
            withPortal
            className={style.calendar}
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        {"<"}
                    </button>
                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                        }
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        {">"}
                    </button>
                </div>
            )}
            selected={value}
            onChange={(date: Date) => onChange(date)}
            placeholderText="Дата рождения"
        />
    );
};

export default RegisterCalendar;
