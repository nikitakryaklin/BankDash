export const checkResponse = async (response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    const errorMessage = await response.text();
    throw new Error("ошибка запроса " + errorMessage);
  }
};
