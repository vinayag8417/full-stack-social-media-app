let BASE_URL = "https://full-stack-social-media-app-q1f4.onrender.com/";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
