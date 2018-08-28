import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return (<div className="error-component">
                <section>    
                    <p className="main-text">Something went wrong, while loading Map.</p>
                    <p>You can find more info in developer console.</p>           
                    </section>                     
                </div>);
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary