"use client";

import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 text-slate-900 font-bold">
                S
              </div>
              <h3 className="text-lg font-bold">SBLM Digital Campus</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Building future leaders with quality education and modern infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="/admissions" className="hover:text-white transition">Admissions</a></li>
              <li><a href="/staff-directory" className="hover:text-white transition">Staff</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/news" className="hover:text-white transition">News & Events</a></li>
              <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="/#faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 (0) 1234-567890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@sblm.edu.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Campus Road, City, State 123456</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Shri Babulal College. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
