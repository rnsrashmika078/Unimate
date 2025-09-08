"use client";
import Image from "next/image";

type ProfileCardProps = {
    avatarUrl: string;
    username: string;
    bio: string;
};

const ProfileCard = ({ avatarUrl, username, bio }: ProfileCardProps) => {
    return (
        <div className=" p-4">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--border-color)] shadow-md">
                    <Image
                        src={avatarUrl}
                        alt={username}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Username */}
                <h2 className="mt-3 text-lg font-semibold text-[var(--foreground)]">
                    {username}
                </h2>

                {/* Bio */}
                <p className="text-sm text-gray-500 mt-1">{bio}</p>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        Follow
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
