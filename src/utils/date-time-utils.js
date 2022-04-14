import moment from 'moment';

export const paymentDateFormatted = date => moment(date).format('MMM d');
