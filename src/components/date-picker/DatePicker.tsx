import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerProps } from '../../models/Project';

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, required }) => {
    return (
        <div className="relative inline-block min-w-max">
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                dateFormat="yyyy-MM-dd"
                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="Select a start date"
                popperPlacement="bottom"
                shouldCloseOnSelect={true}
                required={required}
            />
            <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
    );
};

export default CustomDatePicker;
