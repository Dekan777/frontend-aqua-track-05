import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { TourProvider, useTour } from '@reactour/tour';
import steps from '../steps';

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
        <div>
          <TourButton />

          <p>
            <button data-tour="1">111</button>
          </p>
          <button data-tour="2">222</button>
          <p>
            <button data-tour="3">333</button>
          </p>
        </div>
        <Home />
      </TourProvider>
    </>
  );
}
