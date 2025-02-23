import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { 
  insertAdmissionSchema, 
  insertContactSchema, 
  insertCourseSchema,
  insertGallerySchema,
  insertTestimonialSchema,
  insertBlogSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Courses
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getAllCourses();
    res.json(courses);
  });

  app.post("/api/courses", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const parsed = insertCourseSchema.parse(req.body);
    const course = await storage.createCourse(parsed);
    res.status(201).json(course);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const id = parseInt(req.params.id);
    await storage.deleteCourse(id);
    res.sendStatus(200);
  });


  // Admissions
  app.post("/api/admissions", async (req, res) => {
    const parsed = insertAdmissionSchema.parse(req.body);
    const admission = await storage.createAdmission(parsed);
    res.status(201).json(admission);
  });

  app.get("/api/admissions", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const admissions = await storage.getAllAdmissions();
    res.json(admissions);
  });

  // Contacts
  app.post("/api/contacts", async (req, res) => {
    const parsed = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(parsed);
    res.status(201).json(contact);
  });

  app.get("/api/contacts", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  });

  // Gallery
  app.get("/api/gallery", async (_req, res) => {
    const gallery = await storage.getAllGalleryItems();
    res.json(gallery);
  });

  app.post("/api/gallery", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const parsed = insertGallerySchema.parse(req.body);
    const item = await storage.createGalleryItem(parsed);
    res.status(201).json(item);
  });

  app.delete("/api/gallery/:id", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const id = parseInt(req.params.id);
    await storage.deleteGalleryItem(id);
    res.sendStatus(200);
  });

  // Testimonials
  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getAllTestimonials();
    res.json(testimonials);
  });

  app.post("/api/testimonials", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const parsed = insertTestimonialSchema.parse(req.body);
    const testimonial = await storage.createTestimonial(parsed);
    res.status(201).json(testimonial);
  });

  app.delete("/api/testimonials/:id", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const id = parseInt(req.params.id);
    await storage.deleteTestimonial(id);
    res.sendStatus(200);
  });

  // Blogs
  app.get("/api/blogs", async (_req, res) => {
    const blogs = await storage.getAllBlogs();
    res.json(blogs);
  });

  app.post("/api/blogs", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const parsed = insertBlogSchema.parse(req.body);
    const blog = await storage.createBlog(parsed);
    res.status(201).json(blog);
  });

  app.delete("/api/blogs/:id", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(401);
    }
    const id = parseInt(req.params.id);
    await storage.deleteBlog(id);
    res.sendStatus(200);
  });

  const httpServer = createServer(app);
  return httpServer;
}