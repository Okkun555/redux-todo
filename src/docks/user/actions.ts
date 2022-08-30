import { createAction } from "@reduxjs/toolkit";

const FEATURE = "user";
export const added = createAction<string>(`${FEATURE}/added`);
