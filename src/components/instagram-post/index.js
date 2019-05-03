import React from "react";
import moment from "moment";
import NumberFormat from "react-number-format";

import {
  Post,
  PostContainer,
  PostImage,
  PostContent,
  PostItem
} from "./postStyles.js";

const InstagramPost = ({ post, toggleModal, selectPost }) => (
  <PostContainer>
    <Post key={post.id}>
      <a href={`https://instagram.com/p/${post.shortcode}`}>
        <PostImage image={post.display_url}>
          <h2>{moment.unix(post.taken_at_timestamp).fromNow()}</h2>
        </PostImage>
      </a>
      <PostContent>
        <PostItem border color="red">
          <i className="fas fa-heart" />
          <NumberFormat
            value={post.likes_count}
            displayType={"text"}
            thousandSeparator={true}
            suffix=" Likes"
          />
        </PostItem>
        <PostItem border>
          <i className="far fa-comments" />
          <NumberFormat
            value={post.comments_count}
            displayType={"text"}
            thousandSeparator={true}
            suffix=" Comments"
          />
        </PostItem>
        <PostItem border={post.is_video}>
          <i className="fas fa-balance-scale" />
          <NumberFormat
            value={post.engagment}
            displayType={"text"}
            thousandSeparator={true}
            suffix="% Engagement"
          />
        </PostItem>
        {post.is_video && (
          <>
            <PostItem>
              <i className="far fa-eye" />
              <NumberFormat
                value={post.view_count}
                displayType={"text"}
                thousandSeparator={true}
                suffix=" Views"
              />
            </PostItem>
          </>
        )}
      </PostContent>
    </Post>
    <button
      onClick={e => {
        toggleModal(e);
        selectPost(e, post.shortcode);
      }}
    >
      Promote Post
    </button>
  </PostContainer>
);

export default InstagramPost;
