import Image from 'next/image';
import { LayoutAnimationSkroll } from '../../../Layout/LayoutAnimationSkroll';

export const GretingRight = () => {
  return (
    <div className="fotoBody">
      <LayoutAnimationSkroll className="foto" transform="translateY(150px)">
        <Image fill src="/myface.png" alt="" loading="eager" />
      </LayoutAnimationSkroll>
    </div>
  );
};
