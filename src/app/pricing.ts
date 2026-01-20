export const calculatePrice = (
  region: string,
  instanceType: string,
  os: string,
  hoursPerDay: number
): number | null => {
  // Dummy pricing logic for now
  const prices: { [key: string]: { [key: string]: { [key: string]: number } } } = {
    'us-east-1': {
      't2.micro': {
        'linux': 0.0116,
        'windows': 0.0116,
      },
      't3.large': {
        'linux': 0.0832,
        'windows': 0.0832,
      },
    },
    'us-west-2': {
      't2.micro': {
        'linux': 0.0116,
        'windows': 0.0116,
      },
      't3.large': {
        'linux': 0.0832,
        'windows': 0.0832,
      },
    },
  };

  const rate = prices[region]?.[instanceType]?.[os] || 0;
  const estimatedPrice = rate * hoursPerDay * 30; // 30 days a month
  return estimatedPrice;
};
