const BASE_URL = "http://127.0.0.1:8000/";

export const APIService = {
  dev: BASE_URL,
};

export const FB_URL =
  window.location.host === "frontend.bits-pilani-eon.net" ? 
    "https://frontend.bits-pilani-eon.net/" :
    "http://d10crzu2ups2gn.cloudfront.net/";


export const requestURLS = {
  LOGIN: "authentication/login",
  GET_NOTIFICATIONS_URL: "core/notification/",
  READ_NOTIFICATIONS_URL: "core/notification/",
  REGISTER: "authentication/registration",
  GENERATE_CODE: "authentication/generate-code",
  RESET_PASSWORD: "authentication/reset-password",
  CHANGE_PASSWORD: "authentication/change-password",
  GET_EVENT_TYPES: "core/event-type",
  EVENT_OPERATIONS: "core/event/",
  UPLOAD_IMAGE: "core/presigned-url",
  INVITEE_LIST: "core/invite/",
  NOTIFY_SUBSCRIBER: "core/notify-subscriber/",
  SUBSCRIPTION:"core/subscription/",
  SHARE_FRIEND: "core/share-with-friend/",
  WISHLIST: "core/wishlist/",
  USER_OPERATIONS: "core/user/",
  ANALYTICS: "core/event-summary/",
  FEEDBACK_OPERATIONS: "core/feedback-questions/",
  FEEDBACK_POST: "core/feedback/",
};
