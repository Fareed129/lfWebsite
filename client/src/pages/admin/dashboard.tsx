import { useQuery, useMutation } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Admission,
  Contact,
  Course,
  Gallery,
  Blog,
  insertCourseSchema,
  insertGallerySchema,
  insertTestimonialSchema,
  insertBlogSchema,
  InsertCourse,
  InsertGallery,
  InsertTestimonial,
  InsertBlog,
} from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { toast } = useToast();

  // Queries
  const { data: admissions } = useQuery<Admission[]>({
    queryKey: ["/api/admissions"],
  });

  const { data: contacts } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
  });

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const { data: gallery } = useQuery<Gallery[]>({
    queryKey: ["/api/gallery"],
  });

  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const { data: blogs } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
  });

  // Forms
  const courseForm = useForm({
    resolver: zodResolver(insertCourseSchema),
    defaultValues: {
      title: "",
      duration: "",
      description: "",
      syllabus: "",
    },
  });

  const galleryForm = useForm({
    resolver: zodResolver(insertGallerySchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      category: "",
    },
  });

  const testimonialForm = useForm({
    resolver: zodResolver(insertTestimonialSchema),
    defaultValues: {
      name: "",
      text: "",
      role: "",
      imageUrl: "",
    },
  });

  const blogForm = useForm({
    resolver: zodResolver(insertBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
      author: "",
    },
  });

  // Mutations
  const courseMutation = useMutation<Course, Error, InsertCourse>({
    mutationFn: async (data: InsertCourse) => {
      const res = await apiRequest("POST", "/api/courses", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/courses"] });
      courseForm.reset();
      toast({
        title: "Success",
        description: "Course added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const galleryMutation = useMutation<Gallery, Error, InsertGallery>({
    mutationFn: async (data: InsertGallery) => {
      const res = await apiRequest("POST", "/api/gallery", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/gallery"] });
      galleryForm.reset();
      toast({
        title: "Success",
        description: "Gallery item added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const testimonialMutation = useMutation<Testimonial, Error, InsertTestimonial>({
    mutationFn: async (data: InsertTestimonial) => {
      const res = await apiRequest("POST", "/api/testimonials", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      testimonialForm.reset();
      toast({
        title: "Success",
        description: "Testimonial added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const blogMutation = useMutation<Blog, Error, InsertBlog>({
    mutationFn: async (data: InsertBlog) => {
      const res = await apiRequest("POST", "/api/blogs", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      blogForm.reset();
      toast({
        title: "Success",
        description: "Blog post added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Add delete mutations
  const deleteCoursesMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/courses/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/courses"] });
      toast({
        title: "Success",
        description: "Course deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteGalleryMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/gallery/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/gallery"] });
      toast({
        title: "Success",
        description: "Gallery item deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/testimonials/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({
        title: "Success",
        description: "Testimonial deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/blogs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage courses, admissions, gallery, testimonials, and more
          </p>
        </motion.div>

        <Tabs defaultValue="admissions">
          <TabsList className="mb-4">
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="contacts">Contact Inquiries</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>

          {/* Admissions Tab */}
          <TabsContent value="admissions">
            <Card>
              <CardHeader>
                <CardTitle>Admission Applications</CardTitle>
                <CardDescription>
                  View and manage student applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {admissions?.map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell>
                          {format(new Date(admission.createdAt), "PP")}
                        </TableCell>
                        <TableCell>{admission.name}</TableCell>
                        <TableCell>{admission.email}</TableCell>
                        <TableCell>{admission.phone}</TableCell>
                        <TableCell>{admission.courseId}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              admission.status === "pending"
                                ? "secondary"
                                : "success"
                            }
                          >
                            {admission.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Inquiries</CardTitle>
                <CardDescription>
                  View messages from the contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts?.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell>
                          {format(new Date(contact.createdAt), "PP")}
                        </TableCell>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.phone}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {contact.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Course Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Course</CardTitle>
                  <CardDescription>Create a new course offering</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...courseForm}>
                    <form
                      onSubmit={courseForm.handleSubmit((data) =>
                        courseMutation.mutate(data)
                      )}
                      className="space-y-4"
                    >
                      <FormField
                        control={courseForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={courseForm.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={courseForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={courseForm.control}
                        name="syllabus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Syllabus</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={5} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={courseMutation.isPending}
                      >
                        {courseMutation.isPending
                          ? "Adding Course..."
                          : "Add Course"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Course List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Courses</CardTitle>
                  <CardDescription>View all courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses?.map((course) => (
                      <Card key={course.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{course.title}</h3>
                              <p className="text-sm text-gray-500">
                                Duration: {course.duration}
                              </p>
                              <p className="mt-2 text-sm">{course.description}</p>
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteCoursesMutation.mutate(course.id)}
                              disabled={deleteCoursesMutation.isPending}
                            >
                              {deleteCoursesMutation.isPending ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Gallery Item Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Gallery Item</CardTitle>
                  <CardDescription>Add a new image to the gallery</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...galleryForm}>
                    <form
                      onSubmit={galleryForm.handleSubmit((data) =>
                        galleryMutation.mutate(data)
                      )}
                      className="space-y-4"
                    >
                      <FormField
                        control={galleryForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={galleryForm.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={galleryForm.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={galleryMutation.isPending}
                      >
                        {galleryMutation.isPending
                          ? "Adding Image..."
                          : "Add Image"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Gallery List */}
              <Card>
                <CardHeader>
                  <CardTitle>Gallery Images</CardTitle>
                  <CardDescription>View all gallery images</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {gallery?.map((item) => (
                      <div key={item.id} className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="mt-2 flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteGalleryMutation.mutate(item.id)}
                            disabled={deleteGalleryMutation.isPending}
                          >
                            {deleteGalleryMutation.isPending ? "Deleting..." : "Delete"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Testimonial Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Testimonial</CardTitle>
                  <CardDescription>Add a new student testimonial</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...testimonialForm}>
                    <form
                      onSubmit={testimonialForm.handleSubmit((data) =>
                        testimonialMutation.mutate(data)
                      )}
                      className="space-y-4"
                    >
                      <FormField
                        control={testimonialForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={testimonialForm.control}
                        name="text"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Testimonial Text</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={testimonialForm.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role/Course (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={testimonialForm.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={testimonialMutation.isPending}
                      >
                        {testimonialMutation.isPending
                          ? "Adding Testimonial..."
                          : "Add Testimonial"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Testimonials List */}
              <Card>
                <CardHeader>
                  <CardTitle>Testimonials</CardTitle>
                  <CardDescription>View all testimonials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testimonials?.map((testimonial) => (
                      <Card key={testimonial.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4 mb-2">
                              {testimonial.imageUrl && (
                                <img
                                  src={testimonial.imageUrl}
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                              )}
                              <div>
                                <h3 className="font-semibold">
                                  {testimonial.name}
                                </h3>
                                {testimonial.role && (
                                  <p className="text-sm text-gray-500">
                                    {testimonial.role}
                                  </p>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteTestimonialMutation.mutate(testimonial.id)}
                              disabled={deleteTestimonialMutation.isPending}
                            >
                              {deleteTestimonialMutation.isPending ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                          <p className="italic">{testimonial.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Blogs Tab */}
          <TabsContent value="blogs">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Blog Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Blog Post</CardTitle>
                  <CardDescription>Create a new blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...blogForm}>
                    <form
                      onSubmit={blogForm.handleSubmit((data) =>
                        blogMutation.mutate(data)
                      )}
                      className="space-y-4"
                    >
                      <FormField
                        control={blogForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Blog Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={blogForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={5} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={blogForm.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={blogForm.control}
                        name="author"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={blogMutation.isPending}
                      >
                        {blogMutation.isPending
                          ? "Adding Blog Post..."
                          : "Add Blog Post"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Blog List */}
              <Card>
                <CardHeader>
                  <CardTitle>Blog Posts</CardTitle>
                  <CardDescription>View all blog posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogs?.map((blog) => (
                      <Card key={blog.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              {blog.imageUrl && (
                                <img
                                  src={blog.imageUrl}
                                  alt={blog.title}
                                  className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                              )}
                              <h3 className="font-semibold">{blog.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                By {blog.author} •{" "}
                                {format(new Date(blog.createdAt), "PP")}
                              </p>
                              <p className="mt-2 line-clamp-3">{blog.content}</p>
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteBlogMutation.mutate(blog.id)}
                              disabled={deleteBlogMutation.isPending}
                              className="ml-4"
                            >
                              {deleteBlogMutation.isPending ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}