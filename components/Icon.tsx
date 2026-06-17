import {
  FlaskConical, Wheat, Pill, Droplets, Microscope, GlassWater,
  Lightbulb, ShieldCheck, Truck, Link2, TestTubes,
  Trophy, Globe, Wrench, PackageCheck, Handshake, MapPin,
  Factory, Beaker, Atom, BadgeCheck,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  FlaskConical, Wheat, Pill, Droplets, Microscope, GlassWater,
  Lightbulb, ShieldCheck, Truck, Link2, TestTubes,
  Trophy, Globe, Wrench, PackageCheck, Handshake, MapPin,
  Factory, Beaker, Atom, BadgeCheck,
};

export default function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Comp = MAP[name] ?? FlaskConical;
  return <Comp size={size} className={className} />;
}
