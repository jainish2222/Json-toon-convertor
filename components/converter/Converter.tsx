"use client";
import { useState } from "react";
import { Toolbar } from "./Toolbar";
import { JsonInputPanel } from "./JsonInputPanel";
import { ToonOutputPanel } from "./ToonOutputPanel";
import { SettingsBar } from "./SettingsBar";
import { HistoryDrawer } from "./HistoryDrawer";
import { useConverter } from "@/hooks/useConverter";
import { useHistory } from "@/hooks/useHistory";
import type { HistoryEntry } from "@/types";

export function Converter() {
  const c = useConverter();
  const history = useHistory();
  const [historyOpen, setHistoryOpen] = useState(false);

  const handleConvert = () => {
    if (c.result.ok && c.input.trim()) history.add(c.input, c.output, c.options);
  };

  const handleRestore = (entry: HistoryEntry) => {
    c.setInput(entry.input);
    c.setOptions(entry.options);
    setHistoryOpen(false);
  };

  return (
    <div id="converter" className="flex scroll-mt-24 flex-col gap-5">
      <Toolbar
        onLoadExample={c.loadExample}
        onConvert={handleConvert}
        onToggleHistory={() => setHistoryOpen(true)}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <JsonInputPanel
          value={c.input}
          onChange={c.setInput}
          onClear={c.clear}
          tokens={c.stats.json}
          error={c.error}
        />
        <ToonOutputPanel value={c.output} tokens={c.stats.toon} savedPct={c.stats.savedPct} />
      </div>

      <SettingsBar options={c.options} setOption={c.setOption} />

      <HistoryDrawer
        open={historyOpen}
        entries={history.entries}
        onClose={() => setHistoryOpen(false)}
        onRestore={handleRestore}
        onRemove={history.remove}
        onClear={history.clear}
      />
    </div>
  );
}