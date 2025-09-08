import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "../common/dropdown/Dropdown";

type PostHeaderProps = {
    avatarUrl?: string;
    username: string;
    date: string;
};

const PostHeader = ({ avatarUrl, username, date }: PostHeaderProps) => {
    return (
        <div className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt={username}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                ) : (
                    <FaUserCircle className="w-10 h-10 text-gray-400" />
                )}

                <div>
                    <h1 className="text-sm font-semibold">{username}</h1>
                    <p className="text-xs text-gray-500">{`Posted @${date}`}</p>
                </div>
            </div>
            <div className="">
                <Dropdown
                    // method="2"
                    label="Options"
                    items={["Profile", "Settings", "Logout"]}
                />
            </div>
        </div>
    );
};

export default PostHeader;
