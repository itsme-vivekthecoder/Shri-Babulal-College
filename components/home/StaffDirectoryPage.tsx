"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Mail, Phone, MapPin, Award, Filter, ChevronDown } from "lucide-react";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  department: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
  office: string;
  qualifications: string[];
  experience: string;
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Principal",
    department: "Administration",
    specialization: "Computer Science & Education",
    email: "rajesh.sharma@sblm.edu.in",
    phone: "+91 98765-43210",
    image: "🎓",
    office: "Principal's Office, 1st Floor",
    qualifications: ["Ph.D. Computer Science", "M.Tech", "B.Tech"],
    experience: "25 years in education",
  },
  {
    id: 2,
    name: "Prof. Anjali Verma",
    role: "Vice Principal - Academics",
    department: "Academic Affairs",
    specialization: "Mathematics & Curriculum Design",
    email: "anjali.verma@sblm.edu.in",
    phone: "+91 98765-43211",
    image: "👨‍🏫",
    office: "Academic Office, 1st Floor",
    qualifications: ["M.Phil Mathematics", "M.Sc", "B.Sc"],
    experience: "20 years in academics",
  },
  {
    id: 3,
    name: "Dr. Vikram Singh",
    role: "Dean - Research & Development",
    department: "Research",
    specialization: "Physics & Innovation",
    email: "vikram.singh@sblm.edu.in",
    phone: "+91 98765-43212",
    image: "👩‍🏫",
    office: "Research Center, 2nd Floor",
    qualifications: ["Ph.D. Physics", "M.Sc", "B.Sc"],
    experience: "18 years in research",
  },
  {
    id: 4,
    name: "Ms. Priya Sharma",
    role: "Director - Student Affairs",
    department: "Student Services",
    specialization: "Student Development & Counseling",
    email: "priya.sharma@sblm.edu.in",
    phone: "+91 98765-43213",
    image: "👩‍💼",
    office: "Student Center, Ground Floor",
    qualifications: ["M.A Psychology", "B.A"],
    experience: "15 years in student services",
  },
  {
    id: 5,
    name: "Prof. Arjun Patel",
    role: "Head - Computer Science",
    department: "Computer Science",
    specialization: "Software Engineering & AI",
    email: "arjun.patel@sblm.edu.in",
    phone: "+91 98765-43214",
    image: "💻",
    office: "CS Department, 3rd Floor",
    qualifications: ["Ph.D. Computer Science", "M.Tech", "B.Tech"],
    experience: "16 years in CS education",
  },
  {
    id: 6,
    name: "Dr. Neha Gupta",
    role: "Head - Science",
    department: "Science",
    specialization: "Chemistry & Environmental Science",
    email: "neha.gupta@sblm.edu.in",
    phone: "+91 98765-43215",
    image: "🧪",
    office: "Science Lab, 4th Floor",
    qualifications: ["Ph.D. Chemistry", "M.Sc", "B.Sc"],
    experience: "14 years in science",
  },
  {
    id: 7,
    name: "Prof. Rohit Desai",
    role: "Head - Commerce & Business",
    department: "Commerce",
    specialization: "Finance & Accounting",
    email: "rohit.desai@sblm.edu.in",
    phone: "+91 98765-43216",
    image: "📊",
    office: "Commerce Department, 3rd Floor",
    qualifications: ["M.Com", "B.Com", "CA"],
    experience: "17 years in commerce",
  },
  {
    id: 8,
    name: "Dr. Meera Singh",
    role: "Head - Humanities",
    department: "Humanities",
    specialization: "English Literature & Languages",
    email: "meera.singh@sblm.edu.in",
    phone: "+91 98765-43217",
    image: "📚",
    office: "Humanities Block, 2nd Floor",
    qualifications: ["Ph.D. English", "M.A", "B.A"],
    experience: "19 years in humanities",
  },
  {
    id: 9,
    name: "Mr. Sanjay Kumar",
    role: "Registrar",
    department: "Administration",
    specialization: "Administrative Management",
    email: "sanjay.kumar@sblm.edu.in",
    phone: "+91 98765-43218",
    image: "🗂️",
    office: "Registrar's Office, 1st Floor",
    qualifications: ["M.A Public Administration"],
    experience: "12 years in administration",
  },
  {
    id: 10,
    name: "Dr. Aisha Khan",
    role: "Librarian",
    department: "Library & Information Services",
    specialization: "Library Science & Digital Resources",
    email: "aisha.khan@sblm.edu.in",
    phone: "+91 98765-43219",
    image: "📖",
    office: "Central Library, Ground Floor",
    qualifications: ["M.Lib Sc", "B.Lib Sc"],
    experience: "13 years in library services",
  },
  {
    id: 11,
    name: "Prof. Ravi Patel",
    role: "Placement Officer",
    department: "Placement & Career Services",
    specialization: "Placement & HR",
    email: "ravi.patel@sblm.edu.in",
    phone: "+91 98765-43220",
    image: "💼",
    office: "Career Center, Ground Floor",
    qualifications: ["M.B.A HR", "B.Tech"],
    experience: "10 years in placement",
  },
  {
    id: 12,
    name: "Ms. Divya Sharma",
    role: "Sports Director",
    department: "Sports & Athletics",
    specialization: "Physical Education & Sports Management",
    email: "divya.sharma@sblm.edu.in",
    phone: "+91 98765-43221",
    image: "⚽",
    office: "Sports Complex, Outdoor",
    qualifications: ["M.Sc Sports Science", "B.Sc PE"],
    experience: "11 years in sports",
  },
];

