export interface TimePeriod {
  id: number;
  startYear: number;
  endYear: number;
  events: Event[];
}

export interface HistoricalDatesProps {
  periods: TimePeriod[];
}

export interface CircleNavigationProps {
  periods: TimePeriod[];
  activeID: number;
  onPeriodChange: (index: number) => void;
}

export interface EventsSliderProps {
  events: Event[];
}

export interface Event {
  year: number;
  description: string;
}
