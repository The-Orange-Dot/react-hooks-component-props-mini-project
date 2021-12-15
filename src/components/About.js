const About = (props) => {
  console.log(props.img);
  let img = "https://via.placeholder.com/215";
  props.img ? (img = props.img) : (img = "https://via.placeholder.com/215");

  return (
    <aside>
      <img src={img} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
};

export default About;
