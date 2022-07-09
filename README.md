> React Query is a library used to manage server state inside our React App. It maintains cache of server data on client.

## client vs server state
- client state - information relevant to browser session of user. eg: user's choosen langauge or theme preference of user.
- server state - information store on server. eg: blog posts, user info

## benefits of using React Query
- Loading/Error states - maintain state about request status (inProgress/failed).
- pagination/infinite scroll - fetch info in smaller chunks.
- prefetching - fetching information prior to the need to improve UX.
- mutations - if server state changes it will change the client side cache of it.
- de-duplication of requests - if same request is called multiple times. It will remove duplicate requests.
- Retry on error - if request is failed. Retry the same request again.
- callbacks - function to run after after success or failure etc.

## isFetching vs isLoading
- `isFetching` - the async query function to fetch server data is not resolved yet.
- `isLoading` - no cached data, plus `isFetching`