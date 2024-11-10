import jsonApi from "../axios/jsonApi";
import * as Sentry from "@sentry/react";

export const getJsonPlaceholder = async () => {
  try {
    const { data } = await jsonApi.get("/todos");
    return data;
  } catch (error) {
    Sentry.captureException(error);
    console.log(error);
  }
};
