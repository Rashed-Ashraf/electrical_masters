import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductDetailClient } from '@/components/ProductDetailClient';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.id);
  if (!product) {
    return {
      title: 'Product Not Found | Electrical Masters',
    };
  }

  if (product.id === 'lvs') {
    return {
      title: 'Low Voltage Switchgear (LVS) Panels (Up to 6300A) | Electrical Masters',
      description:
        'Advanced low voltage switchgear solutions for safe and reliable power distribution, designed with high short-circuit capacity and compact footprint.',
    };
  }

  return {
    title: `${product.title} | Electrical Masters`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return <ProductDetailClient product={product} otherProducts={otherProducts} />;
}
