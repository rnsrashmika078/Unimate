import Image from "next/image";
import { StaticImageData } from "next/image";
type PostContentProps = {
  description: string;
  image?: string | StaticImageData;
};

const PostContent = ({ description, image }: PostContentProps) => {
  return (
    <div>
      {/* Description */}
      <div className="px-2 py-2">
        <h1 className="text-sm ">{description}</h1>
      </div>

      {/* Post Image (if exists) */}
      {image && (
        <div className="w-full relative aspect-[16/9]">
          <Image
            src={image}
            alt="Post"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      )}
    </div>
  );
};

export default PostContent;
