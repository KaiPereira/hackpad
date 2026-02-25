import { useState } from "react";

interface HackpadImage {
    url: string;
    thumbnail: string;
}

interface Submitter {
    displayName: string;
    avatar: string | null;
}

export interface Hackpad {
    id: string;
    description: string;
    repoUrl: string;
    program: string;
    hoursSpent: number;
    createdAt: string;
    images: HackpadImage[];
    slackId: string;
    submitter: Submitter | null;
}

const GalleryCard = ({ hackpad }: { hackpad: Hackpad }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const images = hackpad.images ?? [];
    const currentImage = images[imgIndex];

    return (
        <div className="bg-white border-4 border-slate-700 rounded-sm flex flex-col overflow-hidden font-sans">
            {/* Image */}
            <div className="relative bg-slate-100 aspect-square overflow-hidden">
                {currentImage ? (
                    <img
                        src={currentImage.thumbnail}
                        alt={`${hackpad.submitter?.displayName ?? "hackpad"} photo`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                        No photo
                    </div>
                )}
                {images.length > 1 && (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIndex(i)}
                                className={`w-2 h-2 rounded-full border border-slate-600 transition-colors ${
                                    i === imgIndex
                                        ? "bg-slate-700"
                                        : "bg-white/80"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-3">
                {/* Submitter */}
                <div className="flex items-center gap-2">
                    {hackpad.submitter?.avatar ? (
                        <img
                            src={hackpad.submitter.avatar}
                            alt={hackpad.submitter.displayName}
                            loading="lazy"
                            className="w-8 h-8 rounded-full border-2 border-slate-400"
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-400 flex items-center justify-center text-xs text-slate-600">
                            ?
                        </div>
                    )}
                    <span className="font-semibold text-sm text-slate-800 truncate">
                        {hackpad.submitter?.displayName ?? hackpad.slackId ?? "Anonymous"}
                    </span>
                </div>

                {/* Description */}
                {hackpad.description && (
                    <p className="text-sm text-slate-700 leading-snug line-clamp-4 flex-1">
                        {hackpad.description}
                    </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-1 border-t-2 border-dashed border-slate-300 text-xs text-slate-500">
                    {hackpad.program && (
                        <span className="font-medium text-slate-600">{hackpad.program}</span>
                    )}
                    {hackpad.repoUrl && (
                        <a
                            href={hackpad.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-700 hover:text-cyan-900 font-semibold underline"
                        >
                            repo →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;
