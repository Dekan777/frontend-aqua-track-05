import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { TourProvider } from '@reactour/tour';
import steps from './steps';
import { useTour } from '@reactour/tour';

const TourButton = () => {
  const { setIsOpen } = useTour();
  return <button onClick={() => setIsOpen(true)}>Open Tour</button>;
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <TourProvider steps={steps}>
        <TourButton />
        <Home />
      </TourProvider>
    </>
  );
}
