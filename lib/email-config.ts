// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get these values

import emailjs from '@emailjs/browser';

export const EMAIL_CONFIG = {
  // Get these from your EmailJS dashboard after creating an account
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ffadizf', 
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Im88BN0gYPsZEL9Uv',
  
  // Template IDs for different email types
  TEMPLATES: {
    NEW_BETA_SIGNUP: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN || 'template_new_beta_signup',
    WELCOME_USER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER || 'template_welcome_user',
  },
  
  // Admin email address
  ADMIN_EMAIL: 'tristan68420@gmail.com',
};

// Initialize EmailJS with your public key
export const initEmailJS = (publicKey: string) => {
  if (typeof window !== 'undefined') {
    emailjs.init(publicKey);
  }
}; 