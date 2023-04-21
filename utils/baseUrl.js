const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://18.139.115.33:5000";

export default baseUrl;
