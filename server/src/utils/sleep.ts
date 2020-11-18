export const sleep = async (time: number): Promise<void> => new Promise((res) => {
  setTimeout(res, time);
});
