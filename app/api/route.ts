import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse(
    JSON.stringify({ now: new Date().getTime().toString() }),
  );
};
