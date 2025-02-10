import React, { useState, useRef } from 'react';
import { checkGrammar } from '../lib/gemini';
import { Loader2, Upload, FileText, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function TextEditor() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter some text to check');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const suggestions = await checkGrammar(text);
      setResult(suggestions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'text/plain') {
        setError('Please upload a .txt file');
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setText(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const clearFile = () => {
    setText('');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here or upload a file..."
            className="w-full h-48 p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
            disabled={loading}
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-transparent group-hover:border-indigo-300 group-focus-within:border-indigo-500 transition-colors duration-300 animate-border" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Upload className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Upload .txt file</span>
            </label>
          </div>

          {fileName && (
            <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full">
              <FileText className="h-4 w-4 text-indigo-600" />
              <span className="text-sm text-indigo-600">{fileName}</span>
              <button
                type="button"
                onClick={clearFile}
                className="text-indigo-600 hover:text-indigo-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:scale-[1.02]"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Checking...
            </>
          ) : (
            'Check Grammar'
          )}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md transform transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggestions</h3>
          <div className="prose prose-indigo max-w-none">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}