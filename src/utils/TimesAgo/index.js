export default function TimesAgo(date){
    const currentDate = new Date();
    const updatedDate = new Date(date);

    const parseYear = currentDate.getFullYear() - updatedDate.getFullYear();
    if(parseYear === 1){
        return `${parseYear}year ago`
    }

    const parseMonth = currentDate.getMonth() - updatedDate.getMonth();
    if(parseMonth >= 1 && parseMonth < 12){
        return `${parseMonth}month ago`
    }

    const parseDate = currentDate.getDate() - updatedDate.getDate();
    if(parseDate >= 1 && parseDate < 31){
        return `${parseDate}day${parseDate > 1 ? "s" : ""} ago`;
    }

    const parseHour = currentDate.getHours() - updatedDate.getHours();
    if(parseHour >= 1 && parseHour < 24){
        return `${parseHour}h ago`;
    }

    const parseMin = Math.abs(currentDate.getMinutes() - updatedDate.getMinutes());
    if(parseMin >= 1 && parseMin < 60){
        return `${parseMin}mn ago`;
    }

    return `now`;
}