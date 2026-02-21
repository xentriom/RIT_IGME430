import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { POKEMON_TYPES, TYPE_BG_ONLY, type PokemonType } from "../lib/pokemon";

export default function TypeSelector({
  selected,
  onChange,
  maxTypes = 2,
  className,
}: {
  selected: string[];
  onChange: (types: string[]) => void;
  maxTypes?: number;
  className?: string;
}) {
  const toggleType = (type: string) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else if (selected.length < maxTypes) {
      onChange([...selected, type]);
    }
  };

  return (
    <div className={cn("grid grid-cols-3 sm:grid-cols-6 gap-2", className)}>
      {POKEMON_TYPES.map((type) => {
        const isSelected = selected.includes(type);
        const isDisabled = !isSelected && selected.length >= maxTypes;
        return (
          <button
            key={type}
            type="button"
            onClick={() => toggleType(type)}
            disabled={isDisabled}
            className={cn(
              "px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border",
              isSelected
                ? `${TYPE_BG_ONLY[type]} text-taupe-50 border-transparent shadow-lg scale-103`
                : isDisabled
                  ? "bg-taupe-100 text-taupe-300 border-taupe-200 cursor-not-allowed opacity-50"
                  : "bg-taupe-50 text-taupe-700 border-taupe-200 hover:border-taupe-400 hover:shadow-md",
            )}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

export function TypeBadge({
  type,
  onRemove,
  className,
}: {
  type: string;
  onRemove?: () => void;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium text-taupe-50 shadow-sm px-2 py-0.5 text-xs",
        TYPE_BG_ONLY[type as PokemonType] ?? "bg-gray-400",
        className,
      )}
    >
      {type}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="rounded-full p-0.5 hover:bg-taupe-50/20 transition-colors"
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
}
