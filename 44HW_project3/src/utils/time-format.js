export function changeMinToHour(totalMinutes) {
    const hoursConvert = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hoursConvert > 0) {
        return `${padToTwoDigits(hoursConvert)}h ${padToTwoDigits(minutes)}m`;
    } 
    return `${padToTwoDigits(minutes)}m`;
}  

export function padToTwoDigits(num) {
    return num.toString().padStart(2, '0')
}