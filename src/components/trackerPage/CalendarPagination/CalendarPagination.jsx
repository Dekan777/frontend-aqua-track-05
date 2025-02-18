// CalendarPagination.jsx
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';

import css from './CalendarPagination.module.css';

export const CalendarPagination = ({
  selectedDate,
  setSelectedDate,
  setIsActive,
  isActive,
}) => {
  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );

    setSelectedDate(prevoiusMonth);
    // updateNumberOfDays(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
    // updateNumberOfDays(nextMonth);
  };

  //   const updateNumberOfDays = date => {
  //     const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  //     const daysInMonth = lastDayOfMonth.getDate();
  //     setNumberOfDaysInMonth(daysInMonth);
  //   };

  const formattedDate = selectedDate
    .toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\w+) (\d+)/, '$1, $2');

  //   useEffect(() => {
  // formattedDate.toLocaleDateString()
  // console.log(formattedDate);
  //     dispatch(setFilterDate(formattedDate));
  //   }, [selectedDate, dispatch]);

  return (
    <div className={css.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={css.btn}>
        <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>{formattedDate}</span>
      <Button onClick={goToNextMonth} className={css.btn}>
        <BsChevronRight size="12" className={css.arrow} />
      </Button>
      <Button className={css.pieChart} onClick={() => setIsActive(!isActive)}>
        <svg width="20" height="20" className={css.pieIcon}>
          <use xlinkHref={`${sprite}#pie_chart`}></use>
        </svg>
      </Button>

      {/* <Calendar numberOfDaysInMonth={numberOfDaysInMonth} /> */}
    </div>
  );
};
