import { rectangleButton } from '@styles/components/button/Button.css';
import Image from 'next/image';
import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface RectangleButtonProps {
  text: string;
  image?: ImageProps;
  onClick?: () => void;
  className?: string;
}

const RectangleButton: FC<RectangleButtonProps> = ({
  text,
  image,
  onClick,
  className,
}) => {
  return (
    <button className={className || rectangleButton} onClick={onClick}>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      )}
      {text}
    </button>
  );
};

export default RectangleButton;
