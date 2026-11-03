import type { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Electrical Masters Switchgear Pvt. Ltd. | Industrial Switchgear & Protection Solutions',
  description:
    'Established in 2004, Electrical Masters Switchgear provides cutting-edge low voltage switchgear, PFI panels, MCC, PLC systems, and cable trays in Lahore, Pakistan.',
};

export default function Home() {
  return <HomeClient />;
}
