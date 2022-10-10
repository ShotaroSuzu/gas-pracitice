export const main = async () => {
  console.log(getGreeting('World'));
};

export const getGreeting = (name: string) => {
  return `Hello ${name}!!`;
};
