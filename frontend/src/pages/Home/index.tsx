import {clone} from 'lodash';
import moment from 'moment';
import 'moment/locale/pt-br';
import React, {useCallback, useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Loading from '~/components/atoms/Loading';
import CalendarToolbar from '~/components/molecules/CalendarToolbar';
import ManageSchedule from '~/components/organisms/ManageSchedule';
import useScheduleContext from '~/hooks/schedule/useScheduleContext';
import * as S from './styles';

const localizer = momentLocalizer(moment);

const Home: React.FC = () => {
  const {schedulesAll, getSchedules, loading} = useScheduleContext();
  const [open, setOpen] = useState<any>(null);

  useEffect(() => {
    getSchedules();
  }, [getSchedules]);

  const handleSelect = useCallback(({start, end}) => {
    const dateStart = clone(start);
    const dateEnd = clone(end);
    if (start === end) {
      dateEnd.setMinutes(dateEnd.getMinutes() + 45);
    }
    const data = {
      start: dateStart.toISOString(),
      end: dateEnd.toISOString(),
    };
    setOpen(data);
  }, []);
  const handleSelectEvent = useCallback((event) => {
    setOpen(event);
  }, []);
  const handleEventPropGetter = useCallback((event) => {
    const color: any = {
      1: '#3174ad',
      2: '#047004',
      3: '#9e0606',
    };
    return {style: {backgroundColor: color[event.status]}};
  }, []);
  const handleOnClose = useCallback(() => {
    setOpen(null);
  }, []);
  return (
    <S.Container>
      <Loading active={loading} />
      <Calendar
        selectable
        localizer={localizer}
        events={schedulesAll}
        views={['week', 'day', 'month', 'work_week']}
        defaultView="month"
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        titleAccessor={(event) => event.patient.nome}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelect}
        components={{toolbar: CalendarToolbar}}
        eventPropGetter={handleEventPropGetter}
      />
      <ManageSchedule open={open} onClose={handleOnClose} />
    </S.Container>
  );
};

export default Home;
