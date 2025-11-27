import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <img
          src=""
          alt="Food banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-8"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-xl">
            Explore Recipes From Around the World
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed">
            Discover global cuisines, share your creations, and connect with food lovers everywhere.
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Recipe Explorer is your one-stop platform for exploring delicious recipes from around the world.
            Whether you're a beginner, a home cook, or a foodie looking for inspiration — we deliver
            easy-to-follow recipes, global cuisines, and a community-driven space to share passion for food.
          </p>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            {[
              "Smart Recipe Search",
              "Cuisine Explorer",
              "Food Categories",
              "Community Recipes",
              "Real-Time Chat",
              "Comments System",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to make cooking simple and joyful for everyone.
            We connect people through food — offering access to global recipes,
            inspiration, and creative experiences.
          </p>
        </motion.div>

        {/* SECTION 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We envision a world where cooking knowledge is accessible to everyone.
            A place where people explore cultures through food and connect in meaningful ways.
          </p>
        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-16 px-6 mt-10 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-600">Recipe Explorer</h2>
            <p className="text-gray-600 leading-relaxed">
              Your trusted companion for discovering global recipes, sharing meals, and connecting through food.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Browse Recipes</li>
              <li>Upload Recipes</li>
              <li>Cuisine Explorer</li>
              <li>Find by Ingredients</li>
              <li>Community Chat</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Legal</h3>
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
