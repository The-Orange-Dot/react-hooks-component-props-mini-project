const Article = (props) => {
  let date;

  const render = props.blog.map((e) => {
    e.date === undefined
      ? (date = <small>January 1, 1970</small>)
      : (date = <small>{e.date}</small>);
    return (
      <article key={e.id.toString()}>
        <h3 key={e.toString()}>{e.title}</h3>
        {date}
        <p>{e.preview}</p>
      </article>
    );
  });

  return <>{render}</>;
};
export default Article;
