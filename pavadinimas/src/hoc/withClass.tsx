import React from "react";

const withClass = (WrappedComponent: any, className: string | undefined) => {
  return (props: any) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
