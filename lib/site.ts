const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://helixorm.com";

export const siteUrl = new URL(configuredSiteUrl);

const obj={
  siteUrl,
  cannonicalUrl: function(pathname: string){
    return new URL(pathname, siteUrl).toString();
    
  }
}
export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
