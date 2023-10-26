import {
    Identify,
    identify,
    init,
    reset,
    setUserId,
    track,
  } from "@amplitude/analytics-browser";
  
  class AmplitudeAnalytics {
    initialise() {
      init(process.env.REACT_APP_AMPLITUDE_KEY || "", {
        defaultTracking: true,
      });
    }
  
    identifyUser(userId: undefined | string) {
      setUserId(userId);
    }
  
    setUserParams(params) {
      const user = new Identify();
  
      for (const param of params) {
        user.set(param, params[param])
      }
  
      identify(user)
    }
  
    trackEvent(eventName: string, params: any) {
      track(`LandingPage: ${eventName}`, params);
    }
  
    async resetAmplitude() {
      await track("Logout");
      reset();
    }
  }
  
  export default new AmplitudeAnalytics();