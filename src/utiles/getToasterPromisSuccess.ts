export const getToasterPromisSuccess = (name: string) => {
  return {
    loading: 'loading...',
    success: name,
    error: (error: any) => `${error?.message || 'unknow error'}`,
  }
}
