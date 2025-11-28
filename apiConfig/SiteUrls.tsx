import configJson from "../app/config/index";

const siteUrlsJson = {
    ourSiteUrls: {
        auth: {
            signin: "signin",
            product: "auth/product",
            otpSend: "otp/send",
            otpVerify: "otp/verify",
        }
    },
    outerDomainUrls: {},
};

function checkInnerJson(jsonData: any) {
    if (jsonData) {
        for (const key in jsonData) {
            if (typeof jsonData[key] === "string") {
                jsonData[key] = `${configJson.backendDomain}${jsonData[key]}`;
            } else {
                jsonData[key] = checkInnerJson(jsonData[key]);
            }
        }
    }
    return jsonData as typeof siteUrlsJson.ourSiteUrls;
}
const siteUrls = {
    ...checkInnerJson(siteUrlsJson.ourSiteUrls),
    outerDomainUrls: siteUrlsJson.outerDomainUrls,
};
export default siteUrls;
