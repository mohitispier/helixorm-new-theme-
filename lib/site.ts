const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://helixorm.com";

export const siteUrl = new URL(configuredSiteUrl);

export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
