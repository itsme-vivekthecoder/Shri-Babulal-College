"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  category: "announcement" | "achievement" | "event" | "research";
  featured?: boolean;
}

interface EventItem {
  id: number;
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  capacity: number;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2026-01-15",
    title: "Campus Achieves Top Rankings in National Education Survey",
    description: "Shri Babulal College ranked among top 50 colleges in India for academic excellence and innovation.",
    image: "📊",
    category: "achievement",
    featured: true,
  },
  {
    id: 2,
    date: "2026-01-10",
    title: "New AI & Machine Learning Lab Inaugurated",
    description: "State-of-the-art AI lab with industry partnerships provides hands-on experience to students.",
    image: "🤖",
    category: "announcement",
    featured: true,
  },
  {
    id: 3,
    date: "2026-01-08",
    title: "Student Research Paper Published in International Journal",
    description: "Three students' research on sustainable energy solutions published in Nature Science Journal.",
    image: "📝",
    category: "research",
  },
  {
    id: 4,
    date: "2026-01-05",
    title: "Annual Sports Festival: Sports Day 2026",
    description: "Celebrating athletic excellence with various sporting events and competitions across the campus.",
    image: "🏆",
    category: "event",
  },
  {
    id: 5,
    date: "2025-12-28",
    title: "Placement Drive: 200+ Students Recruited",
    description: "Successful placement drive with top companies recruiting for various technical and management roles.",
    image: "💼",
    category: "achievement",
  },
  {
    id: 6,
    date: "2025-12-20",
    title: "Winter Break Internship Opportunities Announced",
    description: "Exciting internship opportunities with leading companies for undergraduate and postgraduate students.",
    image: "📚",
    category: "announcement",
  },
  {
    id: 7,
    date: "2025-12-15",
    title: "Student Wins National Essay Competition",
    description: "Congratulations to Aria Sharma for winning the National Essay Writing Championship 2026.",
    image: "🎉",
    category: "achievement",
  },
  {
    id: 8,
    date: "2025-12-10",
    title: "Green Campus Initiative Launched",
    description: "Commitment to sustainability with solar panels, rainwater harvesting, and waste management systems.",
    image: "🌱",
    category: "announcement",
  },
];

const events: EventItem[] = [
  {
    id: 1,
    date: "2026-02-05",
    time: "10:00 AM - 5:00 PM",
    title: "Science Fair & Exhibition 2026",
    location: "Main Campus - Exhibition Hall",
    description: "Students showcase innovative science projects and research work. Open to public.",
    image: "🔬",
    capacity: 500,
    category: "Academic",
  },
  {
    id: 2,
    date: "2026-02-10",
    time: "6:00 PM - 8:30 PM",
    title: "Annual Cultural Fest - Kaleidoscope",
    location: "Open Air Auditorium",
    description: "Celebrate Indian and international cultures with performances, dance, music, and cultural displays.",
    image: "🎭",
    capacity: 2000,
    category: "Cultural",
  },
  {
    id: 3,
    date: "2026-02-15",
    time: "9:00 AM - 12:00 PM",
    title: "Career Guidance Seminar",
    location: "Auditorium A",
    description: "Industry experts discuss career opportunities and skill development in 2026.",
    image: "💼",
    capacity: 300,
    category: "Career",
  },
  {
    id: 4,
    date: "2026-02-20",
    time: "7:00 PM - 10:00 PM",
    title: "Inter-College Sports Competition",
    location: "Sports Complex",
    description: "Friendly competition with 5 neighboring colleges in cricket, basketball, and badminton.",
    image: "⚽",
    capacity: 1000,
    category: "Sports",
  },
  {
    id: 5,
    date: "2026-03-01",
    time: "10:00 AM - 2:00 PM",
    title: "Entrepreneurship Workshop",
    location: "Innovation Center",
    description: "Learn from successful entrepreneurs about startup fundamentals and business planning.",
    image: "🚀",
    capacity: 150,
    category: "Workshop",
  },
  {
    id: 6,
    date: "2026-03-10",
    time: "3:00 PM - 5:00 PM",
    title: "Tech Talk: AI in Education",
    location: "Tech Hub - Conference Room",
    description: "Industry speaker discusses the future of AI and its impact on education.",
    image: "🤖",
    capacity: 200,
    category: "Seminar",
  },
];

export default function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"news" | "events">("news");

  const categories = [
    { value: "all", label: "All News" },
    { value: "announcement", label: "Announcements" },
    { value: "achievement", label: "Achievements" },
    { value: "event", label: "Events" },
    { value: "research", label: "Research" },
  ];

  const eventCategories = ["All Events", "Academic", "Cultural", "Career", "Sports", "Workshop", "Seminar"];

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.filter((item) => item.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <Calendar className="inline-block w-12 h-12 mr-4 text-yellow-400" />
            News & Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Stay updated with the latest news, events, and announcements from our campus.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white sticky top-20 z-40 py-6 shadow-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-4 border-b border-slate-200">
            {(["news", "events"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition border-b-2 ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-slate-600 border-transparent hover:text-slate-900"
                }`}
              >
                {tab === "news" ? "📰 News" : "📅 Events"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Tab */}
      {activeTab === "news" && (
        <>
          {/* Featured News */}
          {featuredNews.length > 0 && (
            <section className="bg-slate-50 py-12">
              <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-bold text-slate-950 mb-8">Featured</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredNews.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition hover:-translate-y-1 group"
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-7xl group-hover:scale-110 transition">
                        {item.image}
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-sm text-slate-500">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{item.description}</p>
                        <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                          Read More <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* News Filter & Search */}
          <section className="bg-white py-8 border-b border-slate-200">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search news..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-full font-semibold transition ${
                        selectedCategory === category.value
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* News Grid */}
          <section className="bg-slate-50 py-12">
            <div className="mx-auto max-w-6xl px-6">
              <p className="text-slate-600 font-semibold mb-8">
                Showing {filteredNews.length} news items
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition hover:-translate-y-1 group"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-5xl group-hover:scale-110 transition">
                      {item.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                        {item.description}
                      </p>
                      <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition">
                        Read More <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-600">No news found in this category.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <>
          {/* Upcoming Events */}
          <section className="bg-slate-50 py-12">
            <div className="mx-auto max-w-6xl px-6">
              <p className="text-slate-600 font-semibold mb-8">
                {events.length} Upcoming Events
              </p>

              <div className="space-y-6">
                {events.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg transition hover:-translate-y-1 flex flex-col md:flex-row"
                  >
                    {/* Image */}
                    <div className="w-full md:w-48 h-48 md:h-auto bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl flex-shrink-0">
                      {event.image}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
                          <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Calendar className="h-5 w-5" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Clock className="h-5 w-5" />
                            {event.time}
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                            {event.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-950 mb-2">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-600 mb-3">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>

                        <p className="text-slate-600 mb-4">{event.description}</p>

                        <p className="text-sm text-slate-500">
                          Capacity: {event.capacity} attendees
                        </p>
                      </div>

                      <button className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                        Register Event
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Any Updates!
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter for latest news, events, and announcements.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-950 focus:outline-none"
            />
            <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-slate-950 hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
