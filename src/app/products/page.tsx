import type { Metadata } from 'next';
import { ProductsClient } from '@/components/ProductsClient';

export const metadata: Metadata = {
  title: 'Industrial Switchgear & Distribution Panels | Electrical Masters',
  description:
    'Browse our complete line of IEC/BS compliant low and medium voltage switchgear systems, MCC panels, PFI plants, and custom electrical solutions.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}
