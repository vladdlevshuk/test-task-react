export const extractErrorMessage = (error: any): string => {
  if (error && error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};
