export type TrackingSoftwareType = 'GOOGLE_ANALYTICS' | 'FACEBOOK_PIXEL' | 'AMPLITUDE';

export interface TrackingSoftware {
  initialize: () => void;
  trackEvent: (eventName: string, location: string) => void;
}
