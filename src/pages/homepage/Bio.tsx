import { PrimaryButton, SecondaryButton } from "../../components/button";
import profile from "../../configs/portfolio.json";
import WrapperBody from "../../layouts/wrapper";

export default function Bio() {
  return (
    <div id="bio" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        {/* Flex row with image on the right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Image */}
          <div className="shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/121445778?s=400&u=02edaaa435439a4e6ea51f7a7ad17645e4c51ec4&v=4"
              alt="profile"
              className="rounded-full w-[200px] h-[200px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h1 className="font-['Geist'] font-[700] text-4xl">👋 I'm {profile.name}</h1>
            <p className="w-full 2xl:w-2/3">{profile.bio}</p>
            <div className="flex justify-center lg:justify-start mt-4 gap-4">
              <PrimaryButton href="#contacts" label="Get contacts" />
              <SecondaryButton href={profile.meetingLink} label="Schedule a meeting" />
            </div>
          </div>
        </div>
      </WrapperBody>
    </div>
  );
}
