import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/your-hero-image.jpg"
          alt="Food banner"
          className="absolute w-full h-full object-cover opacity-60"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            Explore Recipes From Around the World
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-95">
            Discover global cuisines, share your creations, and connect with food lovers everywhere.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Recipe Explorer is your one-stop platform for exploring delicious recipes from around the world.
            Whether you're a beginner, a home cook, or a foodie looking for inspiration, we bring you easy-to-follow
            recipes, rich global cuisines, and a community to share your passion with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
            {["Smart Recipe Search","Cuisine Explorer","Food Categories","Community Recipes","Real-Time Chat","Comments System"].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Our mission is to make cooking simple and joyful for everyone. We aim to connect people through
            food, providing access to global recipes and creative inspiration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We envision a world where cooking knowledge is accessible to everyone and people explore cultures
            through food, connecting with each other in meaningful ways.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 px-6 mt-20 border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-green-600">Recipe Explorer</h2>
            <p className="mt-3 text-gray-600">
              Your trusted companion for discovering global recipes, sharing meals, and connecting through food.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Browse Recipes</li>
              <li>Upload Recipes</li>
              <li>Cuisine Explorer</li>
              <li>Find by Ingredients</li>
              <li>Community Chat</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12">
          © 2025 Recipe Explorer. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
