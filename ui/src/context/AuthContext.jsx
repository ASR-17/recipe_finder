/* src/context/AuthContext.jsx */
import { createContext, useContext, useState, useEffect } from "react";
import API from "../utils/api"; // Your axios instance (uses VITE_BACKEND_URL internally)

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Load from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  // Keep user in localStorage
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // If token removed → logout
  useEffect(() => {
    if (!token) {
      setUser(null);
      localStorage.removeItem("user");
    }
  }, [token]);

  // Fetch updated profile (e.g., after user uploads image)
  const refreshUserProfile = async () => {
    if (!token) return;
    try {
      const res = await API.get("/user/profile"); // Uses env URL
      if (res.data) {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (err) {
      console.error("❌ Failed to refresh user profile:", err.message);
    }
  };

  // -------------------------
  // SIGNUP
  // -------------------------
  const signup = async (name, username, email, password) => {
    setLoading(true);
    try {
      await API.post("/auth/signup", {
        name,
        username,
        email,
        password,
      });
    } catch (err) {
      throw new Error(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // LOGIN
  // -------------------------
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });

      const { token, user } = res.data;

      // Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update state
      setToken(token);
      setUser(user);

      return user;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // LOGOUT
  // -------------------------
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signup,
        login,
        logout,
        loading,
        refreshUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
