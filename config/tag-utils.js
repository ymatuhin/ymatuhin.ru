import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const englishTagLabelMapData = require('../src/data/english-tag-label-map.json');

function cleanSlug(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const englishTagLabelMap = new Map(
  Object.entries(englishTagLabelMapData).map(([slug, label]) => [cleanSlug(slug), String(label)]),
);

const cyrillicTagSlugMap = new Map(
  Array.from(englishTagLabelMap.entries(), ([english, label]) => [cleanSlug(label), english])
    .filter(([label]) => /[а-яё]/i.test(label)),
);

const warnedMissingCyrillicTags = new Set();

export function toLegacyTagSlug(value) {
  return cleanSlug(value);
}

export function toTagSlug(value) {
  const key = cleanSlug(value);
  if (!key) return '';
  const mapped = cyrillicTagSlugMap.get(key);
  if (mapped) return cleanSlug(mapped);
  if (/[а-яё]/i.test(key) && !warnedMissingCyrillicTags.has(key)) {
    warnedMissingCyrillicTags.add(key);
    console.warn(`[tag-utils] Missing english slug for cyrillic tag "${value}". Add a mapping to src/data/english-tag-label-map.json.`);
  }
  return key;
}

export function toTagLabel(value) {
  const original = String(value || '').trim();
  const key = cleanSlug(original);
  if (!key) return '';
  const mapped = englishTagLabelMap.get(key);
  if (mapped) return mapped;
  return original;
}

export function toUniqueTagSlug(slug, usedSlugs) {
  const base = cleanSlug(slug);
  if (!base) return '';

  let candidate = base;
  let i = 2;
  while (usedSlugs.has(candidate)) {
    candidate = `${base}-${i}`;
    i += 1;
  }
  return candidate;
}
