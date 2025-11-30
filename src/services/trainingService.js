const API = "https://traineeapp.azurewebsites.net/api/trainings";

export const getTrainings = async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Error loading trainings");
  const data = await res.json();
  return data.content;
};
