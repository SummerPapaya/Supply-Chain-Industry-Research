import { useState, useEffect } from "react";
import { X, BookOpen, ExternalLink, Code2, Copy, Check, FileText } from "lucide-react";
import Markdown from "react-markdown";
import { locales } from "../locales";

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "zh" | "en";
}

export default function ReadmeModal({ isOpen, onClose, lang }: ReadmeModalProps) {
  const [readmeText, setReadmeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"rendered" | "raw">("rendered");

  const t = locales[lang].header;

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    // Read README.md content directly from raw string or fetch
    fetch("/README.md")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load README.md");
        return res.text();
      })
      .then((data) => {
        setReadmeText(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setReadmeText("# Supply Chain Industry Research\n\nFailed to load README.md content dynamically.");
        setLoading(false);
      });
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-300 rounded-sm shadow-2xl w-full max-w-5xl my-auto flex flex-col max-h-[90vh] overflow-hidden text-left">
        {/* Header bar */}
        <div className="bg-slate-900 text-white p-4 sm:px-6 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-sm border border-blue-400/30">
                  GitHub README
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  SummerPapaya/Supply-Chain-Industry-Research
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
                {t.readmeModalTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Switcher */}
            <div className="hidden sm:flex border border-slate-700 rounded-sm p-0.5 bg-slate-800">
              <button
                onClick={() => setActiveTab("rendered")}
                className={`px-3 py-1 text-xs font-bold font-mono rounded-sm transition-all cursor-pointer flex items-center space-x-1 ${
                  activeTab === "rendered" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Rendered</span>
              </button>
              <button
                onClick={() => setActiveTab("raw")}
                className={`px-3 py-1 text-xs font-bold font-mono rounded-sm transition-all cursor-pointer flex items-center space-x-1 ${
                  activeTab === "raw" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Raw Markdown</span>
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-sm text-xs font-mono font-bold transition-colors flex items-center space-x-1 cursor-pointer"
              title="Copy Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/SummerPapaya/Supply-Chain-Industry-Research"
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-sm text-xs font-mono font-bold transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-white font-sans text-slate-900">
          {loading ? (
            <div className="py-20 text-center font-mono text-xs text-slate-500 animate-pulse">
              Loading README.md preview...
            </div>
          ) : activeTab === "raw" ? (
            <pre className="bg-slate-950 text-slate-200 p-5 rounded-sm overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 whitespace-pre-wrap">
              {readmeText}
            </pre>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-sm text-amber-900 text-xs font-mono flex items-center justify-between">
                <span>✨ Local Preview mode active. Changes are strictly local and not pushed.</span>
                <span className="font-bold">README.md</span>
              </div>
              <div className="markdown-body prose max-w-none text-slate-800 text-xs sm:text-sm leading-relaxed space-y-4">
                <Markdown>{readmeText}</Markdown>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-3 px-6 text-xs text-slate-500 font-mono flex flex-col sm:flex-row justify-between items-center gap-2 shrink-0">
          <span>Repository: SummerPapaya/Supply-Chain-Industry-Research</span>
          <div className="flex items-center space-x-3">
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-sm">
              Local Preview Ready
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-sm font-bold cursor-pointer transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
