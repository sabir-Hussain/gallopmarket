const env = {
  appwrite: {
    endPoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT),
    apiKey: String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY),
  },
};

export default env;
