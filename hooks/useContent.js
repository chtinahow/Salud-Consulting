

const useContentHook = () => {
	const { useEffect,useStore, useGlobalStore } = window['tram-one']
	return () => {
		const contentStore = useGlobalStore('content', { copy: undefined, isLoaded: false })
		useEffect(async () => {
			const client = contentful.createClient({
				// This is the space ID. A space is like a project folder in Contentful terms
				space: 'cpl9b50qvfvk',
				// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
				accessToken: 'PPXpXq5QtNGoBYEqRu3JXRvrCI3qJ3NIMu5gryVCJ1c'
			});
			// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
			const copyEntry = '5aU5FmY9b08mbc5HzJKXNR'
			const copy = await client.getEntry(copyEntry)
			contentStore.copy = copy.fields
			contentStore.isLoaded = true
		})
		return contentStore
	}
}
