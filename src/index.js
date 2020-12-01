import React from 'react';
import './index.css';
import state, {deletePost} from "./Redux/State";
import { rerenderEntireTree } from "./render"


//deletePost()

rerenderEntireTree(state);




