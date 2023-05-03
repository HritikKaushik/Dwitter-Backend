import { MediaRenderer } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import { ExplorePublicationsQuery } from "../graphql/generated";
import styles from "../styles/FeedPost.module.css";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
type Props = {
  publication: ExplorePublicationsQuery["explorePublications"]["items"][0];
};

export default function FeedPost({ publication }: Props) {
  console.log(publication);

  return (
    <div className={styles.feedPostContainer}>
      <div className={styles.feedPostHeader}>
        {/* Author Profile picture */}
        <MediaRenderer
          // @ts-ignore
          src={publication?.profile?.picture?.original?.url || ""}
          alt={publication.profile.name || publication.profile.handle}
          className={styles.feedPostProfilePicture}
        />

        {/* Author profile Name */}
        <Link
          href={`/profile/${publication.profile.handle}`}
          className={styles.feedPostProfileName}
        >
          {publication.profile.name || publication.profile.handle}
        </Link>
      </div>

      <div className={styles.feedPostContent}>
        {/* Name of the post */}
        <h3 className={styles.feedPostContentTitle}>
          {publication.metadata.name}
        </h3>

        {/* Description of the post */}
        <p className={styles.feedPostContentDescription}>
          {publication.metadata.content}
        </p>

        {/* Image / media of the post if there is one */}
        {(publication.metadata.image ||
          publication.metadata.media?.length > 0) && (
          <MediaRenderer
            src={
              publication.metadata.image ||
              publication.metadata.media[0].original.url
            }
            alt={publication.metadata.name || ""}
            className={styles.feedPostContentImage}
          />
        )}
      </div>
      
      <div className={styles.feedPostFooter}>
      <div className={styles.feedPostItem}>
          <p className={styles.item}>{publication.stats.totalAmountOfCollects}</p>
          <FavoriteBorderOutlinedIcon fontSize="medium" />
          </div>
        <div className={styles.feedPostItem}>
          <p className={styles.item}> {publication.stats.totalAmountOfComments}</p>
          <ChatBubbleOutlineRoundedIcon />
          </div>
          <div className={styles.feedPostItem}>
          <p className={styles.item}>{publication.stats.totalAmountOfMirrors}</p>
          <ShareOutlinedIcon fontSize="medium" />
          </div>
      </div>
    </div>
  );
}
