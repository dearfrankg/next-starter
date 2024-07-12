"use server";

import { auth } from "@/auth";
import { cache } from "react";

/*
    import getSession
    Only use server component like open a page
    Do not use in a server action
    We need a better explanation why we cannot use in server action
*/
export default cache(auth);

/*

    This is a test to confirm if we need caching
    expect one session request per call
    actual one session request even when multiple calls
    we may not need cache

*/
// let count = 0;
// export default async function () {
//   count++;
//   console.log("count: ", count);

//   return auth();
// }
