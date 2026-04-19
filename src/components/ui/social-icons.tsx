import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function FacebookIcon({ title = "Facebook", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" {...props}>
      <title>{title}</title>
      <path d="M13.5 21v-8.25h2.75L16.75 9.5H13.5V7.63c0-1 .28-1.68 1.7-1.68h1.8V3.14C16.69 3.05 15.64 3 14.42 3c-2.54 0-4.29 1.55-4.29 4.4V9.5H7.25v3.25h2.88V21h3.37Z"/>
    </svg>
  );
}

export function InstagramIcon({ title = "Instagram", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="img" {...props}>
      <title>{title}</title>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ title = "YouTube", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" {...props}>
      <title>{title}</title>
      <path d="M23 7.2a3.2 3.2 0 0 0-2.3-2.3C18.7 4.3 12 4.3 12 4.3s-6.7 0-8.7.6A3.2 3.2 0 0 0 1 7.2 33.2 33.2 0 0 0 .4 12c0 1.6.2 3.2.6 4.8a3.2 3.2 0 0 0 2.3 2.3c2 .6 8.7.6 8.7.6s6.7 0 8.7-.6a3.2 3.2 0 0 0 2.3-2.3c.4-1.6.6-3.2.6-4.8a33.2 33.2 0 0 0-.6-4.8ZM9.8 15.5v-7l5.8 3.5-5.8 3.5Z"/>
    </svg>
  );
}
