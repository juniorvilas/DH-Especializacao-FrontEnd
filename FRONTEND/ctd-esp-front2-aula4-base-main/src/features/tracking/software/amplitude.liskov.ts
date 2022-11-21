import { AmplitudeTrackingSoftware } from 'features/tracking/software/index';

class AmplitudeLiskovTrackingSoftware extends AmplitudeTrackingSoftware {
  /**
   * This class violates the Liskov principle because is modificating the behavior of the upper class. and is also violating the open-closed principle as well
   */
  trackEvent(eventName: string, location: string): void {
    if (location !== null) {
      console.log('Event: ' + eventName + ' dispatched from: ' + location);
    } else {
      throw new Error('Enforce location sending');
    }
  }
}

export default AmplitudeLiskovTrackingSoftware;
