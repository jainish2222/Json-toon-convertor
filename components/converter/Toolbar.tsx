"use client";
import { Button } from "@/components/ui/Button";
import { FileUp, ArrowLeftRight, History } from "lucide-react";

interface Props {
  onLoadExample: () => void;
  onConvert: () => void;
  onToggleHistory: () => void;
}

export function Toolbar({ onLoadExample, onConvert, onToggleHistory }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <Button variant="secondary" size="sm" onClick={onLoadExample}>
        <FileUp className="h-4 w-4" />
        Load example
      </Button>
      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm" onClick={onConvert}>
          <ArrowLeftRight className="h-4 w-4" />
          JSON to TOON
        </Button>
        <Button variant="secondary" size="sm" onClick={onToggleHistory}>
          <History className="h-4 w-4" />
          History
        </Button>
      </div>
    </div>
  );
}