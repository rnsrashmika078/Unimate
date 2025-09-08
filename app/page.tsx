import TabLayout from "./src/components/common/tablayout/TabLayout";
import Theme from "./src/components/common/theme/Theme";
import Post from "./src/components/post/Post";
import Introduction from "./src/components/profile/Introduction";
import ProfileCard from "./src/components/profile/ProfileCard";

export default function Home() {
    const tabs = [
        {
            label: "Posts",
            content: (
                <div className="flex">
                    <ProfileCard
                        avatarUrl="https://i.pravatar.cc/150?img=12"
                        username="Rashmika Siriwardhana"
                        bio="Software Engineering student • React | Next.js | UE5"
                    />
                    <Introduction
                        firstName="Rashmika"
                        lastName="Siriwardhana"
                        email="rashmika@example.com"
                        university="University of Colombo"
                        degreeOrProfession="Undergraduate in BICT Software Engineering"
                        linkedin="https://www.linkedin.com/in/rashmika"
                        facebook="https://www.facebook.com/rashmika"
                    />
                </div>
            ),
        },
        {
            label: "About",
            content: (
                <div className="flex">
                    <Post />
                </div>
            ),
        },
        { label: "Friends", content: <p>Friends list 👥</p> },
    ];
    return (
        <div>
            <Theme />
            <TabLayout tabs={tabs} />
        </div>
    );
}
