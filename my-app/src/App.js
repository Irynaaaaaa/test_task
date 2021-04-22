import './App.css';
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {getUsers,  selectItem, getPosts, addPost, selectPost, getComments, editComments, selectComment} from "./redux/actions";
import {Posts} from './components/posts/postsForm';
import {Switch,Link,Route} from "react-router-dom";
import {UsersList} from './components/users/usersList/userList';
import {Comments} from './components/comments/commentsform';

function App(props) {

 useEffect(props.getUsers, [])
 useEffect(props.getPosts, [])
 useEffect(props.getComments, [])


  return (
    <div >
      <div className = 'header'>
        </div>
            <ul className = 'menu'>
                <li ><Link to="/users">Users</Link></li>
            </ul>
         <div>
          <Switch>
              <Route  path = '/users'><UsersList users={props.users} onSelectItem = {props.selectItem}/></Route>
              <Route path = '/Posts' ><Posts posts = {props.posts} users = {props.users} userId = {props.userId}  addPost = {props.addPost} onSelectPost = {props.selectPost}/></Route>
              <Route path = '/Post'><Comments posts = {props.posts} comments = {props.comments} postId = {props.postId} editComment = {props.editComments} onSelectComment = {props.selectComment}/> </Route>
          </Switch>
        </div>
      </div>
  );
}

const  mapDispatchToProps = (dispatch) =>{
  return{
      getUsers : () =>  dispatch(getUsers()),
      getPosts : () => dispatch(getPosts()),
      getComments : () => dispatch(getComments()),
      selectItem: (Id) => dispatch(selectItem(Id)),
      addPost : payload => dispatch(addPost(payload)),
      selectPost : id => dispatch(selectPost(id)),
      editComments : payload => dispatch(editComments(payload)),
      selectComment : id => dispatch(selectComment(id))

}
};
const mapStateToProps = store =>{
  console.log('postId : ', store.comment.commentId)
    return{
      users : store.user.data,
      userId : store.post.userId,
      posts : store.post.data,
      postId : store.comment.postId,
      comments : store.comment.data,
      commentId : store.comment.commentId
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


