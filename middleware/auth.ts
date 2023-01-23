import userStore from "~~/stores/userStore"

export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (userStore.user === null) {
        return navigateTo({
            name: 'authorization'
        })
    }
})