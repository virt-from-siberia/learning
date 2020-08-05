import { instance } from "./api";

type GetCaptchUrlResponseType = {
  url: string;
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchUrlResponseType>(`security/get-captcha-url`)
      .then(res => res.data);
  }
};
