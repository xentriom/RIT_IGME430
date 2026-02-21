import { useState } from "react";
import Dropzone from "../../components/Dropzone";
import TypeSelector, { TypeBadge } from "../../components/TypeSelector";
import {
  inputClass,
  FormRow,
  Section,
  ErrorAlert,
  SubmitButton,
  ResetButton,
  Modal,
} from "../../components/FormElements";
import type { Pokemon } from "../../lib/types";

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

  const handleFileSelect = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

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
        <h1 className="text-3xl font-bold mb-2">Build Your Own Pokémon</h1>
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
          <div className="overflow-hidden rounded-md border border-taupe-300 bg-taupe-50">
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

        {error && <ErrorAlert message={error} />}

        <div className="flex gap-3 border-t border-taupe-200 pt-8">
          <SubmitButton loading={loading}>Create Pokémon</SubmitButton>
          <ResetButton onClick={resetForm} />
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
  return (
    <Modal
      title="Pokémon Created"
      subtitle="Added to the database successfully"
      onClose={onClose}
    >
      <div className="rounded-lg border border-taupe-200 bg-taupe-50 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-taupe-900">{pokemon.name}</h3>
          <span className="text-xs font-mono text-taupe-400 bg-taupe-50 px-2 py-1 rounded border border-taupe-200">
            #{pokemon.num}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="w-20 aspect-square rounded-lg bg-taupe-50 flex items-center justify-center overflow-hidden shrink-0 border border-taupe-200">
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
    </Modal>
  );
}
