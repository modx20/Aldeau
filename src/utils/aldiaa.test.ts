import test from 'node:test';
import assert from 'node:assert/strict';
import { BRANCHES, PRODUCTS, PRODUCT_CATEGORIES } from '../data/aldiaaData';
import {
  buildBranchOrderMessage,
  buildComposerMessage,
  buildGoogleMapsBranchUrl,
  buildSingleProductMessage,
  buildWhatsAppUrl,
  filterProductsByCategory,
  getCategoryCounts,
  getOrderTrayItemNoun,
} from './aldiaa';

test('product categories place seeds inside المكسرات without بزورات', () => {
  const labels = PRODUCT_CATEGORIES.map((c) => c.label);
  assert.ok(!labels.some((l) => l.includes('بزورات')));
  assert.ok(labels.includes('المكسرات'));

  const counts = getCategoryCounts(PRODUCTS);
  assert.equal(counts.all, 7);
  assert.equal(counts.nuts, 3);
  assert.equal(counts.grains, 2);
  assert.equal(counts.snacks, 2);

  const nuts = filterProductsByCategory(PRODUCTS, 'nuts');
  assert.ok(nuts.some((p) => p.id === 'afghan-seeds'));
});

test('branches include all 8 Amman retail locations plus Abu Alanda HQ', () => {
  assert.equal(BRANCHES.length, 9);
  const retail = BRANCHES.filter((b) => !b.hq);
  const hq = BRANCHES.filter((b) => b.hq);
  assert.equal(retail.length, 8);
  assert.equal(hq.length, 1);
  assert.equal(hq[0].name, 'أبو علندا');
  assert.ok(hq[0].note?.includes('المصنع'));
});

test('buildComposerMessage generates live preview text with defaults and selected options', () => {
  const empty = buildComposerMessage({ items: [] });
  assert.equal(empty, 'مرحباً الضياء،\nأودّ الاستفسار عن منتجاتكم.');

  const full = buildComposerMessage({
    name: 'سارة',
    items: ['مخلوطة اكسترا', 'بزر أفغاني'],
    branch: 'ضاحية الياسمين',
    notes: 'نصف كيلو من كل صنف',
  });
  assert.ok(full.includes('الاسم: سارة'));
  assert.ok(full.includes('أرغب بطلب: مخلوطة اكسترا، بزر أفغاني'));
  assert.ok(full.includes('الفرع الأقرب: ضاحية الياسمين'));
  assert.ok(full.includes('ملاحظات: نصف كيلو من كل صنف'));
});

test('WhatsApp & Google Maps URL builders encode Arabic queries properly', () => {
  const prodUrl = buildWhatsAppUrl(buildSingleProductMessage('مخلوطة اكسترا'));
  assert.ok(prodUrl.startsWith('https://wa.me/962792030055?text='));
  assert.ok(decodeURIComponent(prodUrl).includes('مخلوطة اكسترا'));

  const branchUrl = buildWhatsAppUrl(buildBranchOrderMessage('البيادر'));
  assert.ok(decodeURIComponent(branchUrl).includes('فرع البيادر'));

  const mapsUrl = buildGoogleMapsBranchUrl('ضاحية الياسمين');
  assert.ok(mapsUrl.startsWith('https://www.google.com/maps/search/?api=1&query='));
  assert.ok(decodeURIComponent(mapsUrl).includes('مطاحن ومحامص الضياء ضاحية الياسمين عمان'));

  assert.equal(getOrderTrayItemNoun(1), 'صنف');
  assert.equal(getOrderTrayItemNoun(2), 'صنفان');
  assert.equal(getOrderTrayItemNoun(5), 'أصناف');
});