const departments = ["All", ...Array.from(new Set(staffMembers.map((s) => s.department)))];

export default function StaffDirectoryPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");
  const [isDepartmentDropdown, setIsDepartmentDropdown] = React.useState(false);
  const [selectedStaff, setSelectedStaff] = React.useState<StaffMember | null>(null);

  const filteredStaff = staffMembers.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" || staff.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

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
            Staff Directory
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Meet our dedicated faculty and administrative staff committed to your success.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-white sticky top-20 z-40 py-6 shadow-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Box */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, role, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none"
              />
            </div>

            {/* Department Filter */}
            <div className="relative w-full md:w-48">
              <button
                onClick={() => setIsDepartmentDropdown(!isDepartmentDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg border border-slate-300 bg-white hover:border-blue-600 transition"
              >
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedDepartment}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition ${isDepartmentDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {isDepartmentDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-12 left-0 right-0 bg-white border border-slate-300 rounded-lg shadow-lg z-50"
                >
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => {
                        setSelectedDepartment(dept);
                        setIsDepartmentDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-50 transition ${
                        selectedDepartment === dept
                          ? "bg-blue-100 text-blue-700 font-semibold"
                          : ""
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            Found {filteredStaff.length} staff member{filteredStaff.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((staff, idx) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedStaff(staff)}
                className="rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer group"
              >
                {/* Avatar */}
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {staff.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 mb-1 group-hover:text-blue-600 transition">
                    {staff.name}
                  </h3>

                  <p className="text-blue-600 font-semibold text-sm mb-1">{staff.role}</p>

                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-4">
                    {staff.department}
                  </p>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {staff.specialization}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <a
                      href={`mailto:${staff.email}`}
                      className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 transition"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span className="truncate">{staff.email}</span>
                    </a>
                    <a
                      href={`tel:${staff.phone}`}
                      className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 transition"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {staff.phone}
                    </a>
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                      <span>{staff.office}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200 transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                No staff members found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedStaff(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-8xl sticky top-0">
              {selectedStaff.image}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-950 mb-2">
                    {selectedStaff.name}
                  </h2>
                  <p className="text-lg text-blue-600 font-semibold mb-1">
                    {selectedStaff.role}
                  </p>
                  <p className="text-slate-600">{selectedStaff.department}</p>
                </div>
                <button
                  onClick={() => setSelectedStaff(null)}
                  className="text-slate-500 hover:text-slate-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${selectedStaff.email}`}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                      {selectedStaff.email}
                    </a>
                    <a
                      href={`tel:${selectedStaff.phone}`}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5 text-blue-600" />
                      {selectedStaff.phone}
                    </a>
                    <div className="flex items-start gap-3 text-slate-700">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      {selectedStaff.office}
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Specialization
                  </h3>
                  <p className="text-slate-600">{selectedStaff.specialization}</p>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Qualifications
                  </h3>
                  <ul className="space-y-2">
                    {selectedStaff.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Experience</h3>
                  <p className="text-slate-600">{selectedStaff.experience}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedStaff(null)}
                className="w-full mt-8 px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Contact Section */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-950 mb-4">Can't find who you're looking for?</h2>
          <p className="text-slate-600 mb-6">
            Contact our main office and we'll help you connect with the right person.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Contact Main Office
          </button>
        </div>
      </section>
    </main>
  );
}
