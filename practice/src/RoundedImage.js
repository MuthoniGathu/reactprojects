import React from "react";
import PropTypes from "prop-types";

const RoundedImage = props => {
  return (
    <div>
      <img
        src={props.src}
        alt="rounded"
        style={{ borderRadius: props.borderRadius }}
        className="round-img"
      />
    </div>
  );
};

RoundedImage.defaultProps = {
  borderRadius: "50%"
};

RoundedImage.propTypes = {
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default RoundedImage;
