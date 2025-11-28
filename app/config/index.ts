let backendDomain = process.env.NEXT_PUBLIC_API_URL;

console.log("domain", backendDomain)

backendDomain = backendDomain
    ? backendDomain.endsWith('/')
        ? backendDomain
        : `${backendDomain}/`
    : '';

const configJson = {
    backendDomain,
};

export default configJson;