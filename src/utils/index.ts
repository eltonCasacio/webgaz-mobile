import {formatNumber} from './formatCurrency'
import {formatDate} from './formatDate'

export type ResponseProps = {
  msg?: string;
  severity?: string;
};

export const responseMessage = ({
  msg = 'Not Implemented',
  severity = 'warning',
}: ResponseProps) => {
  return {msg, severity};
};


export {formatNumber, formatDate}