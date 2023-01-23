import Notifications from '@kyvg/vue3-notification'
import { VueQueryPlugin, QueryClient, hydrate, dehydrate } from '@tanstack/vue-query';
import type { VueQueryPluginOptions, DehydratedState } from '@tanstack/vue-query'

// Nuxt 3 app aliases
import { useState } from '#app'


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Notifications);
    const vueQueryState = useState<DehydratedState | null>('vue-query')

    // Modify your Vue Query global settings here
    const queryClient = new QueryClient({
        defaultOptions: { queries: { staleTime: 60*60*3 } },
    })
    const options: VueQueryPluginOptions = { queryClient }

    nuxtApp.vueApp.use(VueQueryPlugin, options);

    if (process.server) {
        nuxtApp.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient)
        })
    }

    if (process.client) {
        nuxtApp.hooks.hook('app:created', () => {
            hydrate(queryClient, vueQueryState.value)
        })
    }
});