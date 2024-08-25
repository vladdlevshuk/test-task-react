export const extractErrorMessage = (error: any): string => {
  if (error && typeof error === 'object' && 'message' in error) {
    const e = error as { message?: string };
    return e.message ?? 'An unexpected error occurred';
  }
  return 'An unexpected error occurred';
};
