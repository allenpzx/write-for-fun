import React from 'react';

function logProps(WrappedComponent) {
  
  class LogProps extends React.Component {

    componentDidMount() {
      console.log('initial props: ', this.props);
    }

    componentDidUpdate(prevProps) {
      console.log("old props: ", prevProps);
      console.log("new props: ", this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => <LogProps {...props} forwardedRef={ref} />);
}

export default logProps