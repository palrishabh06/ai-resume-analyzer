type UploadBoxProps = {
    fileName: string;
    error: string;
    isDragging: boolean;
    onClick: () => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: () => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};

export default function UploadBox({
    fileName,
    error,
    isDragging,
    onClick,
    onDragOver,
    onDragLeave,
    onDrop,
}: UploadBoxProps) {
    return (
    <div
        onClick={onClick}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`border-2 border-dashed rounded-2xl p-12 cursor-pointer transition-all duration-300
        ${
        isDragging
            ? "border-blue-500 bg-blue-500/10 scale-105"
            : "border-gray-700 hover:border-blue-500 hover:bg-white/5"
        }`}
    >
        <div className="text-6xl mb-4">
        {isDragging ? "⬇️" : "📄"}
        </div>

        <h2 className="text-2xl font-semibold mb-2">
        {isDragging
            ? "Drop Your Resume"
            : "Upload Your Resume"}
        </h2>

        <p className="text-gray-400">
        Drag & drop your PDF resume here
        <br />
        or click to browse
        </p>

        {fileName && (
        <p className="mt-4 text-green-400 font-medium">
            ✅ Selected: {fileName}
        </p>
        )}

        {error && (
        <p className="mt-4 text-red-400 font-medium">
            ❌ {error}
        </p>
        )}
    </div>
    );
}
