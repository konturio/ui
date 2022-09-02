import type { DateType, DataItem } from 'vis-timeline';
import type { DataSet } from 'vis-data';

function shiftToMin(from: DateType, minutes: number): DateType {
  const date = new Date(from);
  return new Date(date.getTime() + minutes * 60000);
}

function datesMax(...dates: (DateType | undefined)[]): DateType {
  return Math.max(...dates.filter(Boolean).map((d) => new Date(d!).getTime()));
}

function sameDate(dateA: DateType, dateB: DateType) {
  const asTimestampA = new Date(dateA).getTime();
  const asTimestampB = new Date(dateB).getTime();
  return asTimestampA === asTimestampB;
}

export function takeTheDateWindow(data: DataSet<DataItem, 'id'>) {
  const earliestDate = data.min('id')?.start;
  if (earliestDate === undefined) {
    console.warn('[Timeline]: At least one item with start date should be in data. Fallback activated');
    const now = new Date(Date.now());
    return { min: shiftToMin(now, -5), max: shiftToMin(now, 5) };
  }

  /**
   * In case with only ranges - max end will be latest.
   * Id we work only with time points - max start will be like
   * In mixed scenario we should take both and compare
   */
  const latestDate = datesMax(data.max('id')?.end, data.max('id')?.start);

  /* Most likely it's timeline with one point entry */
  if (sameDate(earliestDate, latestDate)) {
    return { min: shiftToMin(earliestDate, -5), max: shiftToMin(earliestDate, 5) };
  }

  return {
    min: earliestDate,
    max: latestDate,
  };
}
