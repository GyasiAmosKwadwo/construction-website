import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log the submission for the business owner
      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        projectType: submission.projectType,
        submittedAt: submission.submittedAt
      });
      
      res.status(201).json({
        success: true,
        message: "Thank you for your message! We'll contact you within 24 hours.",
        submissionId: submission.id
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form data and try again.",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  // Note: Admin endpoint for viewing submissions removed for security.
  // TODO: Add authenticated admin route to view submissions when auth is implemented.

  const httpServer = createServer(app);

  return httpServer;
}
