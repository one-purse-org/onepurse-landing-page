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
  
    identifyUser(userId) {
      setUserId(userId);
    }
  
    setUserParams(params) {
      const user = new Identify();
  
      for (const param of params) {
        user.set(param.name, param.value)
      }
  
      identify(user)
    }
  
    trackEvent(eventName, params = null) {
      track(`LandingPage: ${eventName}`, params);
    }
  
    async resetAmplitude() {
      await track("Logout").promise();
      reset();
    }
  }
  
  export default new AmplitudeAnalytics();