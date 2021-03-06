import { format, parseISO } from 'date-fns';

const DATE_FORMAT = 'dd. MM. yyyy';
const DATETIME_FORMAT = 'dd. MM. yyyy HH:mm';

export const formatDate = dateOrStringDate => {
  let parsedDate = dateOrStringDate;

  if (typeof dateOrStringDate === 'string') {
    parsedDate = parseISO(dateOrStringDate);
  }
  return format(parsedDate, DATE_FORMAT);
};

export const formatDateTime = dateOrStringDate => {
  let parsedDate = dateOrStringDate;
  if (
    typeof dateOrStringDate === 'string' &&
    dateOrStringDate !== 'undefined'
  ) {
    parsedDate = parseISO(dateOrStringDate);
    return format(parsedDate, DATETIME_FORMAT);
  } else {
    return 'undefined';
  }
};
