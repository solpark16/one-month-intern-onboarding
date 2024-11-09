import jsonApi from "../axios/jsonApi";

export const getJsonPlaceholder = async () => {
  try {
    const { data } = await jsonApi.get("/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
};
