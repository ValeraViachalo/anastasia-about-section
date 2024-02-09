export const getDate = (date) => {
  const preparedDate = new Date(date);
  
  return preparedDate.toLocaleDateString('uk-UA');
}