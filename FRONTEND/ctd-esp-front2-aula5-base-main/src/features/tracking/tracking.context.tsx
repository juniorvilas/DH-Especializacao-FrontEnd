import { createContext, FC, useContext, useMemo, useState } from 'react';
import {
  AmplitudeTrackingSoftware,
  FacebookTrackingSoftware,
  GoogleTrackingSoftware
} from 'features/tracking/software';
import { TrackingSoftware } from 'features/tracking/tracking.types';
import AmplitudeLiskovTrackingSoftware from 'features/tracking/software/amplitude.liskov';

export interface TrackingState {
  trackingSoftwares: TrackingSoftware[];
  trackEvent: (eventName: string, location: string) => void;
}

const TrackingContext = createContext<TrackingState | undefined>(undefined);

export const TrackingProvider: FC = ({ children }) => {
  const [trackingSoftwares] = useState([
    new AmplitudeLiskovTrackingSoftware(),
    new FacebookTrackingSoftware(),
    new GoogleTrackingSoftware()
  ]);

  const value = useMemo(
    () => ({
      trackingSoftwares,
      trackEvent: (eventName: string, location: string) =>
        trackingSoftwares.forEach((trackingSoftware) => {
          trackingSoftware.initialize();
          trackingSoftware.trackEvent(eventName, location);
        })
    }),
    [trackingSoftwares]
  );

  return <TrackingContext.Provider value={value}>{children}</TrackingContext.Provider>;
};

const useTracking = (): TrackingState => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};

export default useTracking;
