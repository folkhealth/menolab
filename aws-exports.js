const awsmobile = {
  // Other configurations
  API: {
    endpoints: [
      {
        name: "QAPI",
        endpoint: `${import.meta.env.VITE_API_URL}.execute-api.eu-north-1.amazonaws.com/`,
      }
    ]
  }
};

export default awsmobile;
