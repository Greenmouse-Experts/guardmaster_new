export const getBearerToken = () => {
    const token = localStorage.getItem('guard_token')
    return `Bearer ${token}`
}
export const getToken = () => {
    const token = localStorage.getItem('guard_token')
    return token
}