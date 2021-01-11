/// <reference types="@types/gtag.js" />

export const { GA_TRACKING_ID } = process.env;

export const pageview = (page_path: string) => {
  window.gtag("config", GA_TRACKING_ID!, {
    page_path,
  });
};
