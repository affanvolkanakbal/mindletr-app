export const generateRandomUsername = (): string => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  return `Mindler ${randomNumber}`;
};

export const getOrCreateUsername = (): string => {
  let username = localStorage.getItem('mindle_username');
  if (!username) {
    username = generateRandomUsername();
    localStorage.setItem('mindle_username', username);
  }
  return username;
};