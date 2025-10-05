import { storage } from "../server/storage";
import { insertContactSubmissionSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

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
}
