export const createImageUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export const revokeImageUrl = (url: string): void => {
  URL.revokeObjectURL(url);
};