export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://softmaxshop.com/user";
};

export const getImgbbAPI = (): string => {
  return process.env.NEXT_PUBLIC_API_IMGBB_TOKEN as string;
};
