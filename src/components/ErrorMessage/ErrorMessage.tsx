import { ErrorMessageProps } from "../../types";

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <div>{message}</div>;
}
