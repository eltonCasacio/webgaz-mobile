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
