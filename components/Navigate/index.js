import Link from "next/link";

const Navigation = (props) => {
  return (
    <div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <Link href={"/user"}>
        <a>User</a>
      </Link>
      <Link href={"/post"}>
        <a>Post</a>
      </Link>

      {/* styled component */}
      <style>
        {`
          a{
            display: inline-block;
            color: blue;
            margin: 10px 20px;
          }
        `}
      </style>
    </div>
  );
};


export default Navigation;