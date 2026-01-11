<img src="/logo.png" alt="CAN Financial Solutions" className="h-12 w-auto" />

import { supabase } from '../lib/supabaseClient';

export default function Home() {
  async function testConnection() {
    const { data, error } = await supabase.from('your_table').select('*').limit(1);
    console.log(data, error);
  }

  return (
    <div>
      <h1>CAN Financial Solutions</h1>
      <button onClick={testConnection}>Test Supabase</button>
    </div>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <img src="/logo.png" alt="CAN Financial Solutions Logo" className="h-12 w-auto" />
        <nav className="space-x-4 text-blue-600 font-semibold">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-700">Protecting Your Tomorrow</h1>
        <p className="mt-4 text-lg text-gray-600">Your trusted partner in financial solutions.</p>
        <a href="/internal/dashboard" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Go to Dashboard
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">About Us</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <p>
            At CAN Financial Solutions, we are committed to helping individuals and businesses achieve financial security and growth.
            Our mission is to provide personalized strategies that protect your future and maximize opportunities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-500">Financial Planning</h3>
            <p className="text-gray-600 mt-2">Plan your future with confidence and clarity.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold text-blue-500">Wealth Management</h3>
            <p className="text-gray-600 mt-2">Grow and protect your wealth with expert guidance.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold text-bluetion */}
      <section id="contact" className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600">
        © {new Date().getFullYear()} CAN Financial Solutions. All rights reserved.
      </footer>
    </div>
  );
}
