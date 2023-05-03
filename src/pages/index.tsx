import FeedPost from "../components/FeedPost";
import {
  PublicationMainFocus,
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "../graphql/generated";
import styles from "../styles/Home.module.css";
import ReactLoading from "react-loading";
export default function Home() {
  const { isLoading, error, data } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
      },
    },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log(data);

  if (error) {
    return <div className={styles.container}>Error...</div>;
  }

  if (isLoading) {
    return (<div>
      <ReactLoading className={styles.loading} type="bubbles" color="white" height={'10%'} width={'10%'} />
    </div>);
  }

  return (
    <div className={styles.container}>
      {/* Iterate over the array of items inside the data field  */}
      <div className={styles.postsContainer}>
        {data?.explorePublications.items.map((publication) => (
          <FeedPost publication={publication} key={publication.id} />
        ))}
      </div>
    </div>
  );
}
