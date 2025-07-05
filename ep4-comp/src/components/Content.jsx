// import React from "react";

// export const Content = () => {
//   return <div>Content</div>;
// };

import React, { Component } from "react";
let user = { id: 1, compo: "Class" };
let { id, compo } = user;

export default class Content extends Component {
  render() {
    return <div>Content</div>;
  }
}
