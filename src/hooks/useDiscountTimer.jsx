import React from "react";
import { useTimer } from "react-timer-hook";

const useDiscountTimer = (time) => {
  const discountTime = new Date(time);
  const expiryTimestamp = new Date();
  const differentDays = Math.floor(-(expiryTimestamp.getTime() - discountTime.getTime()) / 1000);

  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + differentDays);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return [seconds, minutes, hours, days];
};

export default useDiscountTimer;
