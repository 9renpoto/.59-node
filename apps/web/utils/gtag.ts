/// <reference types="@types/gtag.js" />

export const { GA_TRACKING_ID } = process.env;

export const pageView = (page_path: string) => {
  if (GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path,
      hour: new Date().getHours(),
    });
  }
};
