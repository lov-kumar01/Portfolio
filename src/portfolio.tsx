import  { useState, useEffect, useMemo } from "react";
import {

  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Code,

  Globe,

  Home,

  Briefcase,
  MessageCircle,
} from "lucide-react";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Skills data
  const skills = [
    { name: "React", category: "Frontend", level: 90, icon: "⚛️" },
    { name: "TypeScript", category: "Frontend", level: 85, icon: "🔷" },
    { name: "Node.js", category: "Backend", level: 88, icon: "🟢" },
    { name: "MongoDB", category: "Database", level: 82, icon: "🍃" },
    { name: "Express", category: "Backend", level: 86, icon: "🚂" },
    { name: "Tailwind CSS", category: "Frontend", level: 92, icon: "💨" },
    { name: "Framer Motion", category: "Animation", level: 75, icon: "🎭" },
    { name: "Next.js", category: "Framework", level: 80, icon: "▲" },
  ];

  // Projects data
  


  // Navigation items
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  // Filter projects
  

  // Handle form submission
  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  // Navigate to page
  const navigateToPage = (pageId : string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  // Animated Circle Component
  const AnimatedCircle = () => {
    return (
      <div className="relative w-80 h-80">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-30"></div>

        {/* Middle pulsing ring */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>

        {/* Inner image container */}
        <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1 animate-zoom">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
            <img
              src="image.jpg"
              alt="Profile"
              className="w-full h-full object-cover animate-zoom-reverse"
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
        <div
          className="absolute -top-4 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-4 -left-4 w-5 h-5 bg-pink-400 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute -bottom-2 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "0.5s" }}></div>
      </div>
    );
  };

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      {/* Left Side - Animated Circle */}
      <div className="hidden lg:flex items-center justify-center w-1/2">
        <AnimatedCircle />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
              Lav Kumar
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2
              className="text-2xl md:text-4xl font-semibold text-gray-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              Full Stack Developer
            </h2>
          </div>
          <div className="overflow-hidden">
            <p
              className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}>
              Passionate about creating modern web applications with React,
              TypeScript, and the MERN stack. I love turning ideas into
              beautiful, functional digital experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => navigateToPage("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button
              onClick={() => navigateToPage("contact")}
              className="border-2 border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/lav-kumar-890565241/"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Linkedin size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Animated Circle */}
      <div className="lg:hidden flex justify-center mt-12 mb-8">
        <div className="scale-75">
          <AnimatedCircle />
        </div>
      </div>
    </div>
  );

  // Skills Page Component
  const SkillsPage = () => (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My expertise spans across modern web development technologies, from
            frontend frameworks to backend systems.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {["Frontend", "Backend", "Database", "Tools"].map((category) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8 text-blue-400">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills
                  .filter(
                    (skill) =>
                      (category === "Frontend" &&
                        ["React", "TypeScript", "Tailwind CSS"].includes(
                          skill.name
                        )) ||
                      (category === "Backend" &&
                        ["Node.js", "Express"].includes(skill.name)) ||
                      (category === "Database" && skill.name === "MongoDB") ||
                      (category === "Tools" &&
                        ["Framer Motion", "Next.js"].includes(skill.name))
                  )
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="text-4xl mb-4 text-center">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 text-center">
                        {skill.category}
                      </p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 animate-width-expand"
                          style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        {skill.level}%
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
              <div>Git & GitHub</div>
              <div>RESTful APIs</div>
              <div>Responsive Design</div>
              <div>Testing</div>
              <div>CI/CD</div>
              <div>Docker</div>
              <div>AWS</div>
              <div>GraphQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Projects Page Component

  const ProjectsPage = () => {
    type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: 'Full Stack' | 'Frontend' | 'Data Visualization';
};
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

   
    const allProjects: Project[] = useMemo(() => [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        github: "#",
        demo: "#",
        category: "Full Stack",
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "Real-time collaborative task management with drag-and-drop functionality and team collaboration.",
        tech: ["React", "TypeScript", "Socket.io", "Node.js"],
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        github: "#",
        demo: "#",
        category: "Frontend",
      },
      {
        id: 3,
        title: "Weather Analytics Dashboard",
        description:
          "Data visualization dashboard with real-time weather data and predictive analytics.",
        tech: ["React", "D3.js", "Node.js", "MongoDB"],
        image:
          "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        github: "#",
        demo: "#",
        category: "Data Visualization",
      },
      {
        id: 4,
        title: "Social Media App",
        description:
          "Full-featured social media platform with real-time messaging and content sharing.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        github: "#",
        demo: "#",
        category: "Full Stack",
      },
    ], []);

    const filterProjects = (filter: string) => {
      setActiveFilter(filter);
      if (filter === "All") {
        setFilteredProjects(allProjects);
      } else {
        setFilteredProjects(
          allProjects.filter((project) => project.category === filter)
        );
      }
    };

    useEffect(() => {
      // Initialize filteredProjects
      setFilteredProjects(allProjects);
    }, [allProjects]);

    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              A showcase of my recent work and contributions to various projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["All", "Full Stack", "Frontend", "Data Visualization"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => filterProjects(filter)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}>
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300">
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">
                Get In Touch
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">lovk3050@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 7250751927</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-300">Gurugram ,Haryana/ Patna,Bihar</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Send a Message
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or just say hello!"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"></textarea>
              </div>
              <button
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lav Kumar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => navigateToPage(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        currentPage === item.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}>
                      <IconComponent size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors duration-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.id)}
                    className={`flex items-center gap-3 w-full px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}>
                    <IconComponent size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="transition-all duration-500 ease-in-out animate-spin-slow animate-zoom animate-zoom-reverse animate-fade-in-up ">
        {currentPage === "home" && <HomePage />}
        {currentPage === "skills" && <SkillsPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "contact" && <ContactPage />}
      </div>

     
    </div>
  );
}

export default Portfolio;
