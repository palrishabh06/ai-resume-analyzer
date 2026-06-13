type ATSScoreCardProps = {
    score: number;
};

export default function ATSScoreCard({
    score,
}: ATSScoreCardProps) {

    const scoreColor =
    score >= 85
        ? "text-green-400"
        : score >= 70
        ? "text-yellow-400"
        : "text-red-400";

    return (
    <div className="border border-green-500/30 rounded-2xl p-6 bg-green-500/5">
        <h3 className="text-2xl font-bold text-green-400">
        ATS Score
        </h3>

        <p className={`text-5xl font-bold mt-4 ${scoreColor}`}>
        {score}/100
        </p>
    </div>
    );
}