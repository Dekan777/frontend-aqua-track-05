import { useTour } from '@reactour/tour';
import { useTranslation } from 'react-i18next';

const TourButton = () => {
  const { t } = useTranslation();
  const { setIsOpen } = useTour();
  return (
    <button onClick={() => setIsOpen(true)}>{t('ButtonTour.openTour')}</button>
  );
};

export default TourButton;
