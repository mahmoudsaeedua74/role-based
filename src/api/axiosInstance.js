import axios from "axios";

// This file creates a custom axios instance and handles mock API behavior.
// It intercepts requests to /login and returns fake user data based on input.

const mockUsers = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    permissions: ["view_users", "view_reports", "view_settings"],
  },
  {
    email: "manager@example.com",
    password: "manager123",
    role: "manager",
    permissions: ["view_reports", "view_team"],
  },
  {
    email: "employee@example.com",
    password: "employee123",
    role: "employee",
    permissions: ["view_profile", "view_tasks"],
  },
];

// Create the axios instance
const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to mock /login endpoint
axiosInstance.interceptors.request.use((config) => {
  if (config.url === "/login" && config.method === "post") {
    const { email, password } = config.data;

    // Find user with matching credentials
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    // Simulate network delay and response
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          // Simulate successful response
          resolve({
            ...config,
            adapter: () =>
              Promise.resolve({
                data: {
                  id: 1,
                  name: user.email.split("@")[0],
                  role: user.role,
                  permissions: user.permissions,
                },
                status: 200,
                statusText: "OK",
                headers: {},
                config,
              }),
          });
        } else {
          // Simulate error response
          reject({
            response: {
              status: 401,
              data: { message: "This user not exist" },
            },
          });
        }
      }, 1000);
    });
  }

  return config;
});

export default axiosInstance;
