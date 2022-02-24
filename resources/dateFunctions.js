export const calcDateValue = (month, day, year) => {
    let monthValue;
    switch (month) {
        case 2:
            monthValue = 31 * 1440;
            break;
        case 3:
            monthValue = 59 * 1440;
            break;
        case 4:
            monthValue = 90 * 1440;
            break;
        case 5:
            monthValue = 120 * 1440;
            break;
        case 6:
            monthValue = 151 * 1440;
            break;
        case 7:
            monthValue = 181 * 1440;
            break;
        case 8:
            monthValue = 212 * 1440;
            break;
        case 9:
            monthValue = 242 * 1440;
            break;
        case 10:
            monthValue = 273 * 1440;
            break;
        case 11:
            monthValue = 303 * 1440;
            break;
        case 12:
            monthValue = 334 * 1440;
            break;
        default:
            monthValue = 0;
            break;
    }
    let dayValue;
    if (day > 1) {
        dayValue = (day - 1) * 1440;
    } else {
        dayValue = 0;
    }
    let yearValue = year * 1440 * 365;
    const leapYears = Math.floor(year / 4);
    yearValue += leapYears * 1440;
    return monthValue + dayValue + yearValue;
}

export const calcDueDateValue = (dueMonth, dueDay, dueYear) => {
    let dueMonthValue;
    switch (dueMonth) {
        case 2:
            dueMonthValue = 31 * 1440;
            break;
        case 3:
            dueMonthValue = 59 * 1440;
            break;
        case 4:
            dueMonthValue = 90 * 1440;
            break;
        case 5:
            dueMonthValue = 120 * 1440;
            break;
        case 6:
            dueMonthValue = 151 * 1440;
            break;
        case 7:
            dueMonthValue = 181 * 1440;
            break;
        case 8:
            dueMonthValue = 212 * 1440;
            break;
        case 9:
            dueMonthValue = 242 * 1440;
            break;
        case 10:
            dueMonthValue = 273 * 1440;
            break;
        case 11:
            dueMonthValue = 303 * 1440;
            break;
        case 12:
            dueMonthValue = 334 * 1440;
            break;
        default:
            dueMonthValue = 0;
            break;
    }
    let dueDayValue;
    if (dueDay > 1) {
        dueDayValue = (dueDay - 1) * 1440;
    } else {
        dueDayValue = 0;
    }
    let dueYearValue = dueYear * 1440 * 365;
    const dueLeapYears = Math.floor(dueYear / 4);
    dueYearValue += dueLeapYears * 1440;
    return dueMonthValue + dueDayValue + dueYearValue;
}

export const addDaySuffix = (selectedDay) => {
    switch (selectedDay) {
        case 1:
        case 21:
        case 31:
            selectedDay = selectedDay + 'st';
            break;
        case 2:
        case 22:
            selectedDay = selectedDay + 'nd';
            break;
        case 3:
        case 23:
            selectedDay = selectedDay + 'rd';
            break;
        default:
            selectedDay = selectedDay + 'th';
            break;
    }
    return selectedDay;
}