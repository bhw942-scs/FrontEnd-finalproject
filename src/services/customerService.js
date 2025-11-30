const API = "https://traineeapp.azurewebsites.net/api/customers";

export const getCustomers = async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Error loading customers");
  const data = await res.json();
  return data.content; // la API retorna {content: [...]}
};
