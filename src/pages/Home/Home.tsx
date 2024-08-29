import styles from "./Home.module.scss";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetPostsQuery } from "../../api/postsApiSlice";

const Cell = ({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) => {
  const { posts } = data;
  const navigate = useNavigate();
  const handleCardClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };
  const postIndex = rowIndex * 4 + columnIndex;
  const post = posts[postIndex];
  if (!post) return null;

  return (
    <div
      key={post.id}
      className={styles["home__card"]}
      style={style}
      onClick={() => handleCardClick(post.id)}
    >
      <div className={styles["home__card-title"]}>
        <strong>{post.title}</strong>
      </div>
      <div className={styles["home__card-description"]}>{post.body}</div>
    </div>
  );
};

export const Home: React.FC = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery({});

  if (isLoading) return <Spinner />;
  console.log("posts-->", posts);
  const columnCount = 4;
  const rowCount = Math.ceil(posts.length / columnCount);

  return (
    <div className={styles["home__container"]}>
      {!!posts.length && (
        <AutoSizer>
          {({ height, width }: Size) => (
            <Grid
              columnCount={columnCount}
              columnWidth={width / columnCount}
              height={height}
              rowCount={rowCount}
              rowHeight={350}
              width={1440}
              itemData={{ posts }}
            >
              {Cell}
            </Grid>
          )}
        </AutoSizer>
      )}
    </div>
  );
};
