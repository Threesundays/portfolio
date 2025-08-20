"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function TopProgress() {
  return (
 <ProgressBar height="6px" color="red" options={{ showSpinner: true }} />

  );
}
