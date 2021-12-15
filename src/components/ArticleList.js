import Article from "./Article";

const ArticleList = (props) => (
  <main>
    <Article blog={props.blog} />
  </main>
);

export default ArticleList;
