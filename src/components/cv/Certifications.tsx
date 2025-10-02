// src/components/Certifications.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';

function Certifications() {
  const { t } = useTranslation(); // `t` is the translation function

  return (
    <Section title={t('certifications')}> {/* Translate the section title */}
      <ul style={{ paddingLeft: '20px' }}>
        <li>{t('cert1')}</li> {/* Translate the certification item */}
        <li>{t('cert2')}</li>
        <li>{t('cert3')}</li>
      </ul>
    </Section>
  );
}

export default Certifications;
