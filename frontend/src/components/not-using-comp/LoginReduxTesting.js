import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { createPost, fetchPost } from "@/redux/features/post-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginReduxTesting = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.value);
  const posts = useSelector((state) => state.posts.items);

  const onClick = () => {
    dispatch(logIn({ name: "jamy", uid: "sdadsa" }));
    dispatch(createPost({ title: "jamy", body: "sdadsa" }));
  };
  const onlogout = () => {
    dispatch(logOut());
  };
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div>
      <button onClick={onClick}>Login</button>
      <button onClick={onlogout}>Logout</button>
      <button onClick={() => dispatch(toggleModerator())}>isModarator :</button>

      <div>
        Username:{username.username}
        Uid:{username.uid}
        isModerator: {username.isModerator ? <>True</> : <>False</>}
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginReduxTesting;
w;
