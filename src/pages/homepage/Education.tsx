import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaGraduationCap } from "react-icons/fa";
import dayjs from "dayjs";

export default function Education() {
  return (
    <div id="education" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
  <div className="flex flex-col gap-4">
    <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl">
      <FaGraduationCap />Education
    </p>

    {/* 👉 Combine into one grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Education 1 */}
      <div className="flex flex-col gap-4 border border-zinc-800 hover:border-zinc-600 rounded-lg py-8 px-6">
        <img src={profile.education.logo} alt="university-logo" className="h-16 object-contain" />
        <p className="text-xl text-center">{profile.education.university}</p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Location:</span>
          {profile.education.location}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Degree:</span>
          {profile.education.degree}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">CGPA:</span>
          {profile.education.cgpa}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Graduated:</span>
          {dayjs(profile.education.graduation).format("MMM YYYY")} 
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Relevant Coursework:</span>
          {profile.education.courseWork.join(', ')}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Senior Project:</span>
          {profile.education.project}
        </p>
      </div>

      {/* Education 2 */}
      <div className="flex flex-col gap-4 border border-zinc-800 hover:border-zinc-600 rounded-lg py-8 px-6">
        <img src={profile.education_bca.logo} alt="university-logo" className="h-16 object-contain" />
        <p className="text-xl text-center">{profile.education_bca.university}</p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Location:</span>
          {profile.education_bca.location}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Degree:</span>
          {profile.education_bca.degree}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">CGPA:</span>
          {profile.education_bca.cgpa}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Graduated:</span>
          {dayjs(profile.education_bca.graduation).format("MMM YYYY")} 
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Relevant Coursework:</span>
          {profile.education_bca.courseWork.join(', ')}
        </p>
        <p className="flex items-center gap-1 text-sm text-zinc-400">
          <span className="text-white font-bold">Senior Project:</span>
          {profile.education_bca.project}
        </p>
      </div>
    </div>
  </div>
</WrapperBody>

    </div>
  )
}