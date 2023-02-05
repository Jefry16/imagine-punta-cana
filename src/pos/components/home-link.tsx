import { Link } from "react-router-dom";

export default function HomeLink(props: {
  to: string;
  title: string;
  bgColor: string;
}) {
  return (
    <Link
      to={props.to}
      style={{
        display: "flex",
        width: "240px",
        height: "240px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        background: props.bgColor,
        textDecoration: "none",
        color: "black",
        fontSize: "30px",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      {props.title.toUpperCase()}
    </Link>
  );
}
