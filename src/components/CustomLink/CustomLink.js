import { Link, useMatch, useResolvedPath } from "react-router-dom";


function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? "#dc143c" : "black" , borderColor: match ? "#dc143c" : "rgb(163 163 163)" , fontWeight: match ? "bold" : "normal"}}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}
export default CustomLink;