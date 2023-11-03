export const metadata = {
  title: "Post Detail",
};

function PostDetail({ params }) {
  console.log(params);
  return (
    <div>
      <h2 className="text-6xl">Post Detail</h2>
      <p>Post {params.postId}</p>
    </div>
  );
}

export default PostDetail;
