type SkillsCardProps = {
    skills: string[];
};

export default function SkillsCard({
    skills,
}: SkillsCardProps) {
    return (
    <div className="border border-blue-500/30 rounded-2xl p-6 bg-blue-500/5">
        <h3 className="text-2xl font-bold text-blue-400">
        Skills Detected
        </h3>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills.map((skill) => (
            <span
            key={skill}
            className="px-3 py-1 bg-white/10 rounded-lg"
            >
            {skill}
            </span>
        ))}
        </div>
    </div>
    );
}