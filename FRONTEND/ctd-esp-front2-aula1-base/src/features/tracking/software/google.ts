import { TrackingSoftware } from 'features/tracking/tracking.types';

class GoogleTrackingSoftware implements TrackingSoftware {
  trackEvent(eventName: string, location: string): void {
    console.log('Google tracking event: ' + eventName + ' from location: ' + location);
  }

  /**
   * We shouldn't have this method in our TrackingSoftware interface if we don't need the initialize feature
   */
  initialize(): void {
    // DO NOTHING
  }
}

export default GoogleTrackingSoftware;
