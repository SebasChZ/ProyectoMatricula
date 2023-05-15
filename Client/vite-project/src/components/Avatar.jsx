export default function Avatar(props) {
  const { size } = props;
  let avatarSize;

  switch (size) {
    case "sm":
      avatarSize = "h-6 w-6";
      break;
    case "md":
      avatarSize = "h-8 w-8";
      break;
    case "lg":
      avatarSize = "h-10 w-10";
      break;
    default:
      avatarSize = "h-6 w-6";
  }

  return (
    <img
      className={`inline-block ${avatarSize} rounded-full ring-2 ring-white`}
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
  );
}
