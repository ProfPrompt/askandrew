import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { THEME_SETTINGS } from './content';

export default function App() {
  // Load dynamic font stylesheet
  useEffect(() => {
    const linkId = 'dynamic-theme-font';
    let link = document.getElementById(linkId) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = THEME_SETTINGS.fontLink;
  }, []);

  // Dynamically compile style block based on content.ts properties
  const styleContent = `
    :root {
      --font-sans: "${THEME_SETTINGS.fontFamilySans}", ui-sans-serif, system-ui, sans-serif;
      --font-mono: "${THEME_SETTINGS.fontFamilyMono}", ui-monospace, SFMono-Regular, monospace;
      --color-brand-primary: ${THEME_SETTINGS.colors.primary};
      --color-brand-secondary: ${THEME_SETTINGS.colors.secondary};
      --color-brand-dark: ${THEME_SETTINGS.colors.dark};
      --color-brand-light: ${THEME_SETTINGS.colors.light};
    }
    body {
      background-color: var(--color-brand-light);
      color: var(--color-brand-dark);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:serviceId" element={<BookingPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </>
  );
}

