import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';

function Interests() {
  const { t } = useTranslation(); // `t` is the translation function

  return (
    <Section title={t('interests')}> {/* Translate the section title */}
      <p>{t('interestsContent')}</p> {/* Translate the content */}
    </Section>
  );
}

export default Interests;
