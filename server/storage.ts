import { IStorage } from "./storage";
import createMemoryStore from "memorystore";
import session from "express-session";
import {
  User,
  Course,
  Admission,
  Contact,
  Gallery,
  Blog,
  Testimonial,
  InsertUser,
  InsertCourse,
  InsertAdmission,
  InsertContact,
  InsertGallery,
  InsertBlog,
  InsertTestimonial,
} from "@shared/schema";

const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private admissions: Map<number, Admission>;
  private contacts: Map<number, Contact>;
  private gallery: Map<number, Gallery>;
  private blogs: Map<number, Blog>;
  private testimonials: Map<number, Testimonial>;
  sessionStore: session.Store;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.admissions = new Map();
    this.contacts = new Map();
    this.gallery = new Map();
    this.blogs = new Map();
    this.testimonials = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });

    // Initialize with default courses
    this.initializeCourses();
  }

  private initializeCourses() {
    const defaultCourses: InsertCourse[] = [
      {
        title: "CABA-MDTP",
        duration: "1 Year",
        description: "Computer Applications & Business Accounting with Modern Desktop Publishing - A comprehensive course covering office applications, accounting software, and desktop publishing tools.",
        syllabus: "Module 1: Computer Fundamentals & MS Office\n- Windows OS & Internet basics\n- MS Word, Excel, PowerPoint\n- MS Access Database\n\nModule 2: Business Accounting\n- Tally Prime\n- GST fundamentals\n- Financial accounting basics\n\nModule 3: Desktop Publishing\n- Adobe Photoshop\n- CorelDraw\n- PageMaker\n\nModule 4: Project Work & Practical Training",
      },
      {
        title: "Web Development",
        duration: "6 Months",
        description: "Master modern web development technologies and build responsive websites from scratch.",
        syllabus: "Module 1: Frontend Basics\n- HTML5 & CSS3\n- JavaScript fundamentals\n- Bootstrap framework\n\nModule 2: Advanced Frontend\n- React.js\n- State management\n- API integration\n\nModule 3: Backend Development\n- Node.js & Express\n- MongoDB database\n- REST API development\n\nModule 4: Project & Deployment",
      },
      {
        title: "Python Programming",
        duration: "4 Months",
        description: "Learn Python programming language for software development, data analysis, and automation.",
        syllabus: "Module 1: Python Basics\n- Syntax & data types\n- Control structures\n- Functions & modules\n\nModule 2: Advanced Python\n- OOP concepts\n- File handling\n- Exception handling\n\nModule 3: Libraries & Frameworks\n- NumPy & Pandas\n- Django basics\n- API development\n\nModule 4: Projects",
      },
      {
        title: "Digital Marketing",
        duration: "3 Months",
        description: "Learn digital marketing strategies and tools to promote businesses online effectively.",
        syllabus: "Module 1: Digital Marketing Fundamentals\n- SEO basics\n- Content marketing\n- Email marketing\n\nModule 2: Social Media\n- Facebook & Instagram marketing\n- LinkedIn marketing\n- Social media analytics\n\nModule 3: Paid Marketing\n- Google Ads\n- Facebook Ads\n- Analytics & reporting",
      },
      {
        title: "Graphic Design",
        duration: "4 Months",
        description: "Master graphic design tools and principles for print and digital media.",
        syllabus: "Module 1: Design Basics\n- Color theory\n- Typography\n- Layout design\n\nModule 2: Tools\n- Adobe Photoshop\n- Illustrator\n- InDesign\n\nModule 3: Projects\n- Logo design\n- Branding materials\n- Social media graphics",
      }
    ];

    defaultCourses.forEach(course => this.createCourse(course));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Course methods
  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const id = this.currentId++;
    const newCourse: Course = { ...course, id };
    this.courses.set(id, newCourse);
    return newCourse;
  }

  async deleteCourse(id: number): Promise<void> {
    this.courses.delete(id);
  }

  // Admission methods
  async createAdmission(admission: InsertAdmission): Promise<Admission> {
    const id = this.currentId++;
    const newAdmission: Admission = {
      ...admission,
      id,
      createdAt: new Date(),
      status: "pending",
    };
    this.admissions.set(id, newAdmission);
    return newAdmission;
  }

  async getAllAdmissions(): Promise<Admission[]> {
    return Array.from(this.admissions.values());
  }

  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const newContact: Contact = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Gallery methods
  async createGalleryItem(item: InsertGallery): Promise<Gallery> {
    const id = this.currentId++;
    const newItem: Gallery = { ...item, id };
    this.gallery.set(id, newItem);
    return newItem;
  }

  async getAllGalleryItems(): Promise<Gallery[]> {
    return Array.from(this.gallery.values());
  }

  async deleteGalleryItem(id: number): Promise<void> {
    this.gallery.delete(id);
  }

  // Blog methods
  async createBlog(blog: InsertBlog): Promise<Blog> {
    const id = this.currentId++;
    const newBlog: Blog = {
      ...blog,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogs.set(id, newBlog);
    return newBlog;
  }

  async getAllBlogs(): Promise<Blog[]> {
    return Array.from(this.blogs.values());
  }

  async deleteBlog(id: number): Promise<void> {
    this.blogs.delete(id);
  }

  // Testimonial methods
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId++;
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async deleteTestimonial(id: number): Promise<void> {
    this.testimonials.delete(id);
  }
}

export const storage = new MemStorage();