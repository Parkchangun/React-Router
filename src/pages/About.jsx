import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;

  //const obj = new URLSearchParams(searchParams);
  //URLSearchParams
  //1. method 기억해야됨
  //2. IE 지원하지 않음

  const query = queryString.parse(searchParams);

  return (
    <div>
      <h2>About Page</h2>
      {query.name && <p>name is {query.name} good!</p>}
    </div>
  );
}
