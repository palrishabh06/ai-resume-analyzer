type MissingKeywordsCardProps = {
    keywords: string[];
};

export default function MissingKeywordsCard({
    keywords,
}: MissingKeywordsCardProps) {
    return (
    <div className="border border-red-500/30 rounded-2xl p-6 bg-red-500/5">
        <h3 className="text-2xl font-bold text-red-400">
        Missing Keywords
        </h3>

        <ul className="mt-4 space-y-2">
        {keywords.map((keyword) => (
            <li key={keyword}>
            {keyword}
            </li>
        ))}
        </ul>
    </div>
    );
}