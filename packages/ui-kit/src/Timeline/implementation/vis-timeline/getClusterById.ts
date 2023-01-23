import type { Timeline as VisTimeline } from 'vis-timeline';

export const getClusterById = (id: number | string, timeline: VisTimeline) => {
  // TODO - add itemSet in public interface of lib
  // @ts-expect-error timeline not expose itemSet in interface.s
  return timeline.itemSet.clusters.find((c) => c.id === id);
};
