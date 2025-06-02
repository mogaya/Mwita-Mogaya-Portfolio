import React from "react";
import {
  BriefcaseBusiness,
  FileTerminal,
  Palette,
  PencilRuler,
  Server,
  TabletSmartphone,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BriefcaseBusiness: BriefcaseBusiness,
  PencilRuler: PencilRuler,
  Palette: Palette,
  TabletSmartphone: TabletSmartphone,
  Server: Server,
  FileTerminal: FileTerminal,
};

export default iconMap;
