import { z } from 'zod';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const inquirySchema = z.object({
    childFirstName: z.string().min(2).max(16),
    childLastName: z.string().min(2).max(16),
    parentFirstName: z.string().min(2).max(16),
    parentLastName: z.string().min(2).max(16),
    parentEmail: z.string().email(),
    parentPhone: z.string().regex(phoneRegex, 'Invalid phone number!'),
    programs: z.number().array(),
});

export const tourSchema = z.object({
    childFirstName: z.string().min(2).max(16),
    childLastName: z.string().min(2).max(16),
    childBirthDay: z.string().min(1).max(2),
    childBirthMonth: z.string().min(1).max(2),
    childBirthYear: z.string().min(4).max(4),
    parentFirstName: z.string().min(2).max(16), 
    parentLastName: z.string().min(2).max(16),
    parentEmail: z.string().email(),
    parentPhone:  z.string().regex(phoneRegex, 'Invalid phone number!'),
    inquiry: z.string(),
    comments: z.string().optional(),
    selectedCenter: z.string(),
    selectedTourDate: z.string(),
});

export const birthdaySchema = z.object({
    childFirstName: z.string().min(2).max(16),
    childLastName: z.string().min(2).max(16),
    childBirthDay: z.string().min(1).max(2),
    childBirthMonth: z.string().min(1).max(2),
    childBirthYear: z.string().min(4).max(4),
    parentFirstName: z.string().min(2).max(16), 
    parentLastName: z.string().min(2).max(16),
    parentEmail: z.string().email(),
    parentPhone:  z.string().regex(phoneRegex, 'Invalid phone number!'),
    inquiry: z.string(),
    comments: z.string(),
    selectedCenter: z.string(),
    desiredPartyDate: z.string(),
});