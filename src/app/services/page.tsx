import type { Metadata } from 'next';
import { ServicesClient } from '@/components/ServicesClient';

export const metadata: Metadata = {
  title: 'Turnkey Electrical Engineering Services & Commissioning | Electrical Masters',
  description:
    'Expert on-site installation, substation commissioning, chemical earthing, and lightning protection systems across Pakistan.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
