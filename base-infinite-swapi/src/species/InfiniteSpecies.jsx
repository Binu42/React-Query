import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    isFetching,
    error,
  } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
      getPreviousPageParam: (currPage) => currPage.previous || undefined,
    }
  );

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div>Error {error.toString()}</div>;
  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map(({ name, language, average_lifespan }, i) => (
            <Species
              key={i}
              {...{ name, language, averageLifespan: average_lifespan }}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}
