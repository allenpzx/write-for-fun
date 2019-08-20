import React from "react";
import { withRouter } from "react-router-dom";

export default function withLayout(WrappedComponent) {
  @withRouter
  class Container extends React.Component {

    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }

    render() {
      const { forwardedRef, ...props } = this.props;
      return <WrappedComponent ref={forwardedRef} {...props} />;
    }
  }

  return React.forwardRef((props, ref) => (
    <Container {...props} forwardedRef={ref} />
  ));
}
