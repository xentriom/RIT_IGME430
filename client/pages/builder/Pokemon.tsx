import { useState, useCallback, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import Dropzone from "../../components/Dropzone";
import TypeSelector, { TypeBadge } from "../../components/TypeSelector";
import type { Pokemon } from "../../lib/types";

const inputClass =
  "w-full px-4 py-3 border-0 bg-white text-sm text-taupe-900 placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-500 focus:ring-inset";

function FormRow({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-taupe-200 last:border-b-0">
      <label
        htmlFor={htmlFor}
        className="shrink-0 px-4 py-3 text-sm font-medium text-taupe-700 bg-taupe-100 sm:w-32 sm:border-r sm:border-taupe-200"
      >
        {label}
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <div>
        <h2 className="text-lg font-semibold text-taupe-900">{title}</h2>
        {description && <p className="text-sm text-taupe-500">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function PokemonBuilder() {
  const [name, setName] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [created, setCreated] = useState<Pokemon | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const clearImage = useCallback(() => {
    setImageFile(null);
    setImagePreview(null);
  }, []);

  const resetForm = () => {
    setName("");
    setSelectedTypes([]);
    setHeight("");
    setWeight("");
    clearImage();
    setError(null);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setCreated(null);

    if (!name.trim()) return setError("Please enter a name");
    if (selectedTypes.length === 0)
      return setError("Please select at least one type");
    if (!height.trim()) return setError("Please enter a height");
    if (!weight.trim()) return setError("Please enter a weight");

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set("type", JSON.stringify(selectedTypes));
    if (imageFile) formData.set("image", imageFile);

    let res: Response;
    let data: Pokemon & { message?: string };

    try {
      res = await fetch("/api/pokemon", { method: "POST", body: formData });
      data = await res.json();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
      return;
    }

    setLoading(false);

    if (!res.ok) {
      setError(data.message ?? "Failed to create Pokémon");
      return;
    }

    setCreated(data);
    resetForm();
  };

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Create Pokémon</h1>
        <p className="text-taupe-600">
          Add a new custom Pokémon to the database with your own stats and
          image.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Section
          title="Basic Info"
          description="The name and physical attributes of your Pokémon"
        >
          <div className="overflow-hidden rounded-md border border-taupe-300 bg-white">
            <FormRow label="Name" htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a unique name..."
                className={inputClass}
              />
            </FormRow>
            <FormRow label="Height" htmlFor="height">
              <input
                type="text"
                id="height"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g., 0.7 m"
                className={inputClass}
              />
            </FormRow>
            <FormRow label="Weight" htmlFor="weight">
              <input
                type="text"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g., 6.9 kg"
                className={inputClass}
              />
            </FormRow>
          </div>
        </Section>

        <Section
          title="Type"
          description="Select up to 2 elemental types for your Pokémon"
        >
          <TypeSelector
            selected={selectedTypes}
            onChange={setSelectedTypes}
            maxTypes={2}
          />
        </Section>

        <Section
          title="Image"
          description="Upload a PNG, JPG, or WebP image (max 5MB)"
        >
          <Dropzone
            file={imageFile}
            preview={imagePreview}
            onFileSelect={handleFileSelect}
            onClear={clearImage}
            className="max-w-none"
          />
        </Section>

        {error && (
          <div className="rounded-md border border-red-300 bg-red-50 px-4 py-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="flex gap-3 border-t border-taupe-200 pt-8">
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "py-2.5 px-5 rounded-md font-medium text-white transition-colors flex items-center justify-center gap-2",
              loading
                ? "bg-taupe-400 cursor-not-allowed"
                : "bg-taupe-700 hover:bg-taupe-600",
            )}
          >
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Creating..." : "Create Pokémon"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="py-2.5 px-5 rounded-md font-medium bg-taupe-100 border border-taupe-300 text-taupe-700 hover:bg-taupe-200 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>

      {created && (
        <CreatedModal pokemon={created} onClose={() => setCreated(null)} />
      )}
    </article>
  );
}

function CreatedModal({
  pokemon,
  onClose,
}: {
  pokemon: Pokemon;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-1.5 rounded-md text-taupe-400 hover:text-taupe-600 hover:bg-taupe-100 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-taupe-900">
              Pokémon Created
            </h2>
            <p className="text-sm text-taupe-500">
              Added to the database successfully
            </p>
          </div>

          <div className="rounded-lg border border-taupe-200 bg-taupe-50 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-taupe-900">{pokemon.name}</h3>
              <span className="text-xs font-mono text-taupe-400 bg-white px-2 py-1 rounded border border-taupe-200">
                #{pokemon.num}
              </span>
            </div>

            <div className="flex gap-4">
              <div className="w-20 aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0 border border-taupe-200">
                {pokemon.img ? (
                  <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <span className="text-2xl text-taupe-300">?</span>
                )}
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {pokemon.type.map((t) => (
                    <TypeBadge key={t} type={t} />
                  ))}
                </div>

                <div className="flex gap-3 text-sm text-taupe-600">
                  <span>{pokemon.height}</span>
                  <span>{pokemon.weight}</span>
                </div>

                {pokemon.weaknesses.length > 0 && (
                  <div>
                    <span className="text-xs text-taupe-500 mb-1 block">
                      Weaknesses
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pokemon.weaknesses.map((w) => (
                        <TypeBadge key={w} type={w} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-taupe-200 px-6 py-4 bg-taupe-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-md font-medium bg-taupe-700 text-white hover:bg-taupe-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
