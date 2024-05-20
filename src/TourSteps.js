import { useTranslation } from 'react-i18next';

const TourSteps = () => {
    const { t } = useTranslation();

    const steps = [
        {
            selector: '[data-tour="welcomeSection1"]',
            content: t('welcomeSection.recordPparagTour'),
        },
        {
            selector: '[data-tour="welcomeSection2"]',
            content: t('welcomeSection.tryTrackerBtnTour')
        },
    ];

    return steps;
};

export default TourSteps;


