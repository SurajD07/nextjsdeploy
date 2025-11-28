import apiFunctions from "./ApiService"
import siteUrls from "./SiteUrls"

export const postSignInApi = async (payload : any) => {
    return apiFunctions.post(siteUrls.auth.signin, payload)
}
export const authProductApi = async (id: any) => {
    return apiFunctions.get(`${siteUrls.auth.product}${id}`)
}

export const otpSendApi = async (payload: any) => {
    return apiFunctions.post(siteUrls.auth.otpSend, payload)
}
export const otpVerifyApi = async (payload: any) => {
    return apiFunctions.post(siteUrls.auth.otpVerify, payload)
}