export interface TimePeriod {
  id: number;
  startYear: number;
  endYear: number;
}

export interface HistoricalDatesProps {
  periods: TimePeriod[];
}

export interface CircleNavigationProps {
  periods: TimePeriod[];
}
