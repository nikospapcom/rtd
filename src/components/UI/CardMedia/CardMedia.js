import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

const CardMedia = props => {
  const {
    children,
    className,
    component: Component = 'div',
    image,
    height,
    src,
    style,
    ...rest
  } = props;

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  const composedStyle =
    !isMediaComponent && image
      ? { backgroundImage: `url("${image}")`, ...style }
      : style;

  const componentHeight = height ? { height: `${height}px` } : null;

  const mergedStyled = { ...composedStyle, ...componentHeight };

  return (
    <Component
      className={clsx(
        'overflow-hidden block bg-cover bg-no-repeat bg-center w-full',
        {
          'object-cover object-center':
            ['picture', 'img'].indexOf(Component) !== -1
        },
        className
      )}
      src={isMediaComponent ? image || src : undefined}
      style={mergedStyled}
      {...rest}>
      {isMediaComponent === 'img' ? null : children}
    </Component>
  );
};

CardMedia.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Image height
   */
  height: PropTypes.string,

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,

  /**
   * @ignore
   */
  style: PropTypes.object
};

CardMedia.defaultProps = {};

export default CardMedia;
