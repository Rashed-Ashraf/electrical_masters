import type { Metadata } from 'next';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Electrical Masters Switchgear | Get a Quote in Lahore',
  description:
    'Get in touch with our electrical engineering consultants in Lahore, Pakistan. Request a technical quote or submit your Single Line Diagrams (SLD) today.',
};

export default function ContactPage() {
  return <ContactClient />;
}
