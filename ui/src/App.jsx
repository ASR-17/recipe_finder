import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Card from "./pages/card";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Details from "./pages/details";
import Guide from "./pages/Guide";
import Countries from "./pages/Countries";
import IngredientsPage from "./pages/IngredientsPage";
import Chatbot from "./components/Chatbot";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";   // <-- ADDED

function AppContent() {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  const hideChat = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/card/:category"
          element={
            <ProtectedRoute>
              <Card />
            </ProtectedRoute>
          }
        />

        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/countries"
          element={
            <ProtectedRoute>
              <Countries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/meal/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />

        <Route
          path="/guide/:id"
          element={
            <ProtectedRoute>
              <Guide />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ingredients"
          element={
            <ProtectedRoute>
              <IngredientsPage />
            </ProtectedRoute>
          }
        />

        {/* ⭐ NEW ABOUT PAGE ROUTE */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />

      </Routes>

      {!hideChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        >
          🤖
        </button>
      )}

      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
