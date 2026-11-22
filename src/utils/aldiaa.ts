import {
  SITE_INFO,
  type ProductCategoryId,
  type ProductItem,
} from '../data/aldiaaData';

export interface ComposerPayload {
  name?: string;
  items: string[];
  branch?: string;
  notes?: string;
}

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE_INFO.whatsapp.number}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildSingleProductMessage(productName: string): string {
  return `مرحباً الضياء، أرغب بطلب: ${productName}. هل يمكنكم تزويدي بالسعر والتوفر؟`;
}

export function buildBranchOrderMessage(branchName: string): string {
  return `مرحباً الضياء، أرغب بالطلب من فرع ${branchName}.`;
}

export function buildComposerMessage(payload: ComposerPayload): string {
  const lines = ['مرحباً الضياء،'];

  if (payload.name?.trim()) {
    lines.push(`الاسم: ${payload.name.trim()}`);
  }
  if (payload.items.length > 0) {
    lines.push(`أرغب بطلب: ${payload.items.join('، ')}`);
  }
  if (payload.branch?.trim()) {
    lines.push(`الفرع الأقرب: ${payload.branch.trim()}`);
  }
  if (payload.notes?.trim()) {
    lines.push(`ملاحظات: ${payload.notes.trim()}`);
  }
  if (lines.length === 1) {
    lines.push('أودّ الاستفسار عن منتجاتكم.');
  }

  return lines.join('\n');
}

export function buildGoogleMapsBranchUrl(branchName: string): string {
  const query = `مطاحن ومحامص الضياء ${branchName} عمان`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function filterProductsByCategory(
  products: ProductItem[],
  category: ProductCategoryId
): ProductItem[] {
  if (category === 'all') {
    return products;
  }
  return products.filter((product) => product.category === category);
}

export function getCategoryCounts(
  products: ProductItem[]
): Record<ProductCategoryId, number> {
  const counts: Record<ProductCategoryId, number> = {
    all: products.length,
    nuts: 0,
    grains: 0,
    snacks: 0,
  };

  for (const product of products) {
    counts[product.category] += 1;
  }

  return counts;
}

export function getOrderTrayItemNoun(count: number): string {
  if (count === 1) return 'صنف';
  if (count === 2) return 'صنفان';
  if (count <= 10) return 'أصناف';
  return 'صنفاً';
}
