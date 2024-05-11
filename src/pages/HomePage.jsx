import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
// import { CalendarPagination } from '../components/trackerPage/CalendarPagination/CalendarPagination';
// import { Calendar } from '../components/trackerPage/Calendar/Calendar';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
    </>
  );
}
