const CMS_BASE_URL = "https://cms.carebeautyclinic.com.tw";
const LOCALHOST_REGEX = /^https?:\/\/localhost(?::\d+)?/i;

export function normalizeMediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined;

  let normalized = url.trim();
  if (!normalized) return undefined;

  // Handle protocol-relative URLs like //localhost:3302/media/xxx.jpg
  if (normalized.startsWith("//")) {
    normalized = `https:${normalized}`;
  }

  // Replace any localhost reference with the CMS domain
  normalized = normalized.replace(LOCALHOST_REGEX, CMS_BASE_URL);

  // If it's a relative media path, ensure it uses the CMS domain
  if (normalized.startsWith("/media/")) {
    normalized = `${CMS_BASE_URL}${normalized}`;
  }

  return normalized;
}
