import Avatar from "./Avatar";

export default function Avatars(props) {
  const { size } = props;

  return (
    <>
      <div className="flex -space-x-1 overflow-hidden">
        <Avatar size={size} />
        <Avatar size={size} />
        <Avatar size={size} />
      </div>
    </>
  );
}
